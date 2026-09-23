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
  <a class="feature-item" :href="withBase('/client-management')" @click="handleLinkClick">
    <div class="feature-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :fill="isDark ? iconColorNight : iconColorDay" class="size-5">
                  <path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
                </svg>
      
    </div>
    <div class="feature-text">
      <span class="feature-title">Client Management</span>
      <span class="feature-description">
        Share documents securely with clients and colleagues
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
  /* background-color: var(--vp-c-brand-soft); */
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
