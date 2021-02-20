<template>
  <div class="internet">
    <!-- 导航区域 -->
    <my-nav />
    <!-- 占位 -->
    <div class="placeholder-nav"></div>
    <!-- 头部区域 -->
    <my-head />
    <!-- 商品列表 -->
    <pro-list />
    <!-- 定制方案 -->
    <my-design />
    <!-- 滚动通知 -->
    <my-notify />
  </div>
</template>
<script>
import MyNav from '~/components/internet/MyNav.vue'
import MyHead from '~/components/internet/MyHead.vue'
import ProList from '~/components/internet/ProList.vue'
import MyDesign from '~/components/internet/MyDesign.vue'
import MyNotify from '~/components/internet/MyNotify.vue'
export default {
  name: 'Internet',
  components: {
    MyNav,
    MyHead,
    ProList,
    MyDesign,
    MyNotify,
  },
}
</script>
<style lang="less" scoped>
.internet {
  width: 375px;
  margin: 0 auto;
  font-family: PingFang SC;
  height: 100vh;
}
.placeholder-nav {
  height: 44px;
}
</style>
