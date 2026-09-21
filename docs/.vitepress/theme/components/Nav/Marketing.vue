<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <a class="feature-item" :href="withBase('/marketing')">
    <div class="feature-icon">
      <!-- "files" icon from simple-icons -->
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.367 2.453a.82.82 0 0 0-.576.238L.241 14.213a.82.82 0 0 0-.241.584v.066c0-.323.209-.608.516-.709l7.275-2.318a2.44 2.44 0 0 0 1.584-1.592l2.318-7.267a.76.76 0 0 1 .719-.524zM0 14.863v5.047c0 .904.733 1.637 1.637 1.637h20.726c.904 0 1.637-.733 1.637-1.637V4.09c0-.904-.733-1.637-1.637-1.637h-9.951v.5l.088 9.861c.01 1.175-.962 2.14-2.137 2.14zM12 3.66l-2.148 6.735v.001a2.94 2.94 0 0 1-1.909 1.916l-6.716 2.141h9.136c.905 0 1.638-.734 1.637-1.639zm-10.363.975c-.905 0-1.638.734-1.637 1.638v7.473l9.135-9.111Z"
        />
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
  transition: background-color 0.25s;
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
  background-color: var(--vp-c-brand-soft);
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
