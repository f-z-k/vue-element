<style scoped>

</style>
<template>
  <div>
    <p>此项目主要是列举平时常见的成熟解决方案，后续开发直接引用就行</p>
    <p>vue模板结构，新建.vue文件时复制粘贴，项目开发完成删除即可</p>
    <p>模板是在vue-cli 脚手架的基础上根据自身项目需求做的改动</p>
    <h2>项目说明如下如下：</h2>
    <ol>
      <li>
        <div>版本号添加</div>
        <div>node接收打包变量&&上线脚本-例子：sh line.sh v1.1</div>
      </li>
      <li>
        <div>分离接口请求线上&&测试环境,两种方法</div>
        <div>第一种：判断是开发环境还是生产环境（目前用的是这种方法，前端搞定，不需后端配合）</div>
        <div>第二种：配置proxyTable转发请求但是后端也需要nginx转发请求</div>
      </li>
      <li>
        <div>请求引入的是vue-resource</div>
        <div>项目中的api文件夹中方的就是数据层，做到数据层与逻辑层分离</div>
        <div>api.js就是请求层，config.js就是接口配置信息</div>
      </li>
      <li>
        <div>多语言处理-vue-I18n</div>
        <div>vue-i18n@5.x和 饿了吗兼容，其他版本开发比较复杂</div>
        <div></div>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {}
    },
    components: {
    },
    computed: {
    },
    watch: {
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>
