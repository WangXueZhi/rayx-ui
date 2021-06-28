declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >
  export default component
}

// declare module '*.vue' {
//   import { App, defineComponent } from 'vue'
//   const component: ReturnType<typeof defineComponent> & {
//     install(app: App): void;
//     name: string
//   }
//   export default component
// }

interface Window {
  R_ICON_FONT_COMPONENT: unknown
}
