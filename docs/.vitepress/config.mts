import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'



// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "Larx Legal",
  description: "Secure Client Collaboration Platform",
  head: [
    ['link', { rel: 'icon', id: 'favicon', href: '/logo_larx.png' }],
  ],
  /* vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPNavBarTitle.vue', import.meta.url)
          )
        }
      ]
    }
  }, */
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo_larx.png',
      dark: '/logo_larx_dark.png'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features',
        items: [  
          { 
            component: 'Filesharing'
          },
          { 
            component: 'Collaboration'
          },
          { 
            component: 'ClientManagement'
          },
          { 
            component: 'DossierManagement'
          },
        ]
      },
      { text: 'Guide', link: '/markdown-examples' },
      { text: 'Reference', link: '/about' },
      /* { text: 'Examples', link: '/markdown-examples' },
      { text: 'About', link: '/about' } */
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    


    

    
  }
})

