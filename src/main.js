import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import router from './router'
// import env from '../env'
// mock开关
const mock = false
if (mock) {
  require('@/mock/api')
}
// 根据前端的跨域方式做调整 代理方式后端域名与前端是一致的
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL

// 接口的错误拦截
axios.interceptors.response.use(function(response) {
  const res = response.data
  // 成功
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
