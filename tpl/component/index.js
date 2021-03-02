import _COMPONENT_ from './_component_.vue'

// 为组件提供 install 安装方法，供按需引入
_COMPONENT_.install = function (Vue) {
  Vue.component(_COMPONENT_.name, _COMPONENT_)
}

// 默认导出组件
export default _COMPONENT_
