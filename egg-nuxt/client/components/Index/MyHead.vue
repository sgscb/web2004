<template>
  <div>
    <!-- 头部区域 -->
    <div id="portal-head" :style="{ backgroundColor: headerBgc }">
      <!-- 固定的头部区域 -->
      <div
        class="fixed-head"
        :style="{
          backgroundColor: fixedHeadBgc,
          height: isActiveColor ? 'auto' : '2.04rem',
          boxShadow: isActiveColor
            ? '0 0.04rem 0.24rem 0 rgba(17,17,61,.08)'
            : '0 0 0 0',
        }"
      >
        <div class="fixed-head-top">
          <!-- 左侧城市 -->
          <div class="port-city" @click="changeCityShow">
            <van-icon name="location" :color="fontHeadColor" size="16" />
            <span class="current-city" :style="{ color: fontHeadColor }"
              >北京</span
            >
          </div>
          <!-- 城市列表 -->

          <!-- 中间导航区域 -->
          <ul v-if="!scroll" class="port-nav" :style="{ color: fontHeadColor }">
            <li
              v-for="(item, i) of navData"
              :key="i"
              class="port-nav-item"
              :class="[{ active: navClick == i }, { orange: isActiveColor }]"
              @click="navChange(i)"
            >
              <nuxt-link to="/">{{ item }}</nuxt-link>
            </li>
          </ul>
          <!-- 右侧聊天 -->
          <div class="port-say">
            <van-icon name="chat-o" :color="fontHeadColor" size="20"></van-icon>
          </div>
          <!-- 搜索框 -->
          <div class="search">
            <div class="port-search" :class="{ active: scroll }">
              <div
                class="port-search-box"
                :style="{ backgroundColor: searchBoxBgc }"
              >
                <i class="icon-search">
                  <img
                    src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/search_icon.png?x-oss-process=image/resize,m_fill,w_28,h_28,limit_0"
                    alt=""
                  />
                </i>
                <van-swipe
                  style="height: 0.68rem"
                  vertical
                  autoplay="3000"
                  duration="300"
                  :show-indicators="false"
                  :touchable="false"
                >
                  <van-swipe-item
                    v-for="(item, i) of searchPlaceholder"
                    :key="i"
                    >{{ item }}</van-swipe-item
                  >
                </van-swipe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 热搜区域 -->
      <div class="portal-hot-search">
        <span>热搜</span>
        <ul class="hot-search-box">
          <li
            v-for="(item, i) of hotSearchData"
            :key="i"
            class="hot-search-box-item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <!-- 轮播区域 -->
      <div class="portal-swipe">
        <div class="portal-swipe-box">
          <van-swipe
            class="my-swipe"
            :autoplay="3000"
            indicator-color="#fff"
            @change="swipeChange"
          >
            <van-swipe-item v-for="(item, i) of swipeData" :key="i">
              <img :src="item.url" alt="" />
            </van-swipe-item>
            <template #indicator>
              <ul class="custom-indicator">
                <li
                  v-for="(item, i) of swipeData.length"
                  :key="i"
                  class="custom-indicator-item"
                  :class="current == i ? 'active' : ''"
                ></li>
              </ul>
            </template>
          </van-swipe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon, Search, Swipe, SwipeItem, Popup } from 'vant'
export default {
  components: {
    [Icon.name]: Icon,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Popup.name]: Popup,
  },
  data() {
    return {
      cityShow: false,
      navClick: 0,
      fontHeadColor: 'white',
      fixedHeadBgc: 'transparent',
      searchBoxBgc: 'white',
      isActiveColor: false,
      scroll: false,
      headerBgc: '',
      navData: ['服务', '案例', '工具'],
      searchPlaceholder: ['注册', '记账', '变更'],
      hotSearchData: ['公司注册', '商标', '代理记账', '法人变更', '注销'],
      current: '',
      swipeData: [
        {
          url:
            'https://img10.dgg.cn/upload/614Cb4CI2o9lSeFQkcbxOFhhK5RHoy7jghCTVxjt.png?x-oss-process=image/resize,m_fill,w_702,h_260,limit_0',
          color: 'rgb(1, 4, 52)',
        },
        {
          url:
            'https://img10.dgg.cn/upload/61q7Ev8hNrZkMZmhyRI1UfqCSeRw6xJlHL5dMMtd.png?x-oss-process=image/resize,m_fill,w_702,h_260,limit_0',
          color: 'rgb(219, 135, 48)',
        },
        {
          url:
            'https://img10.dgg.cn/upload/CalEB7vdQoocJzMlprJouyeEvIfMTzFrGSbVEgHz.png?x-oss-process=image/resize,m_fill,w_702,h_260,limit_0',
          color: 'rgb(25, 26, 39)',
        },
        {
          url:
            'https://img10.dgg.cn/upload/vTPENSzEmkhIkFIfo3wyAixUMVi4r59FkQ624Jeg.png?x-oss-process=image/resize,m_fill,w_702,h_260,limit_0',
          color: 'rgb(20, 67, 222)',
        },
        {
          url:
            'https://img10.dgg.cn/upload/BZGRG3THD9vz0fYcUK1yAIfXCBJjgPP3uaMlV53k.png?x-oss-process=image/resize,m_fill,w_702,h_260,limit_0',
          color: 'rgb(205, 56, 33)',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListen)
    /** 初始化头部颜色 **/
    this.headerBgc = this.swipeData[0].color
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListen)
  },
  methods: {
    /** 滚动条事件监听 */
    scrollListen() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop !== 0) {
        this.fontHeadColor = '#000'
        this.fixedHeadBgc = '#fff'
        this.searchBoxBgc = '#f5f7fa'
        this.isActiveColor = true
      } else {
        this.fontHeadColor = '#fff'
        this.fixedHeadBgc = 'transparent'
        this.searchBoxBgc = '#fff'
        this.isActiveColor = false
      }
    },
    /** 点击改变nav方法 **/
    navChange(i) {
      this.navClick = i
    },
    /** 轮播图转换触发 **/
    swipeChange(i) {
      this.headerBgc = this.swipeData[i].color
      this.current = i
    },
    /** 控制城市列表是否出现 */
    changeCityShow() {
      this.cityShow = true
    },
  },
}
</script>
<style lang="less" scoped>
#portal-head {
  width: 375px;
  height: 3.72rem;
  transition: all 0.7s;
  font-size: 0;
  &::before {
    content: '';
    display: block;
    height: 2.04rem;
  }
  .fixed-head {
    position: fixed;
    left: 50%;
    top: 0;
    box-sizing: border-box;
    width: 375px;
    height: 2.04rem;
    transform: translateX(-50%);
    z-index: 999;
    .fixed-head-top {
      position: relative;
      .port-city {
        display: flex;
        align-items: center;
        position: absolute;
        left: 0.24rem;
        top: 0.44rem;
        transform: translateY(-50%);
        font-size: 0;
        .current-city {
          font-size: 0.28rem;
          font-family: PingFang-SC-Regular, PingFang-SC;
          font-weight: 400;
          margin-left: 0.06rem;
        }
      }
      .port-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 0.88rem;
        z-index: 999;
        &-item {
          position: relative;
          font-size: 0.36rem;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          line-height: 0.36rem;
          &:not(:last-child) {
            margin-right: 0.6rem;
          }
          &.active {
            font-size: 0.38rem;
            &.orange {
              color: #f60 !important;
              font-weight: 700 !important;
              &::after {
                background-color: #f60 !important;
              }
            }
          }
          &.active::after {
            content: '';
            display: block;
            position: absolute;
            bottom: -0.2rem;
            left: 50%;
            transform: translateX(-50%);
            width: 0.32rem;
            height: 0.06rem;
            background: #fff;
            border-radius: 0.03rem;
          }
          a {
            color: inherit;
          }
        }
      }
      .port-say {
        position: absolute;
        right: 0.24rem;
        top: 0.44rem;
        width: 20px;
        height: 20px;
        transform: translateY(-50%);
      }
      .search {
        height: 44px;
      }
      .port-search {
        box-sizing: border-box;
        width: 100%;
        height: 0.68rem;
        padding: 0 0.24rem;
        margin-top: 0.16rem;
        margin-bottom: 0.2rem;
        transition: all 0.5s;
        &.active {
          max-width: 68% !important;
          margin: 0 !important;
          position: absolute;
          left: 1.52rem !important;
          top: 0.1rem;
          padding: 0 !important;
        }

        &-box {
          position: relative;
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          height: 0.68rem;
          background-color: #fff;
          border-radius: 0.34rem;
          overflow: hidden;

          .icon-search {
            width: 0.24rem;
            height: 0.24rem;
            position: absolute;
            left: 0.26rem;
            top: 50%;
            transform: translateY(-50%);
            font-weight: 700;
            img {
              width: 100%;
            }
          }
          .van-swipe-item {
            font-size: 0.28rem;
            font-weight: 400;
            color: #aaa;
            line-height: 0.68rem;
            padding-left: 35px;
          }
        }
      }
    }
  }
  .portal-hot-search {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding: 0 0.24rem;
    height: 0.34rem;
    overflow: hidden;
    color: #fff;
    > span {
      font-size: 0.24rem;
      font-weight: 700;
      line-height: 0.34rem;
    }
    .hot-search-box {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      &-item {
        display: block;
        margin-left: 0.16rem;
        list-style: none;
        box-sizing: border-box;
        padding: 0 0.16rem;
        background-color: rgba(255, 255, 255, 0.24);
        color: white;
        font-size: 0.22rem;
        font-weight: 400;
        border-radius: 0.5rem;
      }
    }
  }
  .portal-swipe {
    position: relative;
    width: 100%;
    height: 2.6rem;
    margin-top: 0.24rem;
    z-index: 2;
    &-box {
      width: 100%;
      height: 2.6rem;
      padding: 0 0.24rem;
      box-sizing: border-box;
      .my-swipe .van-swipe-item {
        width: 100%;
        height: 2.6rem;
        line-height: 2.6rem;
        text-align: center;
        img {
          width: 100%;
        }
      }
      .custom-indicator {
        display: flex;
        position: absolute;
        left: 50%;
        bottom: 18px;
        transform: translateX(-50%);
        &-item {
          display: block;
          list-style: none;
          width: 0.08rem;
          height: 0.08rem;
          border-radius: 50%;
          background-color: #ddd;
          margin-left: 5px;
          &.active {
            width: 0.32rem;
            height: 0.08rem;
            background: #fff;
            border-radius: 0.05rem;
          }
        }
      }
    }
  }
}
</style>
