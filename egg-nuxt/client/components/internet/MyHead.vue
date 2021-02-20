<template>
  <div class="my-head">
    <sp-swipe class="my-swipe" :autoplay="3000" indicator-color="#1aad19">
      <sp-swipe-item v-for="(item, i) of mySwipes" :key="i">
        <nuxt-link :to="item.url">
          <img :src="item.img" alt="" />
        </nuxt-link>
      </sp-swipe-item>
    </sp-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from '@chipspc/vant-dgg'
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  props: {},
  data() {
    return {
      mySwipes: [
        {
          img:
            'https://img10.dgg.cn/upload/jm2n0syeU2bwt6CDBauLnDPvsqtZSYRd81tftT1Z.jpeg',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/5tqqKTRRpcxoBGLpLrpCks76516ZwUaQyVlXxXXc.png',
          url: '/',
        },
      ],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.my-head {
  background: #1e4ed0;
  width: 100%;
  height: 2.2rem;
  padding: 0 0.24rem;
  position: relative;
  &::before {
    content: '';
    display: block;
    height: 0.18rem;
  }
  .my-swipe {
    width: 343px;
    height: 2.4rem;
    margin: 0 auto;
    border-radius: 0.1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    overflow: hidden;
    .sp-swipe-item {
      width: 100%;
      height: 2.4rem;
      > a {
        width: 100%;
        height: 100%;
        > img {
          width: 100%;
        }
      }
    }
  }
}
/deep/ .sp-swipe__indicators {
  bottom: 0.2rem;
}
/deep/ .sp-swipe__indicator {
  display: inline-block;
  width: 0.16rem;
  height: 0.04rem;
  background-color: #ddd;
  margin: 0 0.03rem;
  opacity: 1;
}
</style>
