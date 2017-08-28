<style scoped>
  .img{
    width: 100px;
    height: 100px;
  }
</style>
<template>
  <div>
    <img class="img" :src="url" alt="">
    <el-button @click="changImg">换图片</el-button>
    <p>此项目主要是列举平时遇见的问题的一些解决方案，后续开发直接引用就行&&参考就行</p>
    <p>module.vue是模板结构，新建.vue文件时复制粘贴，项目开发完成删除即可</p>
    <p>模板是在vue-cli 脚手架的基础上根据自身项目需求做的改动</p>
    <h2>项目说明如下如下：（之前遇到的一些坑）</h2>
    <ol>
      <li>
        <div>版本号添加(解决缓存问题)</div>
        <div>node接收打包变量 npm run build v1.1</div>
        <div>上线时，编写上线脚本 参考之前脚本 sh line.sh v1.1</div>
      </li>
      <li>
        <div>img 标签src路径js动态添加打包时候吧不会添加上版本号</div>
        <div>第一种解决方案:在版本文件夹外层，单独复制一份static(之前项目解决方案)</div>
        <div>第二种解决方案:地址 require(path)（建议以后用这种）</div>
      </li>
      <li>
        <div>线上&&测试环境请求接口地址更换</div>
        <div>第一种：手动切换（目前项目中用的是这种）</div>
        <div>第二种：判断是开发环境还是生产环境（前端搞定，不需后端配合，不需手动）</div>
        <div>第三种：配置proxyTable转发请求但是后端也需要nginx转发请求（好处减少了前端一点代码，不用再拼接请求地址</div>
      </li>
      <li>
        <div>请求引入的是vue-resource</div>
        <div>目前vue-resource已经停止更新，但是我们还是用vue-resource的原因是我们的后端接口都是</div>
        <div>跨域请求，vue官方推荐的是axios但是目前来说我是没发现跨域的解决方法</div>
        <div>项目中的api文件夹是项目的数据层，做到数据层与逻辑层分离</div>
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
    <h2>项目目录说明</h2>
    <ol>
      <li>
        <div>api(service 模块)</div>
        <div>数据请求层，api.js数据请求处理，config.js接口配置信息</div>
      </li>
      <li>
        <div>router</div>
        <div>index.js路由配置信息</div>
      </li>
      <li>
        <div>store</div>
        <div>vuex状态管理,如果状态较多时 把store分割成module，方便管理</div>
        <div>例子：就是分割成模块的例子，可供参考</div>
      </li>
      <li>
        <div>tool</div>
        <div>项目中所需的一些工具（例如：一些自定义的一些工具函数）</div>
      </li>
      <li>
        <div>vueI18n</div>
        <div>多语言--包（分模块。方便管理）</div>
      </li>
      <li>
        <div>bus.js一个通信实例，主要解决组件之间通信问题（非父子组件），注意方法命名问题</div>
      </li>
      <li>
        <div>config.js 项目中的配置信息</div>
      </li>
      <li>
        <div>static</div>
        <div>项目中的静态资源js\img\css</div>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        url: require('./../../static/img/lang-icon-0.png')
      }
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
      changImg: function () {
        var num = 1
        this.url = require('./../../static/img/lang-icon-' + num + '.png')
      }
    }
  }
</script>
