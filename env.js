
let baseURL
// process.env就是Nodejs提供的一个API，它返回一个包含用户环境信息的对象
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'

    break
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    break
  case 'production':
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
  default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
}
export default {
  baseURL
}
