import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'



// https://vitepress.dev/reference/site-config
export default defineConfig({
// Vite configuration for aliasing VPHomeHero component. VPHomeHero in node_modules will be replaced by the local theme components directory.
  vite: {
    resolve: {
      alias: [
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
        }
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
            component: 'DossierManagement'
          },
          { 
            component: 'Collaboration'
          },
          { 
            component: 'ClientManagement'
          },
          { 
            component: 'Marketing'
          },
          { 
            component: 'Security'
          },
          
        ]
      },
      { text: 'Guide', link: '/guide' },
      /* { text: 'Reference', link: '/markdown-examples' }, */
      /* { text: 'Examples', link: '/markdown-examples' },
      { text: 'About', link: '/about' } */
    ],

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

