import PopupBase from './popup-base.vue'
import { App, createVNode, isVNode, render } from 'vue'
import type { PopupBaseHandle, popupOptions } from './types'
import type { ComponentPublicInstance } from 'vue'

// 为组件提供 install 安装方法，供按需引入
PopupBase.install = function (app: App) {
  app.component(PopupBase.name, PopupBase)
}

const PopupBaseHandleList: PopupBaseHandle[] = []

// 显示
PopupBase.show = function (options: popupOptions): PopupBaseHandle {
  const container = document.createElement('div')

  const vm = createVNode(
    PopupBase,
    options,
    isVNode(options.content) ? { default: () => options.content } : null
  )

  render(vm, container)

  document.body.appendChild(container.firstElementChild)

  const PopupBaseHandle: PopupBaseHandle = {
    close: () =>
      ((
        vm.component.proxy as ComponentPublicInstance<{ visible: boolean }>
      ).visible = false)
  }

  PopupBaseHandleList.push(PopupBaseHandle)

  return PopupBaseHandle
}

// 隐藏
PopupBase.hide = function (): void {
  PopupBaseHandleList.forEach((PopupBaseHandle: PopupBaseHandle) => {
    PopupBaseHandle.close()
  })
}

// 默认导出组件
export default PopupBase
