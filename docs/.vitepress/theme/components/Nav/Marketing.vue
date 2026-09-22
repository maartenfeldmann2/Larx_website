<script setup lang="ts">
import { withBase } from 'vitepress'
import { useData } from 'vitepress'
import { ref } from 'vue';


const { isDark } = useData()

let iconColorNight = ref('#c16200');
let iconColorDay = ref('#9a4224');

</script>

<template>
  <a class="feature-item" :href="withBase('/marketing')">
    <div class="feature-icon">
      <!-- "files" icon from simple-icons -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :fill="isDark ? iconColorNight : iconColorDay" class="size-5">
                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
                  </svg>
    </div>
    <div class="feature-text">
      <span class="feature-title">Marketing Management Engine</span>
      <span class="feature-description">
        Target clients based on your own specifications without effort
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
