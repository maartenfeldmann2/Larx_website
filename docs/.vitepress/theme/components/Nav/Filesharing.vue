<script setup lang="ts">

import { withBase } from 'vitepress'
import { ref } from 'vue';
import { useData } from 'vitepress'


const { isDark } = useData()

let iconColorNight = ref('#c16200');
let iconColorDay = ref('#9a4224');


</script>

<template>
  <a class="feature-item" :href="withBase('/filesharing')">
    <div class="feature-icon">
      <!-- "files" icon from simple-icons -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :fill="isDark ? iconColorNight : iconColorDay" class="size-5">
        <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z" />
      </svg>
    </div>
    <div class="feature-text">
      <span class="feature-title">Client Portal</span>
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
