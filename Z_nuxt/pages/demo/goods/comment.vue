<template>
  <div>
    <h3>评论</h3>
    <nuxt-link
      :to="{
        name: 'demo-goods-comment-zid',
        params: { uid: 1 },
        query: { a: 1, b: 2 }
      }"
      >评论01</nuxt-link
    >
    <nuxt-link to="/demo/goods/comment/3?a=11&b=22">评论02</nuxt-link>
    <Nuxt />
  </div>
</template>
