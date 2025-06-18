import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CookieAttack 5 Docs",
  description: "CookieAttack 5 Dokumentation",
  base: '/ca5-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Startseite', link: '/' },
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: '🍪 Startseite', link: '/' },
          { text: '📝 Changelog', link: '/changelog' },
          { text: '📦 Mods', link: '/mods'},
          { text: '❓ FAQ', link: '/faq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://dc.cookieattack.de' },
      { icon: 'youtube', link: 'https://www.youtube.com/@cookieteamca5' },
      { icon: 'tiktok', link: 'https://www.tiktok.com/@cookieteamca' },
      { icon: 'instagram', link: 'https://www.instagram.com/cookie.teamca/' },
      { icon: 'x', link: 'https://x.com/CookieTeamCA' }
    ]
  }
})
