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
      {
        path: 'design',
        component: () => import('@/views/docs/design/index.vue')
      },
      ...componentsRouters
    ]
  },
  {
    path: '/development',
    component: Layout,
    children: [
      { path: '/', redirect: '/development/base' },
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
  },
  {
    path: '/architecture',
    component: Layout,
    children: [
      { path: '/', redirect: '/architecture/base' },
      {
        path: 'base',
        component: () => import('@/views/architecture/base/index.vue')
      },
      {
        path: 'vue',
        component: () => import('@/views/architecture/vue/index.vue')
      },
      {
        path: 'md',
        component: () => import('@/views/architecture/md/index.vue')
      }
    ]
  }
]

const router = new Router({
  routes
})

export default router