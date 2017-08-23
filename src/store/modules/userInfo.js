// import Vue from 'vue'
// import config from './../../config'
const state = {
  userInfo: {}
}
const getters = {
  userInfo: state => state.userInfo
}
const actions = {
  getUserInfo: function ({commit}) {
    // var sendData = {
    //   HTTP_API_VERSION: config.apiVersion,
    //   device_id: Vue.cookie.get('device_id'),
    //   verify: Vue.cookie.get('verify'),
    //   user_id: Vue.cookie.get('user_id'),
    //   f: Vue.cookie.get('f_code') || config.workcodeF
    // }
    // Vue.http.jsonp(config.apiUrl + config.userInfo, {
    //   params: sendData
    // }).then(response => {
    //   commit('getUserInfo', response['body'])
    // })
    var info = {
      'name': '樊中魁',
      'age': '23'
    }
    commit('getUserInfo', info)
  }
}
const mutations = {
  getUserInfo: function (state, data) {
    state.userInfo = data
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
