<script setup lang="ts">
import { inBrowser } from 'vitepress'
import { computed, provide, watchEffect, onMounted, onUnmounted, ref, nextTick } from 'vue'
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import { useNav } from 'vitepress/dist/client/theme-default/composables/nav.js'
import VPNavBar from 'vitepress/dist/client/theme-default/components/VPNavBar.vue'
import VPNavScreen from 'vitepress/dist/client/theme-default/components/VPNavScreen.vue'

const { isScreenOpen, closeScreen, toggleScreen } = useNav()
const { frontmatter } = useData()

const isScrolled = ref(false);

let allNavbarElements = [];
let isHtmlDarkMode = ref(false);
let observer: MutationObserver | null = null;

const checkDarkMode = () => {
  isHtmlDarkMode.value = document.documentElement.classList.contains('dark');
};

const handleScroll = () => {

      if (isHtmlDarkMode.value) {
        // If the array is empty (elements weren't found), don't run
        if (allNavbarElements.length === 0) return;

        const currentScroll = window.scrollY || document.documentElement.scrollTop;

        // Determine if we are scrolled down
        if (currentScroll > 0) {
          if (!isScrolled.value) {
            isScrolled.value = true


            // Loop through all 5 elements and set them to white

              allNavbarElements.forEach(el => {
                el.style.setProperty('color', 'white', 'important');
              });
              console.log('All elements changed to: white');
            }

        } else {
          if (isScrolled.value) {
            isScrolled.value = false;

            // Loop through all 5 elements and set them back to black
            allNavbarElements.forEach(el => {
              el.style.setProperty('color', 'black', 'important');
            });
            console.log('All elements changed to: black');
          }
        }
      } else {
        // If HTML is not in dark mode, reset all navbar elements to black
        allNavbarElements.forEach(el => {
          el.style.setProperty('color', 'black', 'important');
        });
        console.log('All elements changed to: black');
      }
};

onMounted(async () => {
  await nextTick();

  // Watch for class changes on <html>. Runs in onMounted because `document`
  // does not exist during the server-side build.
  observer = new MutationObserver(checkDarkMode);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  checkDarkMode();

  // 1. Gather elements from both selectors
  const groupA = document.querySelectorAll('nav a span');
  const individualEl = document.querySelector('a span');
  const individualEl2 = document.querySelector('div button span');

  // 2. Combine them into a single Array, using a Set to filter out duplicates
  allNavbarElements = Array.from(new Set([...groupA, individualEl, individualEl2].filter(Boolean)));

  console.log('isHtmlDarkMode:', isHtmlDarkMode.value);

  if (isHtmlDarkMode.value) {
    allNavbarElements.forEach(el => {
      el.style.setProperty('color', 'black', 'important');
      
    });
  }

  if (allNavbarElements.length === 0) {
    console.warn("Hero Component: No navbar elements found.");
    return;
  }

  // Set the initial colors on page load
  handleScroll();

  // Listen to scrolling events
  window.addEventListener('scroll', handleScroll, { passive: true });
  document.addEventListener('scroll', handleScroll, { capture: true, passive: true });
});

onUnmounted(() => {
  observer?.disconnect();
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('scroll', handleScroll, { capture: true });
});

const hasNavbar = computed(() => {
  return frontmatter.value.navbar !== false
})

provide('close-screen', closeScreen)

watchEffect(() => {
  if (inBrowser) {
    document.documentElement.classList.toggle('hide-nav', !hasNavbar.value)
  }
})
</script>

<template>
  <header v-if="hasNavbar" class="VPNav">
    <VPNavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen">
      <template #nav-bar-title-before><slot name="nav-bar-title-before" /></template>
      <template #nav-bar-title-after><slot name="nav-bar-title-after" /></template>
      <template #nav-bar-content-before><slot name="nav-bar-content-before" /></template>
      <template #nav-bar-content-after><slot name="nav-bar-content-after" /></template>
    </VPNavBar>
    <VPNavScreen :open="isScreenOpen">
      <template #nav-screen-content-before><slot name="nav-screen-content-before" /></template>
      <template #nav-screen-content-after><slot name="nav-screen-content-after" /></template>
    </VPNavScreen>
  </header>
</template>

<style scoped>
.VPNav {
  position: relative;
  top: var(--vp-layout-top-height, 0px);
  /*rtl:ignore*/
  left: 0;
  z-index: var(--vp-z-index-nav);
  width: 100%;
  pointer-events: none;
  transition: background-color 0.5s;
}

@media (min-width: 960px) {
  .VPNav {
    position: fixed;
  }
}
</style>
