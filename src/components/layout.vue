<style scoped>
  .layout-box{
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }
  .main-box{
    width:100%;
    position: absolute;
    top: 70px;
    bottom: 0px;
  }
  .main-menu{
    float:left;
  }
  .main-content{
    padding:20px;
    /* overflow-y: scroll; */
    position: absolute;
    top: 0px;
    left:200px;
    right:0px;
    /* bottom:0px; */
  }
</style>

<template>
  <div class="layout-box">
    <!--  头部-->
    <layout-head></layout-head>
    <div class="main-box">
      <!--  左侧菜单栏-->
      <layout-menu class="main-menu"></layout-menu>
      <!--  右侧主体内容区-->
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
