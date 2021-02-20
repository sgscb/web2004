<template>
  <div class="notify">
    <div class="notify-left">
      <img src="https://hlwm.dgg.cn/_nuxt/img/4ad1ccc.png" alt="" />
    </div>
    <div class="notify-right"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.notify {
  display: flex;
  align-items: center;
  padding: 0 0.24rem;
  width: calc(100% - 0.48rem);
  height: 0.6rem;
  background: #f4f4f4;
  border-radius: 0.08rem;
  margin: 0 0.24rem;
  margin-bottom: 0.64rem;
}
.notify-left {
  display: flex;
  align-items: center;
  width: 1.64rem;
  height: 0.24rem;
  border-right: 1px solid #d4d4d4;
  padding: 0 0.24rem;
  > img {
    width: 1.24rem;
    height: 0.35rem;
    margin-top: 0.1rem;
  }
}
</style>
