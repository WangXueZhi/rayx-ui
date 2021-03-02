import Draggable from './draggable.vue'

// 为组件提供 install 安装方法，供按需引入
Draggable.install = function (Vue) {
  Vue.component(Draggable.name, Draggable)
}

// 默认导出组件
export default Draggable
