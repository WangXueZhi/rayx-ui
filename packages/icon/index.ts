import Icon from './icon.vue'
import { App } from "vue";
// import './iconfont'

// 加载在线资源
Icon.online = true
Icon.onlineSrc = 'https://at.alicdn.com/t/font_2244128_n5pc8adhsq.js'
Icon.onlineHref = 'https://at.alicdn.com/t/font_2244128_n5pc8adhsq.css'
Icon.scriptId = 'r-iconfont-script'
Icon.styleId = 'r-iconfont-style'
Icon.loadScript = function () {
  if (!Icon.online) {
    return
  }
  const iconfontNode = document.getElementById(Icon.scriptId)
  if (!iconfontNode) {
    var element = document.createElement('script')
    element.src = Icon.onlineSrc
    element.id = Icon.scriptId
    document.body.appendChild(element)
  }
}

Icon.loadStyle = function () {
  if (!Icon.online) {
    return
  }
  const iconfontNode = document.getElementById(Icon.styleId)
  if (!iconfontNode) {
    var element = document.createElement('link')
    element.href = Icon.onlineHref
    element.rel = 'stylesheet'
    element.id = Icon.styleId
    document.body.appendChild(element)
  }
}

Icon.install = function (app: App) {
  app.component(Icon.name, Icon)
}

window.R_ICON_FONT_COMPONENT = Icon

// 默认导出组件
export default Icon
