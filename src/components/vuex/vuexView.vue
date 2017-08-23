<style scoped>
  .div1{
    text-align: center;
  }
</style>
<template>
  <div>
    <h1 class="div1">vuex用法</h1>
    <p>注意事项：</p>
    <p>1-computed  接收值的时候层级不能过多，因为是异步过程例如取: info.name 当info是underfind时报错</p>
    <p>2-form表单用vuex时，会修改vuex值，但是vuex规定要想修改状态 必须在mutation中修改，所以会报错</p>
    <div>姓名：{{ name }}</div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {}
    },
    computed: {
      name: function () {
        return this.$store.state.userInfo.userInfo.name
      }
    },
    mounted: function () {
      console.log(this.$store.dispatch('getUserInfo'))
      console.log(this.$store.state.userInfo.userInfo.name)
    }
  }
</script>

