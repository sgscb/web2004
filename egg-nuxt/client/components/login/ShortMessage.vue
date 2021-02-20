<template>
  <div class="my-button" @click="sendMessage">
    <div v-if="isSend" class="btn">获取验证码</div>
    <div v-else class="btn btn-1">重新发送{{}}s</div>
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
.my-button {
  display: flex;
  align-items: center;
  height: 100%;
}
.my-button {
  width: 100%;
  height: 100%;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 0.58rem;
  background: #10bbb8;
  border-radius: 0.48rem;
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: #fff;
}
.btn-1 {
  background: #f5f7fa !important;
  color: #b8b8b8 !important;
}
</style>
