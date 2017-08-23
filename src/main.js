import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index'
import ElementUI from 'element-ui'
import store from './store/index'
import 'element-ui/lib/theme-default/index.css'
import './../static/css/globleCss.css'
Vue.use(VueRouter)
Vue.use(ElementUI)
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
