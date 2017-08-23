import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index'
import ElementUI from 'element-ui'
import store from './store/index'
import bus from './bus'
import 'element-ui/lib/theme-default/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// import './../static/css/globleCss.css'
import VueI18n from 'vue-i18n'
import langs from './vueI18/locale'
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueI18n)
// 多语言处理
console.log(enLocale)
console.log(zhLocale)
console.log(langs)
Vue.config.lang = 'zh-cn'
// 饿了吗语言包和项目自身语言包合并
const mergeZH = Object.assign(zhLocale, langs['chinese']['zh-CN'])
const mergeEN = Object.assign(enLocale, langs['english']['en-US'])
Vue.locale('zh-cn', mergeZH)
Vue.locale('en', mergeEN)
// 监控语言切换
bus.$on('chang-langs', function (type) {
  Vue.config.lang = type
})
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// new Vue({
//   router
// }).$mount('#app')
