<script setup lang="ts">

import { onMounted, onUnmounted, ref, nextTick, watchEffect, watch } from 'vue';
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import VPHero from 'vitepress/dist/client/theme-default/components/VPHero.vue'

const { frontmatter: fm } = useData()

const isScrolled = ref(false);
let observer = null;

const contentEl = ref(document.querySelector('.content'));
const navbarEl = ref(document.querySelector('a span'));




onMounted(async () => {
  // 1. Wait for Vue to finish rendering ALL components across the app
  await nextTick();

  // 2. Safely query the global DOM elements
  contentEl.value = document.querySelector('.content');
  navbarEl.value = document.querySelector('a span');

  console.log('contentEl:', contentEl, 'navbarEl:', navbarEl);

  // 3. Conditional protection: check if the elements exist before running
  if (!contentEl.value || !navbarEl.value) {
    console.warn("Hero Component: Target scroll elements not found in the DOM yet.");
    return;
  }

  const options = {
  root: null, // Watch the main browser viewport
  rootMargin: '-1px 0px 0px 0px', // Triggers the instant the top of .content moves 1px past the top
  threshold: 0 // Trigger immediately on crossing the line
};

  // 4. Initialize the observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Toggle a class globally on the navbar or manage local state
      if (entry.isIntersecting) {
        navbarEl.value.style.setProperty('color', 'black', 'important');
      } else {
        navbarEl.value.style.setProperty('color', 'white', 'important');
      }
    });
  }, options);

  // 5. Safely start observing the element
  observer.observe(contentEl.value);
});

// 6. Clean up the observer when this component is destroyed
onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template class="">
  <!-- <VPHero
    v-if="fm.hero"
    class="VPHomeHero"
    :name="fm.hero.name"
    :text="fm.hero.text"
    :tagline="fm.hero.tagline"
    :image="fm.hero.image"
    :actions="fm.hero.actions"
  >
    <template #home-hero-info-before><slot name="home-hero-info-before" /></template>
    <template #home-hero-info><slot name="home-hero-info" /></template>
    <template #home-hero-info-after><slot name="home-hero-info-after" /></template>
    <template #home-hero-actions-after><slot name="home-hero-actions-after" /></template>
    <template #home-hero-image><slot name="home-hero-image" /></template>
  </VPHero> -->
<!--   <div class="video-background"> -->
    
  <div class="relative flex justify-center h-screen w-full overflow-hidden">
    <video autoplay loop muted playsinline>
      <source class="absolute inset-0 w-full object-cover mt-0" src="/video/corporate.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        <!-- Background video -->
        <!-- <video
            class="absolute inset-0 w-full object-cover"
            src="./corporate.mp4"
            autoplay
            loop
            muted
            playsinline
        /> -->
        
        <!-- Dark overlay (optional) -->
        <div class="absolute inset-0 bg-black/10 z-[1]"></div>
        
       <!-- Content - positioned just below center -->
        
          <!-- <div class="mx-auto h-full w-full flex flex-col justify-center max-w-7xl z-10">
             
                  <div class="relative">
                       
                      <p class="tracking-normal [word-spacing:0.3rem]" id="text1">{{ trans('home.text1') }}</p>
                      <p class="tracking-normal [word-spacing:0.3rem]" id="text2">{{ trans('home.text2') }}</p>
                      <p class="tracking-normal [word-spacing:0.3rem]" id="text3">{{ trans('home.text3') }}</p>
                      <Link href="/contact-us">
                        <Button class="mt-10 mr-2" variant="outline" size="lg">
                          {{ trans('button.hero.cta1') }}
                        </Button>
                      </Link>
                      <Link href="/about">
                        <Button variant="secondary" class="mt-4" size="lg">
                          {{ trans('button.hero.cta2') }}
                        </Button>
                      </Link>
                  </div>
              
          </div> -->
        
    <!-- End Content -->
        
          
        
    </div>
</template>

<style scoped>
  

</style>