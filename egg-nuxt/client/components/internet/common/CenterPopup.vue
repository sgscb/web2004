<template>
  <div class="mask" :style="{ display: show ? 'block' : 'none' }">
    <div class="mask-click"></div>
    <div class="center-box">
      <img src="https://hlwm.dgg.cn/_nuxt/img/02e2a6b.png" alt="" />
      <p class="title">您的查询申请我们已经收到！</p>
      <p class="desc">您的专属顾问将尽快联系您，请保持电话畅通！</p>
      <button class="btn" @click="changeShow">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: [Boolean],
      required: true,
    },
  },
  data() {
    return {
      show: '',
    }
  },
  computed: {},
  watch: {
    value() {
      if (this.value) {
        this.show = this.value
        const dom = document.querySelector('.mask')
        if (this.value === true) {
          setTimeout(() => {
            dom.classList.add('active')
          }, 200)
        }
        document.body.addEventListener('touchmove', this.preventScroll, false)
        document.body.style.overflow = 'hidden'
      }
    },
    show() {
      this.$emit('input', this.show)
    },
  },
  created() {},
  mounted() {},
  methods: {
    changeShow() {
      this.show = false
      const dom = document.querySelector('.mask')
      dom.classList.remove('active')
      document.body.removeEventListener('touchmove', this.preventScroll, false)
      document.body.style.overflow = ''
    },
    /** 手机端禁止滚动 */
    preventScroll(e) {
      e.preventDefault()
    },
  },
}
</script>
<style lang="less" scoped>
.mask.active {
  opacity: 1;
}
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  opacity: 0;
  transition: all 0.3s linear;
  .mask-click {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(37, 38, 45, 0.7);
  }
  .center-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 5.6rem;
    height: 4.42rem;
    background-color: #fff;
    border-radius: 0.24rem;
    padding-top: 0.38rem;
    > img {
      width: 1rem;
      height: 1rem;
      margin-bottom: 0.28rem;
    }
    .title {
      color: #333;
      font-size: 0.32rem;
      margin-bottom: 0.2rem;
      font-weight: 700;
    }
    .desc {
      color: #666;
      font-size: 0.26rem;
      font-weight: 400;
      margin-bottom: 0.3rem;
      width: 85%;
    }
    .btn {
      width: 4.96rem;
      height: 0.72rem;
      background: linear-gradient(90deg, #3cb0ff, #1472ed);
      border-radius: 0.36rem;
      text-align: center;
      line-height: 0.72rem;
      color: #fff;
      font-size: 0.26rem;
      border: 0;
      outline: 0;
    }
  }
}
</style>
