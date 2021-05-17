import Button from './button.vue'
import { App } from 'vue'

Button.install = function (app: App) {
  app.component(Button.name, Button)
}

// 默认导出组件
export default Button
