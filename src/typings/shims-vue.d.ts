declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >
  export default component
}

declare type Nullable<T> = T | null

interface Window {
  R_ICON_FONT_COMPONENT: unknown
}
