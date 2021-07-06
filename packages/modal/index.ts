import Modal from './modal.vue'
import { App } from 'vue'

// 为组件提供 install 安装方法，供按需引入
Modal.install = function (app: App) {
  app.component(Modal.name, Modal)
}

// 默认导出组件
export default Modal
