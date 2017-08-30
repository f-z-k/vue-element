<style scoped>

</style>
<template>
  <section>
    <input type="file" class="uploadfile" @change="upload($event)">
    <input type="button" @click="okupload" value="裁剪">
    <div class="container">
      <img class="img" src="">
    </div>
    <div><img class="imgcropper" src="" alt=""></div>
  </section>
</template>
<script>
  import 'cropper/dist/cropper.min.css'
  import 'cropper'
  import $ from 'jquery'
  import { getToken } from './../../api/api'
  export default {
    data: function () {
      return {
        imgUrl: ''
      }
    },
    mounted: function () {
      console.log($)
      // $('.container > img').cropper({
      //   aspectRatio: 16 / 9,
      //   crop: function (data) {
      //     console.log(data)
      //   }
      // })
    },
    methods: {
      upload: function ($this) {
        var preview = document.querySelector('img')
        var file = $this.target.files[0]
        var reader = new FileReader()
        reader.onloadend = function () {
          preview.src = reader.result
          $('.container > img').cropper({
            aspectRatio: 16 / 9,
            crop: function (data) {
              console.log(data)
            }
          })
        }
        if (file) {
          reader.readAsDataURL(file)
        } else {
          preview.src = ''
        }
      },
      okupload: function () {
        var croppedCanvas = $('.container > img').cropper('getCroppedCanvas')
        console.log(croppedCanvas.toDataURL())
        // var rectCanvas = $('.container > img').cropper.getRectCanvas(croppedCanvas)
        $('.imgcropper')[0].src = croppedCanvas.toDataURL()
        var dataBase = croppedCanvas.toDataURL()
        var data = {
          device_id: '638da3194c8e97327f44ce47743e0835',
          HTTP_API_VERSION: 4.1
        }
        getToken(data).then(res => {
          console.log(res.token)
          this.$http.post('http://upload.qiniu.com', {params: dataBase, headers: {'Content-Type': 'application/octet-stream', 'Authorization': 'UpToken' + res.token}}).then(data => {
            console.log(data)
          }, error => {
            console.log(error)
          })
        })
      }
    }
  }
</script>

