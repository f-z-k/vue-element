
import App from './../App'
const layout = r => require.ensure([], () => r(require('@/components/layout.vue')), 'layout')
export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        component: layout
      }
    ]
  }
]
