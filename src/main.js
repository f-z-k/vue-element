import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index'
import ElementUI from 'element-ui'
import './static/css/reset.css'
import 'element-ui/lib/theme-default/index.css'
Vue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter({
  mode: 'history',
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

