console.log("CUSTOM THEME LOADED!");
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '星球大战入门站',
  description: '星球大战世界观、原力、势力、时间线与观看顺序的中文入门资料站。',

  // 以后部署到 GitHub Pages 再加 base: '/WEB/' 即可
  // base: '/WEB/',

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '世界观概览', link: '/universe/overview' },
      { text: '原力与绝地 / 西斯', link: '/universe/force' },
      { text: '派系与势力', link: '/universe/factions' },
      { text: '时间线', link: '/universe/timeline' },
      { text: '观看顺序', link: '/universe/watch-guide' }
    ],

    sidebar: {
      '/universe/': [
        {
          text: '星战世界观',
          collapsed: false,
          items: [
            { text: '概览', link: '/universe/overview' },
            { text: '原力与绝地 / 西斯', link: '/universe/force' },
            { text: '派系与势力', link: '/universe/factions' },
            { text: '时间线', link: '/universe/timeline' },
            { text: '观看顺序', link: '/universe/watch-guide' }
          ]
        }
      ],
      '/': [
        {
          text: '指南',
          collapsed: false,
          items: [{ text: '首页', link: '/' }]
        }
      ]
    }
  }
})
