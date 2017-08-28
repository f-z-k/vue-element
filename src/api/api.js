import VueResource from 'vue-resource'
import Vue from 'vue'
import config from './config'
Vue.use(VueResource)
// 数据请求处理 数据层与逻辑层分离开
// 获取微信api accesstoken 例子
// export const accessToken = params => { return Vue.http.jsonp(config.getToken, {params: params}).then(res => res.data) }
const http = Vue.http.jsonp(config.getName).then(res => res.data)
export const getUserInfo = () => { return http }
export const getInfo = () => { return Vue.http.jsonp(config.getInfo).then(res => res.data) }
export const getOneInfo = params => { return Vue.http.jsonp(config.getOneInfo, {params: params}).then(res => res.data) }

