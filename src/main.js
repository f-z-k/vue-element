import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index'
import ElementUI from 'element-ui'
import store from './store/index'
import bus from './bus'
import prompt from './components/prompt/prompt.vue'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import Toast from './toast.js'
// import './../static/css/globleCss.css'
import VueI18n from 'vue-i18n'
import langs from './vueI18/locale'
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(VueResource)
Vue.use(Toast)
Vue.component('promptBox', prompt)
// 多语言处理
console.log(Toast)
const navLang = navigator.language // 检测系统语言
// const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
var localLang = ''
if (navLang === 'zh-CN') {
  localLang = 'zh-cn'
} else {
  localLang = 'en'
}
const _lang = window.localStorage.getItem('language') || localLang || 'zh-cn'
Vue.config.lang = _lang
// 饿了吗语言包和项目自身语言包合并
const mergeZH = Object.assign(zhLocale, langs['chinese']['zh-CN'])
const mergeEN = Object.assign(enLocale, langs['english']['en-US'])
Vue.locale('zh-cn', mergeZH)
Vue.locale('en', mergeEN)
// 监控语言切换
bus.$on('chang-langs', function (type) {
  Vue.config.lang = type
  window.localStorage.setItem('language', type)
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
