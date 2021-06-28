import { VNode } from 'vue'

export type showInstance = {
  close: () => unknown
}

export type popupOptions = {
  content?: string | VNode
  animateType: string
  ele?: Element
}
