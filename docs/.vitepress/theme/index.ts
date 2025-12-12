import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import './style.css'
import './sidebar-float.css'
import './scanline.css'

export default {
  ...DefaultTheme,

  enhanceApp(ctx: EnhanceAppContext) {
    console.log('CUSTOM THEME LOADED!')

    //一切 DOM / window / document 操作，必须放在这里
    if (typeof window !== 'undefined') {
      // 强制暗色模式
      document.documentElement.classList.add('dark')

      const body = document.body

      // 初始设置：侧边栏自动隐藏
      body.classList.add('sidebar-auto-hide')

      // 创建触发条
      const trigger = document.createElement('div')
      trigger.className = 'sidebar-trigger-zone'
      document.body.appendChild(trigger)

      // 悬停展开侧边栏
      trigger.addEventListener('mouseenter', () => {
        body.classList.add('sidebar-open')
        body.classList.remove('sidebar-auto-hide')
      })

      // 鼠标离开侧边栏 → 自动收起
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

    //最后再调用默认主题的 enhanceApp
    if (typeof DefaultTheme.enhanceApp === 'function') {
      DefaultTheme.enhanceApp(ctx)
    }
  }
}
