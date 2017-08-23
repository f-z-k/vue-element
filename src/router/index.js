
// import App from './../App'
const layout = r => require.ensure([], () => r(require('@/components/layout.vue')), 'layout')
const module = r => require.ensure([], () => r(require('@/components/module.vue')), 'module')
const table = r => require.ensure([], () => r(require('@/components/table/tableView.vue')), 'table')
const form = r => require.ensure([], () => r(require('@/components/form/formView.vue')), 'form')
const video = r => require.ensure([], () => r(require('@/components/video/videoView.vue')), 'video')
const swiper = r => require.ensure([], () => r(require('@/components/swiper/swiperView.vue')), 'video')
const vuex = r => require.ensure([], () => r(require('@/components/vuex/vuexView')), 'vuex')
const http = r => require.ensure([], () => r(require('@/components/http/httpView')), 'http')
const i18n = r => require.ensure([], () => r(require('@/components/i18n/i18nView')), 'http')
export default [
  {
    path: '/layout',
    component: layout,
    children: [
      {
        path: 'module',
        component: module
      },
      {
        path: 'table',
        component: table
      },
      {
        path: 'form',
        component: form
      },
      {
        path: 'video',
        component: video
      },
      {
        path: 'swiper',
        component: swiper
      },
      {
        path: 'vuex',
        component: vuex
      },
      {
        path: 'http',
        component: http
      },
      {
        path: 'i18n',
        component: i18n
      }
    ]
  },
  {
    path: '/',
    redirect: '/layout/module'
  },
  {
    path: '/form',
    component: form
  },
  {
    path: '/video',
    component: video
  }
]
