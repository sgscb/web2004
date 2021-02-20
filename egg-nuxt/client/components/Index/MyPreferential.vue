<template>
  <div class="preferential">
    <p class="pre-title">优惠活动</p>
    <ul class="pre-list pre-list-top">
      <li
        v-for="(item, i) of preferentialData.slice(0, 2)"
        :key="i"
        class="pre-list-top-item"
      >
        <nuxt-link :to="item.url">
          <img :src="item.img" alt="" />
        </nuxt-link>
      </li>
    </ul>
    <ul class="pre-list pre-list-center">
      <li
        v-for="(item, i) of preferentialData.slice(2)"
        :key="i"
        class="pre-list-center-item"
      >
        <nuxt-link :to="item.url">
          <img :src="item.img" alt="" />
        </nuxt-link>
      </li>
    </ul>
    <div class="hot-news-box">
      <img
        src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/hot_icon.png?x-oss-process=image/resize,m_fill,w_68,h_28,limit_0"
        alt=""
      />
      <div class="swipe-box">
        <van-swipe
          vertical
          class="news-swipe"
          :touchable="false"
          :show-indicators="false"
          :autoplay="3000"
        >
          <van-swipe-item v-for="(item, i) of hotNewsData" :key="i">
            <p class="news-swipe-text">{{ item }}</p>
          </van-swipe-item>
        </van-swipe>
      </div>
      <nuxt-link to="/" class="more-btn">
        <span>更多</span>
        <van-icon
          name="arrow"
          size="0.3rem"
          color="rgb(170, 170, 170)"
        ></van-icon>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { Icon, Swipe, SwipeItem } from 'vant'
export default {
  components: {
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data() {
    return {
      /** 模拟优惠数据 */
      preferentialData: [
        {
          img:
            'https://img10.dgg.cn/upload/3lSf8X5xL9wMQ9OQI7VZS7OjDB5MTUgc3ZUt8LNX.png?x-oss-process=image/resize,m_fill,w_342,h_200,limit_0',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/Z8sZDFAjQrYwBHnBnYsOTnkiJYbyv4kvDy5rBPDN.png?x-oss-process=image/resize,m_fill,w_342,h_200,limit_0',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/YoSn6cvzauHN4y5vNc4OhS4ATWYy4KHgvLnTg7Za.png?x-oss-process=image/resize,m_fill,w_160,h_186,limit_0',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/8F43ia9ITJtPe0Y7wqfG4Px8anuj2vgsZyIs6eoC.png?x-oss-process=image/resize,m_fill,w_160,h_186,limit_0',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/7JG8Kaut6jBsOjvlZgWbhKZDVvTsYYWRolVGioh3.png?x-oss-process=image/resize,m_fill,w_160,h_186,limit_0',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/VpzFF167tvLQaDtJpoBXJHzJq5Z4hFnB3LC9n49a.png?x-oss-process=image/resize,m_fill,w_160,h_186,limit_0',
          url: '/',
        },
      ],
      /** 模拟滚动数据 */
      hotNewsData: [
        '吃一堑长一智，从受骗案例看专利转让常见骗局！',
        '新办理物资需要注意哪些事项？',
        '如何挑选适合自己的贷款方式？',
        '使用未注册商标有什么后果？',
        '百度地图商标为啥被驳回？百度地图竟然不是百度公司的',
        '公众号迁移具体能迁移些什么呢？',
        '哪些细节决定贷款通过率？',
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.preferential {
  width: 100%;
  background: #fff;
  border-radius: 0.24rem;
  padding: 0.48rem 0.24rem 0;
  margin-bottom: 0.2rem;
  box-sizing: border-box;

  .pre-title {
    height: 21px;
    font-size: 0.36rem;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: 700;
    color: #333;
    line-height: 21px;
  }
  .pre-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    list-style: none;
  }
  .pre-list-top {
    margin-top: 16px;
    &-item {
      width: 48.7%;
      margin-right: 2.6%;
      height: 2rem;
      &:last-child {
        margin-right: 0;
      }
      > a {
        display: block;
        width: 100%;
        height: 100%;
        > img {
          width: 100%;
        }
      }
    }
  }
  .pre-list-center {
    margin-top: 10px;
    &-item {
      width: 23%;
      height: 1.86rem;
      margin-right: 2.66%;
      &:last-child {
        margin-right: 0;
      }
      > a {
        display: block;
        width: 100%;
        height: 100%;
        > img {
          width: 100%;
        }
      }
    }
  }
  .hot-news-box {
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.9rem;
    border-top: 0.02rem solid #eee;
    margin-top: 0.3rem;
    > img {
      width: 0.68rem;
      height: 0.28rem;
      margin-right: 0.24rem;
    }
    .swipe-box {
      flex: 1;
      height: 17px;
      overflow: hidden;
    }
    .news-swipe,
    .vam-swipe-item {
      width: 100%;
      height: 17px;
      .news-swipe-text {
        width: 100%;
        white-space: nowrap;
        font-size: 0.26rem;
        font-family: PingFang-SC-Regular, PingFang-SC;
        font-weight: 400;
        color: #666;
        line-height: 0.36rem;
        padding-right: 0.24rem;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
      }
    }
    .more-btn {
      display: flex;
      align-items: center;
      font-size: 0.26rem;
      font-family: PingFang-SC-Regular, PingFang-SC;
      font-weight: 400;
      color: #666;
      line-height: 0.28rem;
      > span {
        margin-right: 0.06rem;
      }
    }
  }
}
</style>
