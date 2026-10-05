export const siteConfig = {
  name: 'Ricardo Reyes Gomez',
  title: 'Ricardo | Desarrollador Software',
  description:
    'Portafolio de Ricardo Reyes Gomez, desarrollador de software enfocado en Full Stack, arquitectura de aplicaciones y código limpio.',
  url: 'https://RyuheiRG.github.io',
  baseUrl: '/LandingPageTopicosU3/',
  ogImage: '/LandingPageTopicosU3/assets/ryuhei-logo.png',
  themeColor: '#000000',
  links: {
    github: 'https://github.com/RyuheiRG',
  },
  author: {
    name: 'Ricardo Reyes Gomez',
    url: 'https://github.com/RyuheiRG',
  },
} as const

export type SiteConfig = typeof siteConfig
