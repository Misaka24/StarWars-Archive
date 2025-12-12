import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import './style.css'
import './sidebar-float.css'
import './scanline.css'


export default {
  ...DefaultTheme,

  enhanceApp(ctx: EnhanceAppContext) {
    document.documentElement.classList.add('dark')

    if (typeof DefaultTheme.enhanceApp === 'function') {
      DefaultTheme.enhanceApp(ctx)
    }

    if (typeof window !== 'undefined') {
      const body = document.body

      // 初始设置：自动隐藏
      body.classList.add('sidebar-auto-hide')

      // 触发条
      const trigger = document.createElement('div')
      trigger.className = 'sidebar-trigger-zone'
      document.body.appendChild(trigger)

      // 悬停展开
      trigger.addEventListener('mouseenter', () => {
        body.classList.add('sidebar-open')
        body.classList.remove('sidebar-auto-hide')
      })

      // 鼠标离开左侧栏 → 收起
      document.addEventListener('mousemove', (e) => {
        const sidebar = document.querySelector('.VPSidebar') as HTMLElement
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
  }
}
