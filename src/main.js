import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './app.scss'

// 注册组件库
// Vue.use(VDUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
