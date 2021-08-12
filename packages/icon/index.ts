import Icon from './icon.vue'
import { App } from 'vue'
// import './iconfont'

// 加载在线资源
const R_ICON = {
  online: true,
  onlineSrc: 'https://at.alicdn.com/t/font_2244128_kqpgvzq0r.js',
  onlineHref: 'https://at.alicdn.com/t/font_2244128_kqpgvzq0r.css',
  scriptId: 'r-iconfont-script',
  styleId: 'r-iconfont-style',
  loadScript: function () {
    if (!R_ICON.online) {
      return
    }
    const iconfontNode = document.getElementById(R_ICON.scriptId)
    if (!iconfontNode) {
      var element = document.createElement('script')
      element.src = R_ICON.onlineSrc
      element.id = R_ICON.scriptId
      document.body.appendChild(element)
    }
  },
  loadStyle: function () {
    if (!R_ICON.online) {
      return
    }
    const iconfontNode = document.getElementById(R_ICON.styleId)
    if (!iconfontNode) {
      var element = document.createElement('link')
      element.href = R_ICON.onlineHref
      element.rel = 'stylesheet'
      element.id = R_ICON.styleId
      document.body.appendChild(element)
    }
  }
}

Icon.install = function (app: App) {
  app.component(Icon.name, Icon)
}

window.R_ICON = R_ICON

// 默认导出组件
export default Icon
