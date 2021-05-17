import Row from './row.vue'
import { App } from "vue";

Row.install = function (app: App) {
  app.component(Row.name, Row)
}

export default Row
