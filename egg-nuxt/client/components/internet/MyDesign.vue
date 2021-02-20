<template>
  <div class="design">
    <div class="design-box">
      <div class="design-title">互联网专家顾问一对一为你定制方案</div>
      <div class="design-num">
        <span>累计服务</span><span class="num">1639957</span><span>名客户</span>
      </div>
      <ul class="design-tags">
        <li v-for="(item, i) of designTags" :key="i">{{ item }}</li>
      </ul>
      <div class="form-input">
        <div class="input-icon">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAACw0lEQVRYhe2YW4hNURjHf2dcwiEZPFCUeRNmjFvGJUODMU/jlgcvEifkhUd58+BJSihnPCGa5IWSO/PkPiPxoMQbpQwTM+TeV/9d+5zZa5999tn78OBfu7V2+1vn+/Wt9a31rZMByOVyk4EOoBkYRfoaAO4A24E3fm/5fJ4a9Q2orUpAyE+b/A6SB7VMbR2QqcJTJ3/NYVBZta9Ti02hPD+BM1PjGPRX9R8qqsKg7gK/E3ruJwWVpDLl/NbQkG9NVQIepDCotHUPGPKvQTlnotrZNxd4AJwHxriMqhmpOcB1YBwwH5gErAE+FRsmuSWEpb0B3RDQS1UJi4HLQRFLcvpcad/oi9BzwbQLbInARkeFaiqzWljgALII1QJfgVbgnSDXusDSXOhehGr1PgI4AgzX+zWBfQGWCiybJtRsAY0HngG7gZ+COFcE1u4D60gLyg/UrULuGLBFYOuAsz6wp8Bb9aemAdUgoAnK3hXAe3074wNbL7ApwC1Voma3qxSUa0twpX6DFrUBdQGrgL4iGwPb6gN7AUwXUIuiFitSQalf74vQVV0KPjvGnwL2qj8S6AVWAk88gySqhHpFaCJwEdgIfAuxt7W2Tf1eRajHb1DpmprlA+oENpQAGgtc0TgvQj3FRpVAzQRuCsimZDPwPcQ+q71oHvBBQN1BhnGhZihrDOiEL6tcsqvUJWBRKaC4UAZ0W0CHgZ3KSpdsP7oALAc+Cuixsjswk+OULp0COgjsK2E7TPatRUCmha5BcSNFBCArdU/rGOkT0KMoDtI6+2wvOwlsElBLVKC4UD8iAB3X4i8rQpVA9Zf4fgjYISA7ah6W68CD8hxNK5+xQAeAPQJarUtCkDw/A2FQXWpfRajBf6kNstkvIMs2s7dpC7IzPyb7N88JldNuG0gueQfx0ZCd25xZhOyiaXLZmR/zZ34LBfwBPHrIK+FPguQAAAAASUVORK5CYII="
            alt=""
          />
        </div>
        <div
          class="input-close"
          :style="{ display: needShow ? 'block' : 'none' }"
          @click="needDelete"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACqklEQVRYhcWYu2/TUBSHv7gMUQVIidIRqpJEDY9kqypaYEIUBlaQYK3KQOF/4TW0A90YWBlQBRPPdOhWHpGSRsDWJhmABBYUdNC5kWXq+Dp2kt+Swef87hfb99xznCiXy4TUDLAEnANOAtPAEbX4AXwBPgFvgE2gHsbeFmgCuAasAmclz9K/C7wHHgJPgT9BCY6F6UVgB3gCLISAQWMXNHdHvQYGSgJrwAugEALCTwX1WlPvUEBTwCtgJQYQr1bUe8oWSAJfA3NDgDGa0zX+g/ICTQLPgNkhwhjN6lqT/YDuAfMjgDGa1zUPBJIdsDxCGKNl9+5zXL/3xwBj9EBrXQ/oulZdX5VKJbLZLImEfRmS2Hw+T7FYDAotaOHtAd0Oyuh0OmQyGXK5nBWUgUmn07TbbRv+VQM0o9W0r2q1Gq1W698CQVAGJpVK0Ww2qdetjjM5kk4I0GWb46Db7VKtVgOhvDDyRyTXQmK2JECLNtE2UBFgjBYF6HSYDD+oGGBEpw4Bx8JmGSiBcUNFhBFNO67maiAoc6digBEdtumH+sr7DkWVo23nQCDud8a2JATopwB9iwojj8mmJFjoqwB9jAoj74xtnQrQB0eng0gwRjFAvXV0VAncFrZ1JgKUmG0K0C7wLihajG23thdKugQLybi0a7b9o6D4ZDJJo9GwrjMGSv6A5FpIZrfeoDihc1Mc484g+gyckUHS3CGZKO+MCUZ010y17kr9EtgYA8xjHSDxAqFd29YIYba8T8YL1AGuApURwFR0rU4/INE+cAHYHiLMtq6x773gd9rvAeeB9SHArOu3pb2DLvZrP34Bt4BLMT3CinqJ52+/IJt+SHaAtLk3tJqG7b4k56Z69HaTnwb9pHdFb7sU0uPAUb32XVoILXRyaD8P9UkP+At3ATbSk2vRrwAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <input
          v-model="need"
          type="text"
          placeholder="请输入你的需求，如IT软件"
        />
      </div>
      <div class="form-input">
        <div class="input-icon">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABOUlEQVRYhe2YQUrDQBSGv0qXWrK0cS3eQSoodOWuZyjkELoXzxD0Et10010UeoMeoVtB9y1TXmQS4rwQ8oKL+SBM6Tzyf7ymkHkjhCzL3Idr4BWYA5Nyz4hvYAM8A7s8z08pYy/rBtgCibFIyQWwAB6AWyflvj/zCl5EZg2kgOue5ZVKViLZ1IXmsi6B/QAd2kuWn10RmniFQ1FmnTcJNVEAh56vIhSoCc0MOhW85zi06TFqWadx0Aq0Dg1OFNKIQhpRSCMKaUQhjSikEYU0/p1Q2xc09cWqL7QOfRhkfoY2tQ7d9euiEx9qja5Cbc5rwfPXX1h2qNPRqe3fvo7Zw+536EfWqVVYA5e17IrQRtY3r9CSK+C9ll35yZ6Ae+Bx4AnIl2Sf8DvkJlhukrWScZs1LsNl/U7PAI536EMWG2dAXQAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <div
          class="input-close"
          :style="{ display: telShow ? 'block' : 'none' }"
          @click="telDelete"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACqklEQVRYhcWYu2/TUBSHv7gMUQVIidIRqpJEDY9kqypaYEIUBlaQYK3KQOF/4TW0A90YWBlQBRPPdOhWHpGSRsDWJhmABBYUdNC5kWXq+Dp2kt+Swef87hfb99xznCiXy4TUDLAEnANOAtPAEbX4AXwBPgFvgE2gHsbeFmgCuAasAmclz9K/C7wHHgJPgT9BCY6F6UVgB3gCLISAQWMXNHdHvQYGSgJrwAugEALCTwX1WlPvUEBTwCtgJQYQr1bUe8oWSAJfA3NDgDGa0zX+g/ICTQLPgNkhwhjN6lqT/YDuAfMjgDGa1zUPBJIdsDxCGKNl9+5zXL/3xwBj9EBrXQ/oulZdX5VKJbLZLImEfRmS2Hw+T7FYDAotaOHtAd0Oyuh0OmQyGXK5nBWUgUmn07TbbRv+VQM0o9W0r2q1Gq1W698CQVAGJpVK0Ww2qdetjjM5kk4I0GWb46Db7VKtVgOhvDDyRyTXQmK2JECLNtE2UBFgjBYF6HSYDD+oGGBEpw4Bx8JmGSiBcUNFhBFNO67maiAoc6digBEdtumH+sr7DkWVo23nQCDud8a2JATopwB9iwojj8mmJFjoqwB9jAoj74xtnQrQB0eng0gwRjFAvXV0VAncFrZ1JgKUmG0K0C7wLihajG23thdKugQLybi0a7b9o6D4ZDJJo9GwrjMGSv6A5FpIZrfeoDihc1Mc484g+gyckUHS3CGZKO+MCUZ010y17kr9EtgYA8xjHSDxAqFd29YIYba8T8YL1AGuApURwFR0rU4/INE+cAHYHiLMtq6x773gd9rvAeeB9SHArOu3pb2DLvZrP34Bt4BLMT3CinqJ52+/IJt+SHaAtLk3tJqG7b4k56Z69HaTnwb9pHdFb7sU0uPAUb32XVoILXRyaD8P9UkP+At3ATbSk2vRrwAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <input v-model="tel" type="tel" placeholder="请输入手机号码" />
      </div>
      <div class="safu">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABu0lEQVQ4ja3VS6hPURTH8Q/dXI88YszM2JDyGIqUVzKgSGRgoKSYyEThSmJyB0quwTXwysBNXTOvgUdKyeQaeBSF8og8BrRq/bU7zv8c97q/Ov3Pf6+1v2ef31l77QlCQ/u1aDLOYCq24lNj+qo+E1uAU7ADTzEHPzGCvZjdNLEOPB2rc4VvsA17sAIbsQFL8ByXsSkfWgvuRR9u4x0O4iUWYjGuFnNuYh3m4w524jXu4RhmRFJP8cq7sRm38LbN9HybE3nNxFJcRH98g54i8Tuu/AOwTh9xLRldPR4X/Q84/H+CWXXBsYIDOpwf8sN4gTvQ89jVLWm04Cr011jAN7L8Rg1V1HGdBnA2x0dGAy3B37LIp+FLjg3m70D2iHMt0N5sB+8VVgT4PtZWkgeLrd620jV4jM8qHsc+P5wrL3UAy1ugsdIjON4ZKMGXcDf3+6QGSFWRewGPCvv+qort6ftwXSusUfTkofR3Sxmugr9m340qeIhFDdCIPcArrMy5XcGhH3lqHMJ1nKr4HvcnM3Y0D4I/Xa0J3FGcIAswF8+wL6+4n5ex090mN22Q0Ausx7I8VULxP5pPd+E3m/Vh4I5oAT4AAAAASUVORK5CYII="
          alt=""
        />
        <span>信息保护中，请放心填写</span>
      </div>
      <button class="form-btn" @click="submit">立即提交</button>
    </div>
    <center-popup v-model="successShow" />
  </div>
</template>

<script>
import { Toast, Icon } from '@chipspc/vant-dgg'
import CenterPopup from '~/components/internet/common/CenterPopup.vue'
export default {
  components: {
    [Toast.name]: Toast,
    [Icon.name]: Icon,
    CenterPopup,
  },
  props: {},
  data() {
    return {
      designTags: ['+ IT软件', '+ 品牌设计', '+ 营销策划', '+ 其他服务'],
      needShow: false,
      telShow: false,
      successShow: false,
      need: '',
      tel: '',
      field: {
        type: 'entrust',
        title: '您的查询申请我们已经收到',
        description: '您的专属顾问将尽快联系您，请保持电话畅通！',
        imgSrc: 'https://hlwm.dgg.cn/_nuxt/img/02e2a6b.png',
      },
    }
  },
  computed: {},
  watch: {
    need() {
      if (this.need) this.needShow = true
    },
    tel() {
      if (this.tel) this.telShow = true
    },
    successShow() {
      if (!this.successShow) {
        this.need = ''
        this.tel = ''
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    needDelete() {
      this.need = ''
    },
    telDelete() {
      this.tel = ''
    },
    submit() {
      const telRule = /^1[3-9]\d{9}$/
      if (telRule.test(this.tel)) {
        this.successShow = true
      } else {
        this.$toast.fail({
          message: '请输入正确手机号',
          iconPrefix: 'sp-iconfont',
          icon: 'popup_ic_failc1',
        })
      }
    },
  },
}
</script>
<style lang="less" scoped>
.design {
  width: 100%;
  padding: 0.44rem 0.24rem 0;
  margin-bottom: 0.48rem;
}
.design-box {
  padding: 0.64rem 0.57rem;
  width: 100%;
  background: url('https://hlwm.dgg.cn/_nuxt/img/685ff87.png') no-repeat 50%;
  box-shadow: 0 0 0.2rem 0 hsla(0, 0%, 85.5%, 0.7);
  background-size: 100% 100%;
  border-radius: 0.08rem;
  .design-title {
    font-size: 0.36rem;
    color: #333;
    font-weight: 700;
    width: 100%;
    height: 0.36rem;
    text-align: center;
    margin-bottom: 0.16rem;
  }
  .design-num {
    color: #999;
    font-size: 0.24rem;
    margin-bottom: 0.33rem;
    text-align: center;
    .num {
      color: #ff583d;
      letter-spacing: 0.0267rem;
      line-height: 0.24rem;
    }
  }
  .design-tags {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.35rem;
    list-style: none;
    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 0.5rem;
      background: #eff8fe;
      border-radius: 0.08rem;
      padding: 0.1rem;
      font-size: 0.24rem;
      color: #488ee9;
      font-family: PingFang SC, Helvetica, STHeiti STXihei, Microsoft YaHei,
        Tohoma, Arial, sans-serif;
    }
  }
  .form-input {
    display: flex;
    position: relative;
    width: 100%;
    height: 0.8rem;
    background: #f4f4f4;
    line-height: 0.8rem;
    font-size: 0.26rem;
    margin-bottom: 0.2rem;
    .input-icon {
      display: flex;
      width: 1.2rem;
      justify-content: center;
      align-items: center;
      > img {
        max-height: 0.36rem;
      }
    }
    > input {
      display: flex;
      align-items: center;
      border: none;
      background-color: #f4f4f4;
      flex: 1;
      color: #999;
      height: 0.8rem;
      font-size: 0.26rem;
    }
    .input-close {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0.24rem;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 0.36rem;
      height: 0.36rem;
      z-index: 3;
      font-size: 0;
      > img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .safu {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.22rem;
    color: #00b577;
    margin-bottom: 0.3rem;
    > img {
      width: 0.25rem;
      height: 0.23rem;
      margin-right: 0.05rem;
    }
  }
  .form-btn {
    display: block;
    width: 100%;
    height: 0.8rem;
    background: linear-gradient(90deg, #3cb0ff, #1472ed);
    box-shadow: 0 0.1rem 0.2rem 0 rgba(50, 124, 221, 0.4);
    border-radius: 0.4rem;
    color: #fff;
    font-size: 0.32rem;
    text-align: center;
    line-height: 0.8rem;
    border: none;
    outline: none;
  }
}
/deep/.sp-toast {
  flex-direction: row !important;
  width: auto;
  min-width: 0.8rem;
  max-width: 80%;
}
</style>
<style lang="less">
.sp-toast {
  display: flex;
  flex-direction: row !important;
  flex-wrap: no-wrap !important;
  align-items: center;
  max-width: 100%;
  min-width: 0.8rem;
  min-height: 0 !important;
  width: auto !important;
  padding: 0.2rem 0.3rem !important;
  border-radius: 0.04rem;
  font-size: 0.28rem;
  text-align: left;
  line-height: 1;
  color: #fff;
  background-color: rgba(65, 72, 93, 0.77);
  box-sizing: border-box;
  overflow: hidden;
}
.sp-toast__icon {
  font-size: 0.42rem;
}
.sp-toast__text {
  margin-top: 0 !important;
  margin-left: 0.08rem !important;
}
</style>
