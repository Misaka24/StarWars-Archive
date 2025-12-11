import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import './style.css'

export default {
  ...DefaultTheme,

  enhanceApp(ctx: EnhanceAppContext) {
    console.log('CUSTOM THEME LOADED!')

    // 保留默认主题的 enhanceApp（如果有）
    if (typeof DefaultTheme.enhanceApp === 'function') {
      DefaultTheme.enhanceApp(ctx)
    }
  }
}
