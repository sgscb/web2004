<template>
  <div class="register-list">
    <div v-for="(list, index) of 3" :key="index" class="list">
      <div class="list-count">
        <div class="list-count_item">
          <span>100万+</span>
          <div>在线咨询</div>
        </div>
        <div class="list-count_item">
          <span>100万+</span>
          <div>在线咨询</div>
        </div>
        <div class="list-count_item">
          <span>100万+</span>
          <div>在线咨询</div>
        </div>
      </div>
      <div class="list-advisory">
        <span class="price"><span>4000</span>元</span>
        <div class="advisory">
          <sp-image
            round
            width="28px"
            height="28px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <sp-image
            round
            width="28px"
            height="28px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <sp-image
            round
            width="28px"
            height="28px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon, Image } from "vant";
export default {
  name: "Introduction",
  components: {
    [Icon.name]: Icon,
    [Image.name]: Image
  },
  props: [],
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.register-list {
  .list {
    width: 670px;
    // height: 435px;
    border: 1px solid #e6e6e6;
    background: url(https://img.yzcdn.cn/vant/cat.jpeg) top center/100% auto
      no-repeat;
    margin-bottom: 25px;
    .list-count {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #f4f4f4;
      border-bottom: 1px solid #f4f4f4;
      margin: 183px 0 0 0;
      padding: 32px 82px;
      position: relative;
      .list-count_item {
        font-size: 34px;
        font-weight: bold;
        color: #222222;
        line-height: 52px;
        span {
          font-size: 34px;
          font-weight: bold;
          color: #222222;
          line-height: 52px;
        }
        div {
          font-size: 22px;
          font-weight: 400;
          color: #999999;
          line-height: 52px;
        }
      }
    }
    .list-advisory {
      display: flex;
      justify-content: space-between;
      padding: 46px 32px;
      .price {
        font-size: 24px;
        font-weight: bold;
        color: #ec5330;
        span {
          font-size: 40px;
        }
      }
      .advisory {
        width: 240px;
        height: 72px;
        background-color: #4974f5;
        background: #ebf3ff;
        border-radius: 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 28px 0 8px;
      }
    }
  }
}
</style>
