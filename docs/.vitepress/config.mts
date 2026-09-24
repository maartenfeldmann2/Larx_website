import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'



// https://vitepress.dev/reference/site-config
export default defineConfig({
// Vite configuration for aliasing VPHomeHero component. VPHomeHero in node_modules will be replaced by the local theme components directory.
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/Layout\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/Layout.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPHomeHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHomeHero.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNav\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPNav.vue', import.meta.url)
          )
        },
        /* {
          find: /^.*\/VPFlyout\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFlyout.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNavBarTranslations\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPNavBarTranslations.vue', import.meta.url)
          )
        }, */
      ]
    }
  },
  title: "Larx Legal",
  description: "Secure Client Collaboration Platform",
  head: [
    ['link', { rel: 'icon', id: 'favicon', href: '/logo_larx.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/Logo/logo_larx.png',
      dark: '/Logo/logo_larx_dark.png'
    },
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Larx Legal</a>'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features',
        items: [  
          { 
            component: 'Filesharing'
          },
          { 
            component: 'DossierManagement'
          },
          { 
            component: 'Collaboration'
          },
          { 
            component: 'ClientManagement'
          },
          /* { 
            component: 'Marketing'
          }, */
          /* { 
            component: 'Security'
          }, */
          
        ]
      },
      { text: 'Guide', link: '/guide' },
      /* { text: 'Reference', link: '/markdown-examples' }, */
      /* { text: 'Examples', link: '/markdown-examples' },
      { text: 'About', link: '/about' } */
    ],
    // conditionally show sidebar based on route
    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          /* { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }, */
          { text: 'Dossier Management', link: '/dossier_actions' },
          { text: 'Client Management', link: '/client_actions' },
          { text: 'Lawyer Management', link: '/lawyer_actions' },
          { text: 'Representative Management', link: '/representative_actions' },
          { text: 'Firm Management', link: '/firm_actions' },
          
        ]
      }
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    


    

    
  }
  
})
/* export interface Footer {
  // The message shown right before copyright.
  message?: string

  // The actual copyright text.
  copyright?: string
} */

