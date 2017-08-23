<style scoped>
.el-button{
  width: 100%;
}
</style>
<template>
  <div>
    <h1>多语言例子</h1>
    <div>切换语言</div>
    <div>
      <el-button @click="changLangs('zh-cn')">中文</el-button>
    </div>
    <div>
      <el-button type="primary" @click="changLangs('en')">english</el-button>
    </div>
    <div>{{ $t('name') }}</div>
  </div>
</template>
<script>
  import bus from './../../bus'
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
      console.log(this.$t('name'))
    },
    methods: {
      changLangs: function (langType) {
        bus.$emit('chang-langs', langType)
      }
    }
  }
</script>
