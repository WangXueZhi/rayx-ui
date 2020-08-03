import Toast from './toast.vue'

// 为组件提供 install 安装方法，供按需引入
Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast)
}

// 默认导出组件
export default Toast
