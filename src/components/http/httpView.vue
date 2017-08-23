<style scoped>

</style>
<template>
  <div></div>
</template>
<script>
  import { getUserInfo } from './../../api/api'
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
      // console.log(getUserInfo)
      getUserInfo().then(data => {
        console.log(data)
      })
    },
    methods: {
    }
  }
</script>
