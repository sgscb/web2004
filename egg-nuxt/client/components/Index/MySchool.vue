<template>
  <div class="school index-box">
    <div class="school-top">
      <p class="school-text index-title">企业学堂</p>
      <nuxt-link to="/" class="more-btn">
        <span>更多</span>
        <van-icon
          name="arrow"
          size="0.3rem"
          color="rgb(170, 170, 170)"
        ></van-icon>
      </nuxt-link>
    </div>
    <ul class="school-pro">
      <li v-for="(item, i) of schoolData" :key="i" class="school-pro-item">
        <nuxt-link :to="item.url">
          <div class="school-img">
            <img class="picture" :src="item.img" alt="" />
            <img
              class="autoplay-icon"
              src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/play_iocn.png?x-oss-process=image/resize,m_fill,w_40,h_40,limit_0"
              alt=""
            />
          </div>
          <p class="school-pro-title one-line">{{ item.title }}</p>
          <p class="school-pro-desc one-line">{{ item.desc }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Icon } from 'vant'
export default {
  components: {
    [Icon.name]: Icon,
  },
  data() {
    return {
      /** 模拟学堂数据 */
      schoolData: [
        {
          img:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/images/Y3GRCsHAca.jpg?x-oss-process=image/resize,m_fill,w_342,h_192,limit_0',
          title: '老黄谈管理-疫情下企业的生存之道',
          desc: '企业管理，小微企业如何应对疫情',
          url: '/',
        },
        {
          img:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/images/4tARBayjZ2.jpg?x-oss-process=image/resize,m_fill,w_342,h_192,limit_0',
          title: '老黄谈管理，聊聊管理事',
          desc: '企业管理，顶呱呱发展史，线上问答',
          url: '/',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
@import '~/assets/styles/index.css';
.school-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .school-text {
    flex: 1;
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
.school-pro {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0.32rem;
  padding-bottom: 0.44rem;
  box-sizing: border-box;
  list-style: none;
  &-item {
    display: block;
    width: 49%;
    overflow: hidden;
    border-radius: 0.08rem;
    > a {
      width: 100%;
      .school-img {
        position: relative;
        width: 100%;
        height: 1.92rem;
        .picture {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .autoplay-icon {
          position: absolute;
          left: 0.08rem;
          bottom: 0.08rem;
          width: 0.4rem;
          height: 0.4rem;
        }
      }
      .school-pro-title {
        font-size: 0.32rem;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: 700;
        color: #252525;
        padding-left: 0.16rem;
        box-sizing: border-box;
        margin-top: 0.24rem;
      }
      .school-pro-desc {
        font-size: 0.22rem;
        height: 0.24rem;
        font-family: PingFang-SC-Regular, PingFang-SC;
        font-weight: 400;
        color: #999;
        line-height: 0.26rem;
        padding-left: 0.16rem;
        box-sizing: border-box;
        margin-top: 0.12rem;
      }
    }
  }
}
</style>
