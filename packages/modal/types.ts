import { VNode } from 'vue'

export interface ModalHandle {
  close: () => void
}

export type modalOptions = {
  show?: boolean
  showMask?: boolean
  animateIn?: string
  animateOut?: string
  closeOnClickMask?: boolean
  bodyOverflow?: boolean
  contentCustomClass?: string
  content?: VNode | string
}
