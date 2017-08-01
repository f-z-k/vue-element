<style scoped>
  .layout-box{
    height:100%;
  }
  .main-box{
    overflow: hidden;
    display: flex;
    height:100%;
  }
  .main-menu{
    flex:0 0 230px;
    width: 230px;
  }
  .main-content{
    height:100%;
    flex: 1;
  }
</style>
<template>
  <div class="layout-box">
    <layout-head></layout-head>
    <div class="main-box">
      <layout-menu class="main-menu"></layout-menu>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
    <!-- <layout-bottom></layout-bottom> -->
  </div>
</template>
<script>
  import layoutHead from './layout/layoutHeadView'
  import layoutMenu from './layout/layoutLeftMenuView'
  import layoutBottom from './layout/layoutBottomView'
  export default {
    data: function () {
      return {}
    },
    components: {
      layoutHead,
      layoutMenu,
      layoutBottom
    }
  }
</script>

