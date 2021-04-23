import axios from 'axios'
import * as qs from 'qs'
import { ElMessage } from 'element-plus'

export const baseURL =
  process.env.NODE_ENV === 'production' ? 'https://xxx.xxx.com' : 'http://xxx.dev.xxx.com'

// 创建一个独立的axios实例
const service = axios.create({
  // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
  baseURL: baseURL,
  // 定义统一的请求头部
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  // 配置请求超时时间
  timeout: 10000,
  // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
  withCredentials: false
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    if (
      (config.method === 'post' || config.method === 'put') &&
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8'
    ) {
      config.data = qs.stringify(config.data)
    }
    if (sessionStorage.getItem('token')) {
      config.headers['Authorization'] = sessionStorage.getItem('token')
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 返回拦截
service.interceptors.response.use(
  (response) => {
    // 获取接口返回结果
    const res = response.data
    // code为0，直接把结果返回回去，这样前端代码就不用在获取一次data.
    if (res.status === 200) {
      return res
    } else if (res.code === 401) {
      // 10000假设是未登录状态码
      ElMessage.warning(res.message)
      // 也可使用router进行跳转
      window.location.href = '/login'
      return res
    } else {
      // 错误显示可在service中控制，因为某些场景我们不想要展示错误
      ElMessage.error(res.message)
      return res
    }
  },
  () => {
    ElMessage.error('网络请求异常，请稍后重试!')
  }
)

export default service
