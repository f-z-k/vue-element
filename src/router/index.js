
// import App from './../App'
const layout = r => require.ensure([], () => r(require('@/components/layout.vue')), 'layout')
const table = r => require.ensure([], () => r(require('@/components/table/tableView.vue')), 'table')
const form = r => require.ensure([], () => r(require('@/components/form/formView.vue')), 'table')
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
  }
]
