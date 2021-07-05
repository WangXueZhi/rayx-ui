import type { ObjectDirective } from 'vue'

type NodeListMap = Map<HTMLElement, ((...args: unknown[]) => unknown)[]>

const nodeList: NodeListMap = new Map()

document.addEventListener(
  'mousedown',
  (e: MouseEvent) => {
    const target = e.target as HTMLElement
    for (const el of nodeList.keys()) {
      if (!el.contains(target)) {
        const elHandlers = nodeList.get(el)
        elHandlers.forEach((handler) => {
          handler(e)
        })
      }
    }
  },
  false
)

const ClickOutside: ObjectDirective = {
  mounted (el, binding) {
    console.log('ClickOutside > mounted')
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
