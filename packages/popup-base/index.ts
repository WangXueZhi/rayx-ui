import PopupBase from './popup-base.vue'
import { App, VNode, createVNode, isVNode, render  } from "vue";
import type { AnimateType, showReturn, popupOptions } from './types'
import type { ComponentPublicInstance } from 'vue'

// 为组件提供 install 安装方法，供按需引入
PopupBase.install = function (app: App) {
  app.component(PopupBase.name, PopupBase)
}

// 窗口

// 显示
PopupBase.show = function (options: popupOptions): showReturn {
  const container = document.createElement('div')

  const vm = createVNode(
    PopupBase,
    options,
    isVNode(options.content) ? { default: () => options.content } : null,
  )

  render(vm, container)

  document.body.appendChild(container.firstElementChild)

  return {
    close: () => (vm.component.proxy as ComponentPublicInstance<{ visible: boolean; }>).visible = false
  }
}

// 隐藏
PopupBase.hide = function () {

}

// 默认导出组件
export default PopupBase
