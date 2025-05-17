export default {
  title: "Frontend Docs",
  description: "Стандарты и гайды команды фронтенда",

  themeConfig: {
    nav: [
      { text: 'HTML', link: '/html' },
      { text: 'CSS / SCSS', link: '/css' },
      { text: 'Tailwind', link: '/tailwind' },
      { text: 'Компоненты', link: '/components' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Документация',
          items: [
            { text: 'HTML', link: '/html' },
            { text: 'CSS / SCSS', link: '/css' },
            { text: 'Tailwind', link: '/tailwind' },
            { text: 'Компоненты', link: '/components' }
          ]
        }
      ]
    }
  }
}