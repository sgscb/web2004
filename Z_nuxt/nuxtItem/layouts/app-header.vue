<template>
  <nav>
    <!-- <nuxt-link to="/" exact-active-class="app_header--active">首页</nuxt-link> -->
    <nuxt-link to="/demo" exact-active-class="app_header--active">
      首页
    </nuxt-link>

    <nuxt-link to="/demo/goods" active-class="app_header--active">
      商品
    </nuxt-link>

    <nuxt-link to="/demo/user" active-class="app_header--active">
      用户
    </nuxt-link>

    <nuxt-link to="/demo/login" active-class="app_header--active">
      登录
    </nuxt-link>

    <nuxt-link to="/demo/reg" active-class="app_header--active">注册</nuxt-link>
  </nav>
</template>
<style lang="less" scoped>
.app_header--active {
  background: #399;
  color: #fff;
}
</style>
