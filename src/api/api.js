import VueResource from 'vue-resource'
import Vue from 'vue'
import config from './config'
Vue.use(VueResource)
const _http = (_url, _params) => {
  console.log('++1++')
  // _params.HTTP_API_VERSION = config.API_VERSION 常用参数
  if (!_params) { // 无参数请求情况
    _params = {}
  }
  return new Promise((resolve, reject) => {
    Vue.http.jsonp(_url, {params: _params}).then(res => {
      console.log('++2++')
      console.log(res)
      if (!res['data']) {
        console.log('++3++')
        resolve(res['data'])
      } else {
        // reject()
        // 请求错误处理
      }
    }, error => {
      // 请求异常处理
      console.log(error)
    })
  })
}
// 数据请求处理 数据层与逻辑层分离开
// 获取微信api accesstoken 例子
// export const accessToken = params => { return Vue.http.jsonp(config.getToken, {params: params}).then(res => res.data) }
// const http = Vue.http.jsonp(config.getName).then(res => res.data)
export const getUserInfo = () => {
  return _http(config.getName).then(res => {
    return res
  })
}
export const getToken = params => { return _http(config.getToken, params) }
export const getInfo = () => { return _http(config.getInfo) }
export const getOneInfo = params => { return Vue.http.jsonp(config.getOneInfo, {params: params}).then(res => res.data) }

