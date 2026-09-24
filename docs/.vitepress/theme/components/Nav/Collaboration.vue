<script setup lang="ts">
import { withBase } from 'vitepress'
import { useData } from 'vitepress'
import { ref } from 'vue';


const { isDark } = useData()

let iconColorNight = ref('#c16200');
let iconColorDay = ref('#9a4224');

function handleLinkClick(event) {
  const dropdown = event.currentTarget.closest('.VPMenu')
  
  if (dropdown) {
    // Hard hide the dropdown from the viewport immediately
    dropdown.style.display = 'none'
    
    // Restore its native styling half a second later (after layout navigation settles)
    setTimeout(() => {
      dropdown.style.removeProperty('display')
    }, 500)
  }

  if (closeScreen) closeScreen()
}
</script>

<template>
  <a class="feature-item" :href="withBase('/collaboration')" @click="handleLinkClick">
    <div class="feature-icon">
      <!-- "files" icon from simple-icons -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke-width="1.5" :stroke="isDark ? iconColorNight : iconColorDay" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>
    </div>
    <div class="feature-text">
      <span class="feature-title">Collaboration Environment</span>
      <span class="feature-description">
        Collaborate effectively with team members in real-time
      </span>
    </div>
  </a>
</template>

<style scoped>
.feature-item {
  display: flex;
  align-items: stretch;
  gap: 12px;
  min-width: 260px;
  padding: 8px;
  border-radius: 8px;
  text-decoration: none;
  /* transition: background-color 0.25s; */
}

.feature-item:hover {
  background-color: var(--vp-c-default-soft);
}

/* Icon column: spans the full height of the tab */
.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 44px;
  border-radius: 6px;
  color: var(--vp-c-brand-1);
}

.feature-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 2px 0;
}

.feature-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--vp-c-text-1);
}

.feature-description {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--vp-c-text-2);
  white-space: normal;
}
</style>
