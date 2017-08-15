
// import App from './../App'
const layout = r => require.ensure([], () => r(require('@/components/layout.vue')), 'layout')
const table = r => require.ensure([], () => r(require('@/components/table/tableView.vue')), 'table')
export default [
  {
    path: '/layout',
    component: layout,
    children: [
      {
        path: 'table',
        component: table
      }
    ]
  },
  {
    path: '/',
    redirect: '/layout/table'
  }
]
