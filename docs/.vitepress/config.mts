import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '星球大战资料站',
  description: '星球大战世界观、原力、势力、时间线与观看顺序的中文入门资料站。',

  head: [
    // 网站图标
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],

    // ===============================
    // Google Analytics
    // ===============================
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-LQ6PY0WS11' }
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LQ6PY0WS11');
      `
    ]
  ],

  themeConfig: {
    logo: '/logo.svg',

    outline: [2, 3],

    footer: {
      message: 'May the Force Be With You. | 星球大战资料站',
      copyright: '© 2025 SGQY Project. All Rights Reserved.'
    },

    // ===============================
    // 顶部导航栏
    // ===============================
    nav: [
      { text: '首页', link: '/' },
      { text: '世界观概览', link: '/universe/overview' },
      { text: '原力与绝地 / 西斯', link: '/universe/force' },
      { text: '派系与势力', link: '/universe/factions' },
      { text: '时间线', link: '/universe/timeline' },
      {
        text: '资料库',
        items: [
          { text: '角色介绍', link: '/database/characters/overview' },
          { text: '星球与地点-正在建设中', link: '/database/locations' },
          { text: '武器与装备-正在建设中', link: '/database/weapons' },
          { text: '舰船与载具-正在建设中', link: '/database/ships' },
          { text: '历史事件档案-正在建设中', link: '/database/events' },
          { text: '术语百科-正在建设中', link: '/database/glossary' },
          { text: '观看顺序', link: '/database/watch-guide' },
          { text: '衍生作品-正在建设中', link: '/database/expanded' }
        ]
      }
    ],

    // ===============================
    // 全站侧边栏
    // ===============================
    sidebar: [
      {
        text: '世界观',
        collapsed: false,
        items: [
          { text: '概览', link: '/universe/overview' },
          { text: '原力与绝地 / 西斯', link: '/universe/force' },
          { text: '派系与势力', link: '/universe/factions' },
          { text: '时间线', link: '/universe/timeline' }
        ]
      },
      {
        text: '资料库',
        collapsed: false,
        items: [
          {
            text: '角色介绍',
            collapsed: true,
            items: [
              { text: '角色总览', link: '/database/characters/overview' },
              { text: '绝地人物大系', link: '/database/characters/jedi' },
              { text: '西斯人物大系', link: '/database/characters/sith' }
            ]
          },
          { text: '星球与地点', link: '/database/locations' },
          { text: '武器与装备', link: '/database/weapons' },
          { text: '舰船与载具', link: '/database/ships' },
          { text: '历史事件档案', link: '/database/events' },
          { text: '术语百科', link: '/database/glossary' },
          { text: '观看顺序', link: '/database/watch-guide' },
          { text: '衍生作品', link: '/database/expanded' }
        ]
      }
    ]
  }
})
