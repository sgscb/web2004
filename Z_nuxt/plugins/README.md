# PLUGINS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains Javascript plugins that you want to run before mounting the root Vue.js application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/plugins).
# 埋点  IM
1.下载   npm install sa-sdk-javascript
2.在plugins创建两文件 sp-md-directive.js   sp-md-jdk.js
3.根目录 nuxt.config.js => plugins引入:
  plugins: [
    { src: '@/plugins/sp-md-jdk', ssr: false },
    { src: '@/plugins/sp-md-directive', ssr: false },
  ],
4.页面需要单独在页面配置：
import { mapState } from 'vuex'
import { foundApi } from '~/api'
mounted() {
    const param = {
      platform_type: 'H5', // 平台类型：App，H5，Web
      app_name: '薯片wap端', // 应用名称
      product_line: '免费帮找页',
      current_url: location.href,
      referrer: document.referrer,
    }
    window.sensors.registerPage(param) // 设置公共属性
   <!-- if (this.isInApp) {
          this.$appFn.dggSetTitle({ title: '工商注册' }, () => {})
          console.log('dsdad')
        } -->
  },
computed: {
  ...mapState({
    isInApp: (state) => state.app.isInApp, // 是否app中
    // appInfo: (state) => state.app.appInfo, // app信息
  ),
},
5.埋点说明:
普通点击事件：webClick
表单提交事件：p_formSubmit
IM事件:p_IMClick 例子demo：pages=>demo
（1）普通事件
a_form表单里面的.
   v-sensorsTrack:webClick="{
      form_type: `印章服务表单_验证码`,
    }"
b_普通的.
   v-sensorsTrack:webClick="{
    name: `印章服务表单_验证码`,
   }"
（2）im事件也就是咨询
   v-sensorsTrack:p_IMClick="{
      name: `${plannersCommon.imName}`,
       im_type: '售前',
   }"
（3）form提交事件
   v-sensorsTrack:p_formSubmit="{
       event_name: 'p_formSubmit',
        form_type: '咨询表单',
        form_name: `印章服务表单_提交`,
   }"
（4） // 表单成功买点
window.sensors.track('p_formSubmitResult', {
  even_name: 'p_formSubmitResult',
  form_type: '咨询表单',
  form_name: '工商注册表单_提交',
})

# IM


