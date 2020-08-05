__PACKAGE_IMPORT_LIST__
const components = [__PACKAGE_COMPONENTS_LIST__]

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
  __PACKAGE_COMPONENTS_LIST__
}
export {
  __PACKAGE_COMPONENTS_LIST__
}
