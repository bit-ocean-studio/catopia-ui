import { defineConfig } from 'vitepress'

const ogDescription = 'A minimalist style UI component library'
const ogImage = 'https://catopia-ui.bit-ocean.studio/og-image.png'
const ogTitle = 'Catopia UI'
const ogUrl = 'https://catopia-ui.bit-ocean.studio'

export default defineConfig({
  title: 'Catopia UI',
  description: 'A minimalist style UI component library',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }]
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'Get Started', link: '/guide/' }]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/xefFtN8QeE' },
      { icon: 'github', link: 'https://github.com/bit-ocean-studio/catopia-ui' }
    ],

    editLink: {
      pattern:
        'https://github.com/bit-ocean-studio/catopia-ui/edit/main/docs/:path',
      text: 'Edit this page in GitHub'
    },

    footer: {
      message: `Released under the MIT License. Deploy by Vercel.`,
      copyright: 'Copyright © 2023-present Bit Ocean Studio'
    },

    outline: 'deep'
  }
})
