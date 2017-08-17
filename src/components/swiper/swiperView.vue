<style scoped>
  @import './../../../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css';
  .swiper-box{
    margin:0px auto;
    width: 500px;
    height: 300px;
    border:1px red solid;
  }
  .swiper-slide img{
    width: 500px;
    height: 300px;
  }
</style>
<template>
  <div class="swiper-box">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img src="https://course-assets1.talkmate.com/course/images/icon/Level1/Unit1/Chapter1.webp?imageView2/0/q/60/format/jpeg" alt=""></swiper-slide>
      <swiper-slide><img src="https://course-assets1.talkmate.com/course/images/icon/Level1/Unit1/Chapter2.webp?imageView2/0/q/60/format/jpeg" alt=""></swiper-slide>
      <swiper-slide><img src="https://course-assets1.talkmate.com/course/images/icon/Level1/Unit1/Chapter3.webp?imageView2/0/q/60/format/jpeg" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
    <div>
      <h1>API参考swiper,</h1>
      <h1>样式问题，重写全局样式，覆盖swiper样式</h1>
    </div>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data: function () {
      return {
        swiperOption: {
          // 所有配置均为可选（同Swiper配置）
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象（假如你需要使用获取swiper对象来做什么事，那么这个属性一定要是true）
          notNextTick: true,
          autoplay: 3000,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          mousewheelControl: false,
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            // console.log(swiper)
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted: function () {
      console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
