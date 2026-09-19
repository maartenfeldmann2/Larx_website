<script setup lang="ts">

import { onMounted, onUnmounted, ref, nextTick, watchEffect, watch } from 'vue';

const isScrolled = ref(false);
let navbarEl = null;

const handleScroll = () => {
  if (!navbarEl) return;

  // 1. Measure the actual scroll container depth instead of the element's box
  const currentScroll = window.scrollY || document.documentElement.scrollTop;
  
  // 2. Flip states precisely based on whether the page has moved off the top (0px)
  if (currentScroll > 0) {
    if (!isScrolled.value) {
      isScrolled.value = true;
      navbarEl.style.setProperty('color', 'white', 'important');
      
    }
  } else {
    if (isScrolled.value) {
      isScrolled.value = false;
      navbarEl.style.setProperty('color', 'black', 'important');
      
    }
  }
};

onMounted(async () => {
  await nextTick();

  navbarEl = document.querySelector('a span');
  if (!navbarEl) {
    console.warn("Hero Component: Target navbar element not found.");
    return;
  }

  // Set the initial color based on the scroll position at load time
  handleScroll();

  // Attach listener to window and document boundaries
  window.addEventListener('scroll', handleScroll, { passive: true });
  document.addEventListener('scroll', handleScroll, { capture: true, passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('scroll', handleScroll, { capture: true });
});



</script>

<template class="hero-sections">
    
  <div class="hero-sections relative flex justify-center h-screen w-full overflow-hidden">
    <video autoplay loop muted playsinline>
      <source class="absolute inset-0 w-full object-cover mt-0" src="/video/corporate.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        <div class="absolute inset-0 bg-black/10 z-[1]"></div>
    </div>
</template>

<style scoped>
  

</style>