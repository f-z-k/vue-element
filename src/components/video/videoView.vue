<style  scoped>
  @import './../../../node_modules/vue-video-player/node_modules/video.js/dist/video-js.min.css';
  .video-box{
    width: 400px;
    height: 300px;
  }
</style>
<template>
  <div class="video-box">
    <video-player :options="playerOptions" :playsinline="true"></video-player>
    <img src="" alt="">
  </div>
</template>

<script>
  // import Vue from 'vue'
  import { videoPlayer } from 'vue-video-player'
  // Vue.use(VueVideoPlayer)
  export default {
    data: () => ({
      playerOptions: {
        sources: [{
          type: 'video/mp4',
          src: 'http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L'
        }],
        lang: 'zh-CN',
        poster: 'https://course-assets1.talkmate.com/course/images/icon/Level1/Unit1/Chapter1.webp?imageView2/0/q/60/format/jpeg',
        width: 400,
        height: 200
      }
    }),
    components: {
      videoPlayer
    },
    mounted: function () {
    }
  }
</script>
