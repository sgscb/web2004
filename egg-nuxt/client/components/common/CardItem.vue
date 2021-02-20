<template>
  <li class="card-item" :style="{ height: height }">
    <nuxt-link v-if="to" :to="to"></nuxt-link>
    <img :style="{ width: size, height: size }" :src="data.img" alt="" />
    <p :style="{ fontSize: fontsize, color: color }">{{ data.text }}</p>
  </li>
</template>
<script>
export default {
  props: {
    data: {
      type: [Object],
      required: true,
    },
    number: {
      type: [Number],
      required: true,
    },
    to: {
      type: [String],
      default: '',
    },
    height: {
      type: [String],
      default: 'auto',
    },
    fontsize: {
      type: [String],
      default: '16px',
    },
    color: {
      type: [String],
      default: '#fff',
    },
    size: {
      type: [String],
      default: '20px',
    },
  },
  computed: {},
}
</script>
<style lang="less" scoped>
.card-item {
  text-align: center;
  font-size: 0;
  flex-basis: 20%;
}
img {
  margin-bottom: 10px;
}
</style>
