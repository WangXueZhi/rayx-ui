import axios from 'axios'
import appConfig from './config'
import qs from 'qs'
import { Message } from 'element-ui'

// 请求超时
const TIMEOUT = 10000
// 请求队列
const fetchQueue = {}
// 是否开启请求锁。
const fetchLock = false

// 创建axios实例
const _fetch = axios.create({
  baseURL: appConfig.fetch.baseUrl,

  // 超时
  timeout: TIMEOUT,

  // 是否跨域携带cookie
  withCredentials: true,

  headers: {}
})

// 请求拦截器
_fetch.interceptors.request.use(
  function (config) {
    // 请求锁
    const lock =
      config.fetchLock !== undefined && config.fetchLock !== null
        ? config.fetchLock
        : fetchLock
    if (lock) {
      // 如果有同个请求在队列中，则取消即将发送的请求
      if (fetchQueue[config.url]) {
        let cancel
        config.cancelToken = new axios.CancelToken(c => {
          cancel = c
        })
        cancel('cancel')
      } else {
        // 添加入请求队列
        fetchQueue[config.baseURL + config.url] = 1
      }
    }

    /**
     * 在发送请求之前做些什么
     */

    // 设置header-Authorization
    const localStorage = window.localStorage
    const loginRes = JSON.parse(localStorage.getItem('loginRes'))
    const token =
      config.headers.access_token || loginRes ? loginRes.access_token : null
    if (!token || config.url.includes('/api-uaa/oauth/user/token')) {
      config.headers.Authorization =
        'Basic ' +
        window.btoa(appConfig.clientId + ':' + appConfig.clientSecret)
    } else {
      config.headers.Authorization = 'Bearer ' + token
      config.headers.clientId = appConfig.clientId
      config.headers.channel = appConfig.channel
    }

    // get传参
    if (config.method === 'get' && config.data) {
      config.url += `?${qs.stringify(config.data)}`
    }

    // application/x-www-form-urlencoded
    if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data)
    }

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加请求返回拦截器
_fetch.interceptors.response.use(
  function (res) {
    // 是否有请求锁
    const lock =
      res.config.fetchLock !== undefined && res.config.fetchLock !== null
        ? res.config.fetchLock
        : fetchLock
    if (lock) {
      // 移除出请求队列
      delete fetchQueue[res.config.url]
    }

    const data = res.data
    const code = +data.code

    if (code === 200) {
      // 约定code=200即为成功
      return data
    } else {
      /**
       * 异常处理
       * 可以做统一的错误提示
       */
      Message(data.message)
      console.log(data.message)
      return Promise.reject(data)
    }
  },
  function (error) {
    // const data = error.response.data

    // Message(data.message)
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

export default _fetch
