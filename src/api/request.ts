/**
 * request.ts
 * 通过promise对axios做二次封装，针对用户端参数，做灵活配置
 */
import { ElMessage, ElLoading } from 'element-plus'
import instance from './interceptor'

/**
 * 核心函数，可通过它处理一切请求数据，并做横向扩展
 * @param url
 * @param params
 * @param options
 * @param method
 */

function request(url, params, options = { loading: true, mock: false, error: true }, method) {
  let loadingInstance
  // 请求前loading
  if (options.loading) loadingInstance = ElLoading.service()
  return new Promise((resolve, reject) => {
    let data = {}
    // get请求使用params字段
    if (method == 'get') data = { params }
    // post请求使用data字段
    if (method == 'post') data = { data: params }
    // 通过mock平台可对局部接口进行mock设置
    if (options.mock) url = 'http://www.mock.com/mock/xxxx/api'
    instance({
      url,
      method,
      ...data
    })
      .then((res) => {
        // 此处作用很大，可以扩展很多功能。
        // 比如对接多个后台，数据结构不一致，可做接口适配器
        // 也可对返回日期/金额/数字等统一做集中处理
        if (res.status === 0) {
          resolve(res.data)
        } else {
          // 通过配置可关闭错误提示
          if (options.error) ElMessage.error(res.statusText)
          reject(res)
        }
      })
      .catch((error) => {
        ElMessage.error(error.message)
      })
      .finally(() => {
        loadingInstance.close()
      })
  })
}

// 封装GET请求
function get(url, params, options) {
  return request(url, params, options, 'get')
}
// 封装POST请求
function post(url, params, options) {
  return request(url, params, options, 'post')
}
export default {
  get,
  post
}
