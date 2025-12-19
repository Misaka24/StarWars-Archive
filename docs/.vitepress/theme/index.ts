import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import { h } from 'vue'
// @ts-ignore
import Giscus from './components/Giscus.vue'
import './styles/style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Giscus)
    })
  },

  enhanceApp(ctx: EnhanceAppContext) {
    console.log('CUSTOM THEME LOADED!')

    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('dark')
      const body = document.body
      const updateHomeClass = () => {
        const path = window.location.pathname
        const isHome =
          path === '/' ||
          path.endsWith('/index.html') || 
          path.endsWith('/')
        body.classList.toggle('is-home', isHome)
      }

      updateHomeClass()
      if (ctx.router) {
        const oldAfterRouteChanged = ctx.router.onAfterRouteChanged
        ctx.router.onAfterRouteChanged = (to) => {
          oldAfterRouteChanged?.(to)
          updateHomeClass()
        }
      }

      body.classList.add('sidebar-auto-hide')
      // 创建触发条（用于侧边栏呼出）
      const trigger = document.createElement('div')
      trigger.className = 'sidebar-trigger-zone'
      document.body.appendChild(trigger)
      // 悬停展开侧边栏
      trigger.addEventListener('mouseenter', () => {
        body.classList.add('sidebar-open')
        body.classList.remove('sidebar-auto-hide')
      })
      // 鼠标离开侧边栏区域 → 自动收起
      document.addEventListener('mousemove', (e) => {
        const sidebar = document.querySelector('.VPSidebar') as HTMLElement | null
        if (!sidebar) return
        const rect = sidebar.getBoundingClientRect()
        const inside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        if (!inside) {
          body.classList.remove('sidebar-open')
          body.classList.add('sidebar-auto-hide')
        }
      })
    }

    if (typeof DefaultTheme.enhanceApp === 'function') {
      DefaultTheme.enhanceApp(ctx)
    }
  }
}