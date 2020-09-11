import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import componentsRouters from './componentsRouters'

Vue.use(Router)

// 同路由报错处理
const originalPush = Router.prototype.push
const catchRouter = function (location) {
  if (window.location.hash.slice(1) === location) {
    return originalPush.call(this, location).catch(err => err)
  }
  return originalPush.call(this, location)
}
Router.prototype.push = function (location) {
  return catchRouter.call(this, location)
}

const routes = [{
    path: '/',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/docs',
    component: Layout,
    children: [
      { path: '/', redirect: '/docs/start' },
      {
        path: 'start',
        component: () => import('@/views/docs/start/index.vue')
      },
      ...componentsRouters
    ]
  },
  {
    path: '/development',
    component: Layout,
    children: [
      { path: '/', redirect: '/development' },
      {
        path: 'base',
        component: () => import('@/views/development/base/index.vue')
      },
      {
        path: 'component',
        component: () => import('@/views/development/component/index.vue')
      },
      {
        path: 'md',
        component: () => import('@/views/development/md/index.vue')
      }
    ]
  }
]

const router = new Router({
  routes
})

export default router