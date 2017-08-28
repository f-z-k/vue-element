// var root = process.env.API_ROOT
// 接口配置文件
var root = '' // root 区分线上接口地址还是测试
if (process.env.NODE_ENV === 'development') {
  root = 'http://localhost:3000'
} else {
  root = 'http://localhost:3000'
}
export default {
  getName: root + '/userinfo', // 测试
  getInfo: root + '/users/info', // 测试
  getOneInfo: root + '/users/oneInfo' // 测试
}
