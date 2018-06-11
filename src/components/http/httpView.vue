<style scoped>

</style>
<template>
  <div>我的个人信息{{ userName }}</div>
</template>
<script>
  import { getInfo } from './../../api/api'
  export default {
    data: function () {
      return {
        userName: ''
      }
    },
    components: {
    },
    computed: {
    },
    watch: {
    },
    mounted: function () {
      getInfo().then(data => {
        console.log('======')
        console.log(data)
      })
      // var _this = this
      // getUserInfo().then(function (data) {
      //   _this.userName = data.name
      // })
      // this.$http.jsonp('http://localhost:3000/userinfo?callback=_jsonp7kasq8ko30j').then(function (data) {
      //   console.log(data)
      // })
      // this.$http.jsonp('http://localhost:3000/userinfo').then(response => {
      //   console.log(response)
      // }, error => {
      //   console.log('1231231')
      //   console.log(error)
      // })
    },
    methods: {
    }
  }
</script>
