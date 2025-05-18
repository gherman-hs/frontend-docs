export default {
  title: "Frontend Docs",
  description: "Frontend Docs",

  themeConfig: {
    logo: '/images/rrg.png',

    head: [
      ['meta', { name: 'theme-color', content: '#000000' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
      ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],

      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['link', { rel: 'apple-touch-icon', href: '/icons/android-chrome-192x192.png' }],
      ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ],

    nav: [
      { text: 'HTML', link: '/html' },
      { text: 'CSS / SCSS', link: '/css' },
      { text: 'Tailwind', link: '/tailwind' },
      { text: 'Components', link: '/components' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Documentation',

          items: [
            { text: 'HTML', link: '/html' },
            { text: 'CSS / SCSS', link: '/css' },
            { text: 'Tailwind', link: '/tailwind' },
            { text: 'Components', link: '/components' }
          ]
        }
      ]
    }
  }
}