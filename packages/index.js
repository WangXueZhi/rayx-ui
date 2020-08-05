import Button from './button'
import ScrollBar from './scroll-bar'
import Table from './table'
import Test from './test'
import Toast from './toast'
const components = [Button, ScrollBar, Table, Test, Toast]

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
  Button, ScrollBar, Table, Test, Toast
}
export {
  Button, ScrollBar, Table, Test, Toast
}
