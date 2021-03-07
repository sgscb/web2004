<template>
  <div class="choiceness">
    <!-- 免费体验 -->
    <div class="choiceness-item">
      <p class="title">{{ content.title || "免费体验" }}</p>
      <div class="choiceness-content">
        <div
          v-for="(contents, proKey) of content.experience.imgVal"
          :key="proKey"
          class="content"
        >
          <div class="content-img">
            <img :src="contents.img" alt="" /><i>限时免费</i>
          </div>

          <div class="content-name">{{ contents.imgNmae }}</div>
        </div>
      </div>
    </div>
    <!-- 薯片课程 -->
    <div class="choiceness-item">
      <p class="title">
        {{ content.title || "薯片课程" }}
        <span class="title-label">
          <span class="title-name">精选</span>
          <span class="title-icon">
            <my-icon
              name="list_ic_next"
              size="0.12rem"
              color="#4974f5"
            ></my-icon>
          </span>
        </span>
      </p>
      <div class="choiceness-content">
        <div
          v-for="(contents, contentKey) of content.curriculum.imgVal"
          :key="contentKey"
          class="content"
        >
          <div class="content-img">
            <img :src="contents.img" alt="" /><i>代办包过</i>
          </div>
          <div class="content-name">{{ contents.imgNmae }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Choiceness",
  components: {
    [Toast.name]: Toast
  },
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          experience: {
            title: "免费体验",
            imgVal: [
              {
                img:
                  "https://cdn.shupian.cn/sp-pt/wap/images/efrhylhffbs0000.png",
                imgNmae: "商标查询"
              },
              {
                img:
                  "https://cdn.shupian.cn/sp-pt/wap/images/8jn8qjulfvs0000.png",
                imgNmae: "版权服务"
              }
            ]
          },
          curriculum: {
            title: "薯片课程",
            imgVal: [
              {
                img:
                  "https://cdn.shupian.cn/sp-pt/wap/images/efrhylhffbs0000.png",
                imgNmae: "商标案件如..."
              },
              {
                img:
                  "https://cdn.shupian.cn/sp-pt/wap/images/8jn8qjulfvs0000.png",
                imgNmae: "高企认定政..."
              }
            ]
          }
        };
      }
    }
  }
};
</script>

<style lang="less">
.choiceness {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 0px 20px;
  .choiceness-item {
    width: 354px;
    height: 293px;
    background: #ffffff;
    border-radius: 24px 0 0 24px;
    padding: 24px 20px;
    .title {
      height: 32px;
      line-height: 32px;
      font-size: 32px;
      font-family: PingFang;
      font-weight: bold;
      color: #222222;
      margin-bottom: 25px;
    }
    // 免费体验
    .choiceness-content {
      display: flex;
      justify-content: space-between;
      .content {
        &-img {
          width: 151px;
          height: 151px;
          background: #f4f4f4;
          border-radius: 12px;
          position: relative;
          img {
            // width: 104px;
            // height: 138px;
            border-radius: 12px;
            width: 151px;
            height: 151px;
            // margin-top: 14px;
            // margin-left: 24px;
          }
          i {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 6px 8px;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 32px;
            background: #ff676a;
            border-radius: 0px 12px 0px 8px;
            font-size: 20px;
            // font-weight: 400;
            color: #ffffff;
            line-height: 32px;
            font-style: normal;
          }
        }
        .content-name {
          width: 148px;
          height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 24px;
          font-family: PingFang;
          font-weight: bold;
          color: #222222;
          line-height: 30px;
          text-align: center;
          margin: 16px 4px 0 4px;
        }
      }
    }
  }
  // 薯片课程
  .choiceness-item:last-child {
    border-radius: 0px 24px 24px 0px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      width: 100%;
      .title-label {
        width: 100px;
        align-self: center;
        background: #ffffff;
        border: 1px solid #84a3ff;
        border-radius: 50%;
        position: absolute;
        display: inline-block;
        top: 0;
        right: 0;
        background: rgba(73, 116, 245, 0.1);
        border-radius: 18px;
        font-size: 22px;
        font-weight: bold;
        color: #4974f5;
        padding: 6px 4px 5px 12px;
        // height: 32px;
        position: relative;
        .title-name {
          display: flex;
          align-items: center;
          line-height: 22px;
        }
        .title-icon {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 48px;
          height: 48px;
          background: #dce5ff;
          border-radius: 50%;
          font-size: 12px;
          display: inline-block;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(0.5);
        }
      }
    }
  }
}
</style>
