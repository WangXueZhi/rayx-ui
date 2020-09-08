import GrModal from "./gr-modal";

// 为组件提供 install 安装方法，供按需引入
GrModal.install = function (Vue) {
  Vue.component(GrModal.name, GrModal)
}

// 默认导出组件
export default GrModal
