<template>
  <div class="ex">
    <!-- icon -->
    <div class="label">
      <span class="label-tex">精选</span>
      <span class="label-icon"> <van-icon name="arrow" /> </span>
    </div>
    <br />
    <div class="pro-icon">
      <van-icon class-prefix="spiconfont" name="nav_ic_abb" />
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    [Icon.name]: Icon
  }
};
</script>

<style lang="less">
.ex {
  width: 200px;
  height: 200px;
  margin: 0px auto;
  .label {
    width: 50px;
    display: flex;
    align-items: center;
    background: #ffffff;
    border: 0.01rem solid #84a3ff;
    border-radius: 0.16rem;
    display: inline-block;
    // height: 32px;
    background: rgba(73, 116, 245, 0.1);
    border-radius: 0.16rem;
    font-size: 0.22rem;
    font-weight: bold;
    color: #4974f5;
    padding: 0.06rem 0.04rem 0.06rem 0.12rem;
    .label-tex {
      height: 100%;
      line-height: 100%;
    }

    .label-icon {
      width: 12px;
      height: 12px;
      background: #dce5ff;
      border-radius: 50%;
      padding: 0.12rem;
      font-size: 0.12rem;
      // display: flex;
      display: inline-block;
      vertical-align: -15%;
      transform: scale(0.5);
      .van-icon {
        display: inline-block;
      }
    }
  }

  .pro-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
