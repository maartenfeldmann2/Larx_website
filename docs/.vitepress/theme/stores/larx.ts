import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    darkMode: false,
  }),
  actions: {
    toggleDark() {
      this.darkMode = !this.darkMode;
    },
    setDarkMode(value) {
      this.darkMode = value;
    }
  },
});