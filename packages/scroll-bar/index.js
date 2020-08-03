import Scrollbar from './scroll-bar.vue'

// 为组件提供 install 安装方法，供按需引入
Scrollbar.install = function (Vue) {
  Vue.component(Scrollbar.name, Scrollbar)
}

// 默认导出组件
export default Scrollbar
