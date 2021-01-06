# PLUGINS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains Javascript plugins that you want to run before mounting the root Vue.js application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/plugins).
# 埋点
1.下载   npm install sa-sdk-javascript
2.在plugins创建两文件 sp-md-directive.js   sp-md-jdk.js
3.根目录 nuxt.config.js => plugins引入:
  plugins: [
    { src: '@/plugins/sp-md-jdk', ssr: false },
    { src: '@/plugins/sp-md-directive', ssr: false },
  ],
4.页面需要单独在页面配置：
mounted() {
    const param = {
      platform_type: 'H5', // 平台类型：App，H5，Web
      app_name: '薯片wap端', // 应用名称
      product_line: '免费帮找页',
      current_url: location.href,
      referrer: document.referrer,
    }
    window.sensors.registerPage(param) // 设置公共属性
  },
5.埋点说明:
普通点击事件：webClick
表单提交事件：p_formSubmit
IM事件:p_IMClick
例子demo：pages=>demo
#------
