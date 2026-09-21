<script setup lang="ts">

import { withBase } from 'vitepress'
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import { onMounted, onUnmounted, ref, nextTick, watchEffect, watch, computed } from 'vue';
import { useStore } from '../stores/larx'

const { frontmatter: fm } = useData()
const store = useStore()
/* const isScrolled = ref(false); */
// Store all elements in an array
/* let allNavbarElements = []; */
let isHtmlDarkMode = ref(false);
let observer: MutationObserver | null = null;
let iconColor = ref('orange');
let iconColorNight = ref('#c16200');
let iconColorDay = ref('#9a4224');
let iconColorBackgroundDay = ref('rgba(246, 246, 247, 0.2)');
let iconColorBackgroundNight = ref('rgba(0, 0, 0, 0.2)');

const checkDarkMode = () => {
  isHtmlDarkMode.value = document.documentElement.classList.contains('dark');
  store.setDarkMode(false);
};

// watch status of HTML dark mode class
watch(isHtmlDarkMode, (newVal) => {
  if (newVal) {
    // Night mode activated
  } else {
    // Day mode activated
  }
});

/* const handleScroll = () => {

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
}; */

onMounted(async () => {
  await nextTick();

  // Watch for class changes on <html>. Runs in onMounted because `document`
  // does not exist during the server-side build.
  observer = new MutationObserver(checkDarkMode);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  checkDarkMode();

  /* // 1. Gather elements from both selectors
  const groupA = document.querySelectorAll('nav a span');
  const individualEl = document.querySelector('a span');
  const individualEl2 = document.querySelector('div button span');

  // 2. Combine them into a single Array, using a Set to filter out duplicates
  allNavbarElements = Array.from(new Set([...groupA, individualEl, individualEl2].filter(Boolean))); */

  console.log('isHtmlDarkMode:', isHtmlDarkMode.value);

  /* if (isHtmlDarkMode.value) {
    allNavbarElements.forEach(el => {
      el.style.setProperty('color', 'black', 'important');
      iconColor.value = 'orange';
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
  document.addEventListener('scroll', handleScroll, { capture: true, passive: true }); */
});

onUnmounted(() => {
  observer?.disconnect();
  /* window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('scroll', handleScroll, { capture: true }); */
});


</script>

<template>
  <div class="hero">
        <!-- Background video -->
        <video
            class="hero-video"
            src="/video/corporate.mp4"
            autoplay
            loop
            muted
            playsinline
        />

        <!-- Dark overlay for text readability -->
        <div class="hero-overlay"></div>

        <div class="hero-content">
            <!-- Hero text from index.md frontmatter, VitePress-style -->
            <div class="hero-main">
                <h1 v-if="fm.hero?.name" class="hero-name">{{ fm.hero.name }}</h1>
                <p v-if="fm.hero?.text" class="hero-text">{{ fm.hero.text }}</p>
                <p v-if="fm.hero?.tagline" class="hero-tagline">{{ fm.hero.tagline }}</p>

                <div v-if="fm.hero?.actions?.length" class="hero-actions">
                  <a
                    v-for="action in fm.hero.actions"
                    :key="action.link"
                    class="hero-action"
                    :class="action.theme === 'brand' ? 'hero-action--brand' : 'hero-action--alt'"
                    :href="withBase(action.link)"
                  >
                    {{ action.text }}
                  </a>
                </div>
            </div>

             <!-- FEATURES -->

            <div class="hero-features">
              <!-- Feature 1: Client Portal -->
              <a class="hero-feature" href="/filesharing">
                <div class="hero-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :fill="isHtmlDarkMode ? iconColorNight : iconColorDay" class="size-5">
                    <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z" />
                  </svg>
                </div>
                <h2 class="hero-feature-title">Client Portal</h2>
                <p class="hero-feature-details">Upload and share documents from anywhere only by authorised persons in a secure environment.</p>
                <p class="hero-feature-link">Find out more →</p>


                
                
              </a>
              <!-- Feature 3: Document Management System -->
               <a class="hero-feature" href="/dossier-management">
                <div class="hero-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :fill="isHtmlDarkMode ? iconColorNight : iconColorDay" class="size-5">
                  <path d="M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 7.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-13Z" />
                  </svg>
                </div>
                <h2 class="hero-feature-title">Document Management System</h2>
                <p class="hero-feature-details">Managem dossiers per client and allow only access to designated trusted persons.</p>
                <p class="hero-feature-link">Find out more →</p>
                
                
              </a>

              <!-- Feature 2: Collaboration -->
              <a class="hero-feature" href="/collaboration">
                <div class="hero-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="isHtmlDarkMode ? iconColorNight : iconColorDay" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>

                </div>
                <h2 class="hero-feature-title">Collaboration Environment</h2>
                <p class="hero-feature-details">Full control over clients, teams and dossier access — managed from one secure dashboard.</p>
                <p class="hero-feature-link">Find out more →</p>
                
              </a>

              

              <!-- Feature 4: Client Management -->
              <a class="hero-feature" href="/client-management">
                <div class="hero-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :fill="isHtmlDarkMode ? iconColorNight : iconColorDay" class="size-5">
                  <path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
                </svg>
                </div>
                <h2 class="hero-feature-title">Client Management</h2>
                <p class="hero-feature-details">Full control over clients, teams and dossier access — managed from one secure dashboard.</p>
                <p class="hero-feature-link">Find out more →</p>
                
              </a>

              <!-- Feature 5: Marketing Management Engine -->
              <a class="hero-feature" href="/marketing">
                <div class="hero-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :fill="isHtmlDarkMode ? iconColorNight : iconColorDay" class="size-5">
                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h2 class="hero-feature-title">Marketing Management Engine</h2>
                <p class="hero-feature-details">Full control over clients, teams and dossier access — managed from one secure dashboard.</p>
                <p class="hero-feature-link">Find out more →</p>
                
              </a>

              <!-- Feature 6: Secure and Trusted Environment -->
              <a class="hero-feature" href="/security">
                <div class="hero-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="isHtmlDarkMode ? iconColorNight : iconColorDay" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>

                </div>
                <h2 class="hero-feature-title">Secure</h2>
                <p class="hero-feature-details">Full control over clients, teams and dossier access — managed from one secure dashboard.</p>
                <p class="hero-feature-link">Find out more →</p>
                
              </a>
            </div>

        </div>
  </div>

  

  

  


  






</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.25) 50%,
    rgba(0, 0, 0, 0.45)
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1152px;
  padding: calc(var(--vp-nav-height) + 24px) 24px 48px;
  margin: 0 auto;
}

/* ===== Hero text (mirrors the native VPHero look) ===== */
.hero-main {
  margin: auto 0;
  text-align: center;
  padding: 40px 0;
}

.hero-name {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #a8b1ff; /* light brand tint, readable on the video */
  margin: 0;
}

.hero-text {
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 8px 0 0;
}

.hero-tagline {
  max-width: 640px;
  margin: 20px auto 0;
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
}

/* ===== Action buttons (VitePress brand / alt themes) ===== */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}

.hero-action {
  display: inline-block;
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;
}

.hero-action--brand {
  border: 1px solid transparent;
  background-color: var(--vp-c-brand-3);
  color: #ffffff;
}

.hero-action--brand:hover {
  background-color: var(--vp-c-brand-2);
}

.hero-action--alt {
  border: 1px solid rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.hero-action--alt:hover {
  background-color: rgba(255, 255, 255, 0.24);
}

/* ===== Feature cards at the bottom of the hero ===== */
.hero-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.hero-feature {
  display: block;
  padding: 24px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  text-decoration: none;
  transition: background-color 0.25s, border-color 0.25s;
}

a.hero-feature:hover {
  background-color: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.4);
}

.hero-feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: rgba(246, 246, 247, 0.6);
  font-size: 18px;
  padding: 8px;
  margin-bottom: 16px;
}

.hero-feature-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: #ffffff;
  margin: 0;
  border: none;
  padding: 0;
}

.hero-feature-details {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin: 8px 0 0;
}

.hero-feature-link {
  font-size: 14px;
  font-weight: 500;
  color: #a8b1ff;
  margin: 12px 0 0;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .hero-features {
    grid-template-columns: 1fr;
  }
}
</style>

<!-- Unscoped on purpose: the frontmatter features are rendered inside the hero
     above, so hide the default VPFeatures section that VitePress would
     otherwise render below the hero (it would duplicate the cards). -->
<style>
.VPHome .VPFeatures {
  display: none;
}
</style>
