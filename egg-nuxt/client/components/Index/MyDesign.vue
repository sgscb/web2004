<template>
  <div id="design">
    <div class="design-box">
      <p class="design-title">专家顾问一对一为您制定方案</p>
      <p class="design-desc">
        <span>4000名</span>专业顾问已为<span>300万+</span>的企业用户提供服务
      </p>
      <div class="server-list">
        <ul class="list-box">
          <li class="list-box-item">注册公司</li>
          <li class="list-box-item">记账</li>
          <li class="list-box-item">注销</li>
          <li class="list-box-item">商标</li>
          <li class="list-box-item">
            <nuxt-link to="/demo2">更多服务</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="input-box">
        <span class="fixed-icon">
          <img
            src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/input_icon_name.png?x-oss-process=image/resize,m_fill,w_28,h_28,limit_0"
            alt=""
          />
          <span>我需要</span>
        </span>
        <input
          class="my-input"
          type="text"
          placeholder="请输入您的需求"
          maxlength="50"
        />
      </div>
      <div class="input-box">
        <span class="fixed-icon">
          <img
            src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/input_icon_tel.png?x-oss-process=image/resize,m_fill,w_28,h_28,limit_0"
            alt=""
          />
          <span>手机号</span>
        </span>
        <input
          class="my-input"
          type="tel"
          placeholder="信息保护中，仅官方可见"
          maxlength="13"
        />
        <img
          class="right-icon"
          src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/dun_icon.png?x-oss-process=image/resize,m_fill,w_24,h_28,limit_0"
          alt=""
        />
      </div>
      <!-- 按钮 -->
      <div class="my-button">立即为我推荐</div>
      <ul class="form-icon">
        <li class="form-icon-item">
          <img
            src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/dun_icon.png?x-oss-process=image/resize,m_fill,w_20,h_24,limit_0"
            alt=""
          />
          <span>信息安全</span>
        </li>
        <li class="form-icon-item">
          <img
            src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/dun_icon.png?x-oss-process=image/resize,m_fill,w_20,h_24,limit_0"
            alt=""
          />
          <span>官方服务</span>
        </li>
        <li class="form-icon-item">
          <img
            src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/dun_icon.png?x-oss-process=image/resize,m_fill,w_20,h_24,limit_0"
            alt=""
          />
          <span>服务透明</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Button } from 'vant'
export default {
  components: {
    [Button.name]: Button,
  },
}
</script>
<style lang="less" scoped>
#design {
  width: 100%;
  padding: 0 0.24rem 0.4rem;
  font-size: 0.26rem;
  background-color: #f5f7fa;
  box-sizing: border-box;
  .design-box {
    width: 100%;
    background: #fff;
    box-shadow: 0 0.04rem 0.24rem 0 rgba(17, 17, 61, 0.06);
    border-radius: 0.12rem;
    padding: 0.48rem 0.4rem;
    box-sizing: border-box;
    .design-title {
      font-size: 0.36rem;
      font-weight: 700;
      color: #333;
      line-height: 0.38rem;
      text-align: center;
    }
    .design-desc {
      font-size: 0.24rem;
      font-weight: 400;
      color: #666;
      line-height: 0.26rem;
      margin-top: 0.24rem;
      text-align: center;
      > span {
        color: #ff5e00;
      }
    }
    .server-list {
      width: 100%;
      height: 0.44rem;
      margin-top: 0.48rem;
      margin-bottom: 0.08rem;
      overflow: hidden;
      .list-box {
        display: flex;
        list-style: none;
        height: 0.44rem;
        &-item {
          height: 0.44rem;
          line-height: 0.44rem;
          background-color: #fff4e6;
          font-size: 0.24rem;
          font-weight: 400;
          color: #f60;
          border-radius: 0.22rem;
          margin-right: 0.12rem;
          padding: 0 0.12rem;
          box-sizing: border-box;
          &::before {
            display: inline-block;
            content: '';
            width: 0.16rem;
            height: 0.16rem;
            background: url(https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/form_icon_add.png)
              no-repeat;
            background-size: 100%;
            margin-right: 0.04rem;
          }
          a {
            color: inherit;
          }
        }
      }
    }
    .input-box {
      position: relative;
      width: 100%;
      height: 0.88rem;
      line-height: 0.88rem;
      background-color: #fff;
      box-shadow: 0 0.02rem 0 0 #eee;
      margin-top: 0.24rem;
      .fixed-icon {
        display: flex;
        align-items: center;
        height: 0.88rem;
        line-height: 0.88rem;
        margin-top: 0.02rem;
        font-size: 0.28rem;
        font-weight: 400;
        color: #333;
        z-index: 99;
        > img {
          width: 0.28rem;
          height: 0.28rem;
          border: 0.01rem solid transparent;
          margin-right: 0.08rem;
          box-sizing: border-box;
        }
      }
      .my-input {
        position: absolute;
        left: 1.44rem;
        top: 0;
        height: 0.88rem;
        outline: 0;
        border: none;
        box-sizing: border-box;
        font-size: 0.28rem;
        color: #333;
        font-weight: 700;
        &::placeholder {
          color: #aaa;
          font-weight: 400;
        }
      }
      .right-icon {
        width: 0.24rem;
        position: absolute;
        right: 0.32rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .my-button {
      display: block;
      outline: none;
      border: none;
      width: 100%;
      height: 0.8rem;
      background: linear-gradient(90deg, #ff8c00, #ff5e00);
      border-radius: 0.4rem;
      margin-top: 0.32rem;
      font-size: 0.28rem;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: 700;
      color: #fff;
      text-align: center;
      line-height: 0.82rem;
    }
    .form-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.32rem;
      font-size: 0.24rem;
      font-family: PingFang-SC-Regular, PingFang-S;
      font-weight: 400;
      color: #14cc96;
      list-style: none;
      &-item {
        display: flex;
        align-items: center;
        margin-right: 0.6rem;
        &:last-child {
          margin-right: 0;
        }
        > img {
          width: 0.2rem;
          height: 0.24rem;
          margin-right: 0.08rem;
        }
      }
    }
  }
}
</style>
