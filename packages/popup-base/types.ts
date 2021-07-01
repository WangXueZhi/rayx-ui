import { VNode } from 'vue'

export interface PopupBaseHandle {
  close: () => void
}

export type popupOptions = {
  content?: string | VNode
  animateType: string
  ele?: Element
}
