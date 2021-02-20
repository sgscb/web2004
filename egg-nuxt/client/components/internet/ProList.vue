<template>
  <div class="pro-list">
    <div v-for="(item, i) of proList" :key="i" class="pro-list-item">
      <div
        class="pro-item-type"
        :style="{ backgroundImage: `url(${item.img})` }"
      >
        <span>{{ item.type }}</span>
        <sp-icon name="arrow" :size="16"></sp-icon>
      </div>
      <ul class="pro-item-contain">
        <li v-for="(value, index) of item.contain" :key="index">
          <nuxt-link to="/">{{ value }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Icon } from '@chipspc/vant-dgg'
export default {
  components: {
    [Icon.name]: Icon,
  },
  props: {},
  data() {
    return {
      proList: [
        {
          type: 'IT软件',
          contain: ['定制建站', '模板建站', '小程序商城'],
          img: 'https://hlwm.dgg.cn/_nuxt/img/027f043.png',
        },
        {
          type: '品牌设计',
          contain: ['LOGO设计', 'VI设计', '视频拍摄'],
          img: 'https://hlwm.dgg.cn/_nuxt/img/dbb593b.png',
        },
        {
          type: '营销策划',
          contain: ['网站代运营', '网站图片设计', '微信代运营'],
          img: 'https://hlwm.dgg.cn/_nuxt/img/d13975f.png',
        },
        {
          type: '其他服务',
          contain: ['ICP工信部备案', '网站服务器', '域名'],
          img: 'https://hlwm.dgg.cn/_nuxt/img/aaaf831.png',
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
.pro-list {
  padding: 0.86rem 0.24rem 0;
  overflow: hidden;
  &-item {
    display: flex;
    width: 100%;
    height: 0.9rem;
    background: #f8f8fa;
    border-radius: 0.04rem;
    margin-bottom: 0.2rem;
    overflow: hidden;
    .pro-item-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.28rem;
      font-weight: 700;
      color: #fff;
      width: 25%;
      height: 100%;
      padding: 0 0.1rem 0 0.2rem;
      background-size: cover;
    }
    .pro-item-contain {
      display: flex;
      align-items: center;
      list-style: none;
      width: 75%;
      height: 100%;
      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33.333%;
        height: 100%;
        > a {
          font-size: 0.24rem;
          color: #333;
        }
      }
    }
  }
}
</style>
