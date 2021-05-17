import Scrollbar from './scroll-bar.vue'
import { App } from "vue";

Scrollbar.install = function (app: App) {
  app.component(Scrollbar.name, Scrollbar)
}

export default Scrollbar
