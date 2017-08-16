<style>
  body {
    margin: 0px;
    padding: 0px;
    background: #f0f6fa;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }
  #app {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }
</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
      }
    }
  }
</script>
