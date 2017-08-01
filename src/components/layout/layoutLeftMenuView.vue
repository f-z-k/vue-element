<style scoped>
  .el-menu-vertical-demo,.el-row-box,.el-col-box{
    height:100%;
  }
  .menu-box{
    width: 200px;
  }
</style>
<template>
  <div class="menu-box">
    <el-row class="el-row-box">
      <el-col :span="24" class="el-col-box">
        <el-menu default-active="a" theme="dark"  unique-opened router class="el-menu-vertical-demo">
          <!-- <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <el-menu-item index="a">选项1</el-menu-item>
              <el-menu-item index="b">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <el-menu-item index="c">选项1</el-menu-item>
              <el-menu-item index="d">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <el-menu-item index="e">选项1</el-menu-item>
              <el-menu-item index="f">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
          <el-submenu :index="index" v-for="(item, index) in menuLists" :key="index">
            <template slot="title"><i :class="item.title.icon"></i>{{ item.title.name }}</template>
            <el-menu-item-group>
              <el-menu-item index="e" v-for="(items, indexs) in item.child" :key="indexs">{{ items.name }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import config from './../../config'
  export default {
    data: () => {
      return {
        menuLists: []
      }
    },
    mounted: function () {
      this.menuLists = config.menuList
      console.log(config)
    }
  }
</script>


