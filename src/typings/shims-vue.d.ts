declare module '*.vue' {
  import { App, DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Window {
  R_ICON_FONT_COMPONENT: any;
}
