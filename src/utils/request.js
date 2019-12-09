import Axios from 'axios'
import { baseUrl } from '@/utils/config'

// 创建 axios 实例
const axios = Axios.create({
  baseUrl,
  // withCredentials: true,
  timeout: 5000 // request timeout
})

// 添加request拦截器
axios.interceptors.request.use(
  config => {
    // var token = localStorage.getItem('userToken')
    // if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = token
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 添加respone拦截器
axios.interceptors.response.use(
  res => {
    return res
  },
  error => {
    return Promise.reject(error.response)
  }
)

export default axios
