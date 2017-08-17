
// import App from './../App'
const layout = r => require.ensure([], () => r(require('@/components/layout.vue')), 'layout')
const table = r => require.ensure([], () => r(require('@/components/table/tableView.vue')), 'table')
const form = r => require.ensure([], () => r(require('@/components/form/formView.vue')), 'form')
const video = r => require.ensure([], () => r(require('@/components/video/videoView.vue')), 'video')
const swiper = r => require.ensure([], () => r(require('@/components/swiper/swiperView.vue')), 'video')
export default [
  {
    path: '/layout',
    component: layout,
    children: [
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
      }
    ]
  },
  {
    path: '/',
    redirect: '/layout/table'
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
