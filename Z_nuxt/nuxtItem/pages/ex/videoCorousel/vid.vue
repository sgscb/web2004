<!--
 * @Author: lingxie
 * @Date: 2020-05-29 18:14:50
 * @Descripttion: 
-->
<template>
  <!-- 介绍轮播 -->
  <div class="lunbo-wrap" v-if="banner_list.length > 1">
    <swipe
      class="lunbo-box"
      ref="banner"
      :autoplay="3000"
      :options="swiperOption"
    >
      <swipe-item v-for="(i, idx) in banner_list" :key="'banner' + idx">
        <img
          @click.stop="handlePlayVideo(i.is_media, idx, i.jumpData)"
          :class="{ hidden: curLunboIdx == idx }"
          :id="'poster_' + idx"
          :src="i.ad_code"
          alt
        />
        <div class="video-box" :id="'video-box_' + idx" v-if="+i.is_media == 1">
          <video
            :id="'video_' + idx"
            preload="preload"
            playsinline="true"
            webkit-playsinline="true"
            x5-playsinline="true"
            x-webkit-airplay="true"
            x5-video-player-fullscreen="true"
            x5-video-orientation="portraint"
            controls
            loop="loop"
          >
            <source :src="i.jumpData.value" type="video/mp4" />
            <source :src="i.jumpData.value" type="video/ogg" />
            暂不支持视频播放，请升级浏览器
          </video>
        </div>
      </swipe-item>
      <div
        class="swiper-pagination"
        slot="pagination"
        v-if="banner_list.length > 1"
      ></div>
    </swipe>
  </div>
</template>
<script>
// import "swiper/css/swiper.css";
import { Swipe, SwipeItem } from "vant";
export default {
  components: {
    Swipe,
    SwipeItem
  },
  data() {
    return {
      banner_list: [
        {
          ad_id: "289",
          ad_name: "科尚X7EVbanner",
          type: "99",
          ad_link: "",
          ad_code:
            "https://img.oushangstyle.com/images/afficheimg/2020/04/2865ea55819124b6.jpg",
          position_id: "21",
          ad_name_son: "",
          is_media: "1",
          jumpData: {
            type: "99",
            value:
              "https://vdept.bdstatic.com/59434d484e7368506a68785159323773/70727a4975483532/8ce0428afd5be136aea69a2225d501e54ce91ed5d8c2b774848f3aeec75f5988ceca77c9e970b0b86036140c7da758373e9efed4f67fa442cf2581ddf36d6ebc.mp4?auth_key=1590756522-0-0-5968076caacc5d27e3a99bd82d081d74"
          },
          location_address: ""
        },
        {
          ad_id: "314",
          ad_name: "科尚X7EVbanner",
          type: "99",
          ad_link: "",
          ad_code:
            "https://img.oushangstyle.com/images/afficheimg/2020/04/2745ea5c0e38224f.jpg",
          position_id: "21",
          ad_name_son: "",
          is_media: "0",
          jumpData: {
            type: "99",
            value: "http://www.baidu.com"
          },
          location_address: ""
        },
        {
          ad_id: "314",
          ad_name: "科尚X7EVbanner",
          type: "99",
          ad_link: "",
          ad_code:
            "https://img.oushangstyle.com/images/afficheimg/2020/04/2745ea5c0e38224f.jpg",
          position_id: "21",
          ad_name_son: "",
          is_media: "1",
          jumpData: {
            type: "99",
            value:
              "https://vdept.bdstatic.com/5a4d36417a534855314361476b456133/746e6e724e597170/648c257b62e6b57022f197cb954295b7fb4e4d875e647e48426bf6f6d24ce695748ad152ebeca43ac68a3f7dda04646d.mp4?auth_key=1590755035-0-0-8c80258bebdd910ca94e4c1eaa479f8f"
          },
          location_address: ""
        }
      ],
      curLunboIdx: -1, //当前轮播索引
      swiperOption: {
        //轮播选项配置
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: false, //循环
        autoplay: 2000, //每张播放时长2秒，自动播放
        speed: 1500, //滑动速度
        on: {
          // 轮播切换后，上一个swiper-slie有视频，则暂停
          slideNextTransitionStart: function() {
            let index = this.activeIndex;
            console.log("当前轮播", index);
            let box = this.$wrapperEl[0];
            console.log(box);
            let slide = box.getElementsByClassName("swiper-slide")[index - 1];
            // console.log('当前滑块',slide);
            if (slide) {
              var child = slide.children;
              // console.log(child);
            }
            // console.log('孩子',child);
            // 判断有无视频
            if (child.length == 2) {
              let video = child[1].children[0];
              // console.log(video);
              video.pause();
            }
          },
          slidePrevTransitionStart: function() {
            let index = this.activeIndex;
            // console.log('当前轮播',index);
            let box = this.$wrapperEl[0];
            // console.log(box);
            let slide = box.getElementsByClassName("swiper-slide")[index + 1];
            // console.log('当前滑块',slide);
            if (slide) {
              var child = slide.children;
              // console.log(child);
            }
            // console.log('孩子',child);
            // 判断有无视频
            if (child.length == 2) {
              let video = child[1].children[0];
              // console.log(video);
              video.pause();
            }
          }
        }
      }
    };
  },
  beforeRouteLeave(to, from, next) {
    this.handlePauseVideo();
    next();
  },
  methods: {
    // 视频播放
    handlePlayVideo(is_media, idx, jumpData) {
      // 若是视handlePlayVideo频，且视频地址存在，点击播放
      if (is_media == 1 && jumpData.value) {
        let c_video_box = document.getElementById("video-box_" + idx);
        let c_video = document.getElementById("video_" + idx);
        // console.log('当前视频',c_video);
        c_video_box.style.zIndex = 5;
        this.curLunboIdx = idx;
        if (c_video) {
          c_video.play();
        }
      }
      //否则是图片，存在jumpData就跳转
      if (is_media == 0 && jumpData) {
        this.toJump(jumpData);
      }
    },
    // 视频暂停
    handlePauseVideo() {
      let vList = document.querySelectorAll(".video-box video");
      for (var i = 0; i < vList.length; i++) {
        vList[i].pause();
      }
    },
    // 图片跳转
    toJump(data) {
      if (data.value) {
        window.location.href = data.value;
      }
    }
  }
};
</script>
<style lang="less" scoped>
// 轮播
.lunbo-wrap {
  width: 100%;
  height: 200px;
  position: relative;
  padding-bottom: 100%;
  .lunbo-box {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      position: relative;
      z-index: 4;
      &.hidden {
        display: none;
      }
    }
    .video-box {
      position: absolute;
      width: 100%;
      height: 100%;
      // top: 50%;
      // transform: translateY(-50%);
      z-index: 3;
      > video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  /deep/ .swiper-pagination {
    .swiper-pagination-bullet-active {
      background: #ffffff;
    }
  }
}
</style>
