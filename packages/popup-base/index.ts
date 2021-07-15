import PopupBase from './popup-base.vue'
import { App, createVNode, isVNode, render } from 'vue'
import type { PopupBaseHandle, popupOptions } from './types'
import type { ComponentPublicInstance, VNode } from 'vue'

const instancesMap: Map<VNode, number> = new Map()

// 显示
PopupBase.show = function (options: popupOptions): PopupBaseHandle {
  const container = document.createElement('div')
  const { content, ...props } = options
  let vm: VNode
  const PopupBaseRender = function (show: boolean) {
    vm = createVNode(
      PopupBase,
      {
        ...props,
        show: show,
        'onUpdate:show': ($event: boolean) => {
          PopupBaseRender($event)
        }
      },
      isVNode(content) ? { default: () => content } : content
    )

    vm.props.onDestroy = () => {
      render(null, container)
      container.parentNode.removeChild(container)
      if (instancesMap.get(vm)) {
        instancesMap.delete(vm)
      }
    }

    render(vm, container)
  }

  // 要先第一次渲染不显示，把容器挂载上去，否则直接显示会没有动画
  PopupBaseRender(false)

  document.body.appendChild(container)

  PopupBaseRender(true)

  instancesMap.set(vm, 1)

  return {
    close: () => {
      PopupBaseRender(false)
    }
  }
}

// 隐藏
PopupBase.clean = function (): void {
  for (const vm of instancesMap.keys()) {
    (vm.component.proxy as ComponentPublicInstance<{ show: boolean }>).$emit(
      'update:show',
      false
    )
  }
}

// 为组件提供 install 安装方法，供按需引入
PopupBase.install = function (app: App) {
  app.component(PopupBase.name, PopupBase)
  app.config.globalProperties.$rPopupBase = PopupBase.show
  app.config.globalProperties.$rPopupBaseClean = PopupBase.clean
}

// 默认导出组件
export default PopupBase
