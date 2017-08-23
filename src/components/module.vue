<style scoped>

</style>
<template>
  <div>
    <p>此项目主要是列举平时常见的成熟解决方案，后续开发直接引用就行</p>
    <p>module.vue是模板结构，新建.vue文件时复制粘贴，项目开发完成删除即可</p>
    <p>模板是在vue-cli 脚手架的基础上根据自身项目需求做的改动</p>
    <h2>项目说明如下如下：</h2>
    <ol>
      <li>
        <div>版本号添加</div>
        <div>node接收打包变量 npm run build v1.1</div>
        <div>这样做的问题：</div>
        <div>img 标签src路径打包是不会添加上版本号，解决方法，在版本文件夹外层在</div>
        <div>单独复制出一份static文件</div>
      </li>
      <li>
        <div>分离接口请求线上&&测试环境,两种方法</div>
        <div>第一种：判断是开发环境还是生产环境（目前用的是这种方法，前端搞定，不需后端配合）</div>
        <div>第二种：配置proxyTable转发请求但是后端也需要nginx转发请求</div>
      </li>
      <li>
        <div>请求引入的是vue-resource</div>
        <div>目前vue-resource已经停止更新，但是我们还是用vue-resource的原因是我们的后端接口都是</div>
        <div>跨域请求，vue官方推荐的是axios但是它没jsonp方法</div>
        <div>项目中的api文件夹中方的就是数据层，做到数据层与逻辑层分离</div>
        <div>api.js就是请求层，config.js就是接口配置信息</div>
      </li>
      <li>
        <div>多语言处理-vue-I18n</div>
        <div>vue-i18n@5.x和 饿了吗兼容，其他版本开发比较复杂</div>
        <div>iview 也是一样必须用5版本</div>
        <div>详细用法参考main.js</div>
      </li>
      <li>
        <div>Vue-router 懒加载</div>
        <div>babel-polyfill修复低版本浏览器内核不支持es6语法</div>
        <div>注意：只需安装到开发依赖</div>
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
