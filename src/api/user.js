// 处理用户相关的请求, 比如登录等
import request from '@/utils/request.js'
// 定义并且直接导出该方法
// 函数参数位置可以直接结构
export const login = ({ mobile, code }) => {
  return request({
    method: 'post',
    url: `/app/v1_0/authorizations`,
    data: {
      mobile,
      code
    }
  })
}

// 相当于导出一个对象, 里面有方法login
// {
//   login:login
// }
