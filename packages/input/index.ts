import Input from './input.vue'
import { App } from "vue";

// 为组件提供 install 安装方法，供按需引入
Input.install = function (app: App) {
  app.component(Input.name, Input)
}

// 默认导出组件
export default Input
