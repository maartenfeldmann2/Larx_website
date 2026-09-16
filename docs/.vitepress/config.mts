import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'



// https://vitepress.dev/reference/site-config
export default defineConfig({

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
      { text: 'Guide', link: '/guide' },
      /* { text: 'Reference', link: '/markdown-examples' }, */
      /* { text: 'Examples', link: '/markdown-examples' },
      { text: 'About', link: '/about' } */
    ],

    sidebar: [
      {
        text: 'Quick Start',
        collapsed: false,
        items: [
          /* { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }, */
          { text: 'Create Dossier', link: '/create_dossier' },
          { text: 'Create Client', link: '/create_client' },
          { text: 'Create Lawyer', link: '/create_lawyer' },
          { text: 'Create Representative', link: '/create_representative' },
          { text: 'Create Firm', link: '/create_firm' },
          
        ]
      },
      {
        text: 'Guide',
        collapsed: false,
        items: [
          /* { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }, */
          { text: 'Manage Dossier', link: '/dossier_actions' },
          { text: 'Manage Client', link: '/client_actions' },
          { text: 'Manage Lawyer', link: '/lawyer_actions' },
          { text: 'Manage Representative', link: '/representative_actions' },
          { text: 'Manage Firm', link: '/firm_actions' },
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    


    

    
  }
})

