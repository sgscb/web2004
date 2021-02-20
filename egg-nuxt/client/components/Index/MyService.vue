<template>
  <div class="service index-box">
    <p class="index-title">推荐服务</p>
    <div class="service-box">
      <div v-for="(item, i) of serviceData" :key="i" class="service-card">
        <nuxt-link :to="item.url" class="service-item">
          <div>
            <img class="item-img" :src="item.img" alt="" />
            <span class="item-score">
              <em
                v-for="(star, index) of item.starNum"
                :key="index"
                class="item-score-star"
              ></em>
            </span>
          </div>
          <div class="item-info">
            <div class="item-wrapper">
              <div class="item-name">
                <p class="item-title one-line">{{ item.title }}</p>
                <span v-if="item.tag" class="label">{{ item.tag }}</span>
              </div>
              <p class="item-desc two-line">{{ item.desc }}</p>
              <div class="label-list">
                <span v-for="(label, ii) of item.feature" :key="ii">{{
                  label
                }}</span>
              </div>
            </div>
            <div class="price-box">
              <span class="now-price">
                <span>￥</span>
                {{ item.price.toFixed(2) }}
              </span>
              <span class="sale-volume">{{ item.saleVolume }}销量</span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      /** 模拟数据 */
      serviceData: [
        {
          title: '有限公司注册',
          tag: '热卖',
          desc: '新手创业，找专业平台，省心更省钱',
          feature: ['急速办理', '全程监理', '精选服务'],
          price: 888.0,
          saleVolume: '20000+',
          img:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/images/8bBkifcnD3.jpg?x-oss-process=image/resize,m_fill,w_184,h_184,limit_0',
          starNum: 5,
          url: '/',
        },
        {
          title: '商标注册',
          tag: '爆款',
          desc: '呈细节之美，用更细致的服务助力每一个品牌的诞生',
          feature: ['无隐形费用', '全程托管', '一对一服务'],
          price: 698.0,
          saleVolume: '20000+',
          img:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/images/pAdAZtZccK.jpg?x-oss-process=image/resize,m_fill,w_184,h_184,limit_0',
          starNum: 5,
          url: '/',
        },
        {
          title: '工本费',
          tag: '热卖',
          desc: '专业会计团队代账，服务快捷无忧',
          feature: ['专业服务', '及时高效', '品质保证'],
          price: 100.0,
          saleVolume: '150000+',
          img:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/images/fWif3hTmWa.png?x-oss-process=image/resize,m_fill,w_184,h_184,limit_0',
          starNum: 5,
          url: '/',
        },
        {
          title: '个人社保代缴',
          tag: '热卖',
          desc: '专业团队办理，服务快捷无忧',
          feature: ['专业服务', '及时高效', '品质保证'],
          price: 980.0,
          saleVolume: '10000+',
          img:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/images/8B6CxNWXsj.png?x-oss-process=image/resize,m_fill,w_184,h_184,limit_0',
          starNum: 5,
          url: '/',
        },
        {
          title: '小规模纳税人代理记账',
          tag: null,
          desc: '专业会计团队代账，服务快捷无忧',
          feature: ['急速办理', '官方保障', '专家服务'],
          price: 3488.0,
          saleVolume: '10000+',
          img:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/images/3SZKrPpHeW.jpg?x-oss-process=image/resize,m_fill,w_184,h_184,limit_0',
          starNum: 5,
          url: '/',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    /** 监听滚动条位置是否到推荐服务 */
    scrollListener() {
      const serviceDom = document.querySelector('.service')
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      const serviceDomTop = serviceDom.offsetTop
      if (scrollTop + 102 > serviceDomTop) {
        this.$parent.$refs.headTop.scroll = true
      } else {
        this.$parent.$refs.headTop.scroll = false
      }
    },
  },
}
</script>
<style lang="less" scoped>
@import '~/assets/styles/index.css';
.service-card {
  width: 100%;
  &:not(:last-child) {
    border-bottom: 0.02rem solid #eee;
  }
  .service-item {
    display: flex;
    width: 100%;
    padding: 0.34rem;
    box-sizing: border-box;
    .item-img {
      width: 1.84rem;
      height: 1.84rem;
      margin-right: 0.28rem;
      border-radius: 0.12rem;
    }
    .item-score {
      display: flex;
      margin-right: 0.24rem;
      margin-top: -0.1rem;
      height: 0.24rem;
      justify-content: center;
      &-star {
        background: url(https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/stars_icon_yellow.png)
          no-repeat;
        background-size: 100% 100%;
        width: 0.24rem;
        height: 0.24rem;
        &:not(:last-child) {
          margin-right: 0.04rem;
        }
      }
    }
    .item-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-top: -0.04rem;
      margin-bottom: -0.1rem;
      .item-wrapper {
        margin-bottom: 0.2rem;
        .item-name {
          display: flex;
          align-items: center;
          margin-bottom: 0.1rem;
          margin-top: 0.04rem;
          .item-title {
            height: 0.46rem;
            max-width: 80%;
            font-size: 0.32rem;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #252525;
          }
          .label {
            display: block;
            height: 16px;
            line-height: 16px;
            background: #ff6600;
            font-size: 0.2rem;
            color: #fff;
            margin-left: 0.12rem;
            padding: 0.02rem 0.05rem;
            border-radius: 0.04rem;
            box-sizing: border-box;
          }
        }
        .item-desc {
          font-size: 0.24rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          margin-bottom: 0.1rem;
          color: #666;
        }
        .label-list {
          display: flex;
          flex-wrap: wrap;
          height: 0.36rem;
          overflow: hidden;
          margin-top: 0.18rem;
          > span {
            display: flex;
            align-items: center;
            height: 0.36rem;
            background: #fff;
            border-radius: 0.06rem;
            border: 0.02rem solid #ccc;
            padding: 0 0.1rem;
            box-sizing: border-box;
            font-size: 0.22rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333;
            white-space: nowrap;
            &:not(:last-child) {
              margin-right: 0.16rem;
            }
          }
        }
      }
      .price-box {
        font-size: 0.36rem;
        .now-price {
          font-size: 0.36rem;
          font-family: PingFangSC-Semibold, sans-serif;
          font-weight: 700;
          color: #f60;
          margin-right: 0.06rem;
          > span {
            font-size: 0.24rem;
          }
        }
        .sale-volume {
          line-height: 0.26rem;
          font-size: 0.22rem;
          font-family: ArialMT;
          color: #666;
        }
      }
    }
  }
}
</style>
