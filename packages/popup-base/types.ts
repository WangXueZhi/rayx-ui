import { VNode } from 'vue'

export interface PopupBaseHandle {
  close: () => void
}

export type popupOptions = {
  content?: string | VNode
  animateType: string
  ele?: Element
}

export type PostionStyle = {
  left: string
  top: string
  transform: string
}
