import { VNode } from 'vue'

export interface PopupBaseHandle {
  close: () => void
}

export type popupOptions = {
  show?: boolean
  animateIn?: string
  animateOut?: string
  closeOnClickOutside?: boolean
  content?: VNode | string
}
