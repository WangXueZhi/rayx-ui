import VirtualList from './virtual-list.vue'

// 为组件提供 install 安装方法，供按需引入
VirtualList.install = function (app) {
  app.component(VirtualList.name, VirtualList)
}

// 默认导出组件
export default VirtualList
