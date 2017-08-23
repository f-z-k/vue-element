// 项目中所需配置文件
export default {
  // 左侧菜单栏配置
  menuList: [
    {
      title: {
        name: '饿了吗组件用法',
        icon: 'el-icon-message'
      },
      child: [
        {
          name: '表格控件',
          path: 'table',
          icon: ''
        },
        {
          name: 'form表单',
          path: 'form',
          icon: ''
        }
      ]
    },
    {
      title: {
        name: '常用插件',
        icon: 'el-icon-menu'
      },
      child: [
        {
          name: 'video.js',
          path: 'video',
          icon: ''
        },
        {
          name: 'swipter.js',
          path: 'swiper',
          icon: ''
        },
        {
          name: 'cropper.js',
          path: '',
          icon: ''
        }
      ]
    },
    {
      title: {
        name: 'vue自身',
        icon: 'el-icon-setting'
      },
      child: [
        {
          name: 'vuex',
          path: 'vuex',
          icon: ''
        },
        {
          name: 'vue-resource',
          path: 'http',
          icon: ''
        }
      ]
    }
  ]
}
