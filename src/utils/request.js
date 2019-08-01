// 配置axios相关代码的模块
import axios from 'axios'

// 1. baseURL: url
// 2. 请求拦截器
// 3. 响应拦截器 import axios from 'axios'

// axios.create()会返回一个和axios对象一样的对象
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // console.log(response)

    // 如果响应结果对象中有data, 则直接返回这个data数据
    // 如果响应结果对象中没有data, 则不作任何处理,直接原样返回这个数据
    return response.data.data || response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request
