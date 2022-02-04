import { VNode } from 'vue'
import { props as btnProps } from '../button/types'

// export interface ModalHandle {
//   close: () => void
// }

// export type modalOptions = {
//   show?: boolean
//   showMask?: boolean
//   animateIn?: string
//   animateOut?: string
//   closeOnClickMask?: boolean
//   bodyOverflow?: boolean
//   contentCustomClass?: string
//   content?: VNode | string
// }

export type footerButtonOption = {
  text: string
  onClick: () => void
} & btnProps
