import type { ObjectDirective } from 'vue'

type NodeListMap = Map<HTMLElement, ((...args: unknown[]) => unknown)[]>

const nodeList: NodeListMap = new Map()

document.addEventListener(
  'click',
  (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const handlers = nodeList.get(target)
    if (handlers && handlers.length > 0) {
      handlers.forEach((handler) => {
        handler(e)
      })
    }
  },
  false
)

const ClickOutside: ObjectDirective = {
  beforeMount (el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, [])
    }

    nodeList.get(el).push(binding.value)
  },
  updated (el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, [])
    }

    const handlers = nodeList.get(el)
    const oldHandlerIndex = handlers.findIndex((fn) => fn === binding.oldValue)
    const newHandler = binding.value

    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler)
    } else {
      handlers.push(newHandler)
    }
  },
  unmounted (el) {
    nodeList.delete(el)
  }
}

export default ClickOutside
