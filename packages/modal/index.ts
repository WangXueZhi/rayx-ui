import Modal from './modal.vue'
import { App, createVNode, isVNode, render } from 'vue'
import type { ModalHandle, modalOptions } from './types'
import type { ComponentPublicInstance, VNode } from 'vue'

const instancesMap: Map<VNode, number> = new Map()

// 显示
Modal.show = function (options: modalOptions): ModalHandle {
  const container = document.createElement('div')
  const { content, ...props } = options
  let vm: VNode
  const ModalRender = function (show: boolean) {
    const opt = {
      ...props,
      show: show,
      'onUpdate:show': ($event: boolean) => {
        ModalRender($event)
      },
      content: ''
    }

    if (!isVNode(content)) {
      opt.content = content
    }

    vm = createVNode(
      Modal,
      {
        ...opt
      },
      isVNode(content) ? { default: () => content } : null
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
  ModalRender(false)

  document.body.appendChild(container)

  ModalRender(true)

  instancesMap.set(vm, 1)

  return {
    close: () => {
      ModalRender(false)
    }
  }
}

// 隐藏
Modal.clean = function (): void {
  for (const vm of instancesMap.keys()) {
    (vm.component.proxy as ComponentPublicInstance<{ show: boolean }>).$emit(
      'update:show',
      false
    )
  }
}

// 为组件提供 install 安装方法，供按需引入
Modal.install = function (app: App) {
  app.component(Modal.name, Modal)
  app.config.globalProperties.$rModal = Modal.show
  app.config.globalProperties.$rModalClean = Modal.clean
}

// 默认导出组件
export default Modal
