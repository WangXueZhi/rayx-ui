import { App, VNode, createVNode, isVNode } from "vue";

export enum AnimateType {
  Fade = 'fade'
}

export type showReturn = {
  close: () => {}
}

export type popupOptions = {
  content?: string | VNode
  animateType: string,
  ele?: Element
}