declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}

type WindowRIcon = {
  online: boolean
  onlineSrc: string
  onlineHref: string
  scriptId: string
  styleId: string
  loadScript: () => void
  loadStyle: () => void
}

interface Window {
  R_ICON: WindowRIcon
  Vue: never
}

declare module 'rayx-ui'
