import Button from './button'
import Toast from './toast'
import Table from './table'
const components = [Button, Toast, Table]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.use(component)
  })
}
//  全局引用可自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  Button
}
export {
  Button
}
