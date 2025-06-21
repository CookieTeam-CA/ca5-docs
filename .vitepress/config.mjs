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
      { text: 'Online Map', link: 'http://map.cookieattack.de:5555' },
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: '🍪 Startseite', link: '/' },
          { text: '📃 Regeln', link: '/rules' },
          { text: '📝 Changelog', link: '/changelog' },
          { text: '📦 Mods', link: '/mods'},
          { text: '❓ FAQ', link: '/faq' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: '🪦 Grabsteine', link: '/features/graves' },
          { text: '🪑 Setzen', link: '/features/sit' },
          { text: '🖼️ Bilder', link: '/features/image' },
          { text: '🚩 Claimen', link: '/features/claim' },
          { text: '🗺️ Online Map', link: '/features/map' },
          { text: '📊 Statistiken', link: '/features/stats' },
          { text: '⛏️ StatTrack', link: '/features/stattrack' },
          { text: '🏷️ Spieler Status', link: '/features/status' },
          { text: '🎙️ Voicechat', link: '/features/voicechat' },
          { text: '👁️ Dyn. Renderdistance', link: '/features/dynrender' }
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
