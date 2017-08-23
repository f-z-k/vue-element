// 项目中所需配置文件
export default {
  // 左侧菜单栏配置
  menuList: [
    {
      title: {
        name: '项目说明',
        icon: 'el-icon-document'
      },
      child: [
        {
          name: '.vue模板',
          path: '/layout/module',
          icon: ''
        }
      ]
    },
    {
      title: {
        name: '饿了吗组件用法',
        icon: 'el-icon-message'
      },
      child: [
        {
          name: '表格控件',
          path: '/layout/table',
          icon: ''
        },
        {
          name: 'form表单',
          path: '/layout/form',
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
          path: '/layout/video',
          icon: ''
        },
        {
          name: 'swipter.js',
          path: '/layout/swiper',
          icon: ''
        },
        {
          name: 'cropper.js',
          path: '/layout/cropper',
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
          path: '/layout/vuex',
          icon: ''
        },
        {
          name: 'vue-resource',
          path: '/layout/http',
          icon: ''
        },
        {
          name: 'vue-I18n',
          path: '/layout/i18n',
          icon: ''
        }
      ]
    }
  ]
}
