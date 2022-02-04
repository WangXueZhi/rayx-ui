import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './app.scss'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import RayxUi from '../packages'
import '../packages/index.scss'

// 配置NProgress进度条选项  —— 动画效果
NProgress.configure({ ease: 'ease', speed: 500 })

// 全局路由拦截-进入页面前执行
router.beforeEach((to, from, next) => {
  // NProgress开始进度条
  NProgress.start()
  next()
})

// 全局后置钩子-常用于结束动画等
router.afterEach(() => {
  // NProgress结束进度条
  NProgress.done()
  // console.log(transition)
})

const app = createApp(App)
app.use(RayxUi)
app.use(router)
app.use(store)
app.mount('#app')
