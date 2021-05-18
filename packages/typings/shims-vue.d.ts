declare module '*.vue' {
  import { App, DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
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
  R_ICON_FONT_COMPONENT: any;
}
