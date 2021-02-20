<template>
  <nav>
    <!-- <nuxt-link to="/" exact-active-class="app_header--active">首页</nuxt-link> -->
    <nuxt-link to="/index" active-class="app_header--active">首页</nuxt-link>
    <nuxt-link to="/goods" active-class="app_header--active">商品</nuxt-link>
    <nuxt-link to="/user" active-class="app_header--active">用户</nuxt-link>
    <nuxt-link to="/login" active-class="app_header--active">登录</nuxt-link>
    <nuxt-link to="/reg" active-class="app_header--active">注册</nuxt-link>
    <div>123</div>
  </nav>
</template>
<style lang="less" scoped>
.app_header--active {
  background: #399;
  color: #fff;
}
</style>
