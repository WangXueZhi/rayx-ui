import PopupBase from './popup-base.vue'
import { App, createVNode, isVNode, render } from 'vue'
import type { PopupBaseHandle, popupOptions } from './types'
import type { ComponentPublicInstance } from 'vue'

const PopupBaseHandleList: PopupBaseHandle[] = []

// 显示
PopupBase.show = function (options: popupOptions): PopupBaseHandle {
  const container = document.createElement('div')
  const { content, ...props } = options
  const vm = createVNode(
    PopupBase,
    { ...props, show: true },
    isVNode(content) ? { default: () => content } : null
  )

  render(vm, container)

  document.body.appendChild(container.firstElementChild)

  const PopupBaseHandle: PopupBaseHandle = {
    close: () =>
      ((vm.component.proxy as ComponentPublicInstance<{ show: boolean }>).show =
        false)
  }

  PopupBaseHandleList.push(PopupBaseHandle)

  return PopupBaseHandle
}

// 隐藏
PopupBase.clean = function (): void {
  PopupBaseHandleList.forEach((PopupBaseHandle: PopupBaseHandle) => {
    PopupBaseHandle.close()
  })
}

// 为组件提供 install 安装方法，供按需引入
PopupBase.install = function (app: App) {
  app.component(PopupBase.name, PopupBase)
  app.config.globalProperties.$popupBase = PopupBase.show
  app.config.globalProperties.$popupBaseClean = PopupBase.clean
}

// 默认导出组件
export default PopupBase
