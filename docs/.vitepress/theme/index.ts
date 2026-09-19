// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import FeaturesMenu from './components/FeaturesMenu.vue'
import Filesharing from './components/Nav/Filesharing.vue'
import Collaboration from './components/Nav/Collaboration.vue'
import ClientManagement from './components/Nav/ClientManagement.vue'
import DossierManagement from './components/Nav/DossierManagement.vue'


import './style.css'



export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FeaturesMenu', FeaturesMenu)
    app.component('Filesharing', Filesharing)
    app.component('Collaboration', Collaboration)
    app.component('ClientManagement', ClientManagement)
    app.component('DossierManagement', DossierManagement)
  

    // Swap the favicon when the theme toggles. Guarded because this file
    // also runs in Node during the SSR build, where `document` doesn't exist.
    if (typeof document !== 'undefined') {
      const updateFavicon = () => {
        const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
        if (!favicon) return
        const href = document.documentElement.classList.contains('dark')
          ? '/logo_larx_dark.png'
          : '/logo_larx.png'
        if (favicon.getAttribute('href') !== href) favicon.href = href
      }
      // Fires when the user toggles light/dark mode.
      new MutationObserver(updateFavicon).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      })
      // VitePress re-creates config-defined head tags on every client-side
      // route change, replacing our mutated favicon with the default one.
      // Watching <head> lets us re-apply the correct href right away.
      new MutationObserver(updateFavicon).observe(document.head, {
        childList: true,
      })
      updateFavicon()
    }
  },

  
} satisfies Theme
