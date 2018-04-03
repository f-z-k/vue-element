var Toast = {}
Toast.install = (Vue, options) => {
  Vue.prototype.$msg = (tips) => {
    let ToastTpl = Vue.extend({
      template: '<div>' + tips + '</div>'
    })
    let tpl = new ToastTpl().$mount().$el
    document.body.appendChild(tpl)
  }
}
module.exports = Toast
