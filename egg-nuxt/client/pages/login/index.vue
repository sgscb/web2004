<template>
  <div class="login">
    <!-- 头部导航区域 -->
    <sp-nav-bar title="验证码登录" @click="onClickLeft">
      <template #left>
        <sp-icon
          name="arrow-left"
          :size="25"
          color=" rgb(37, 37, 37)"
        ></sp-icon>
      </template>
    </sp-nav-bar>
    <!-- 内容区域 -->
    <div class="login-content">
      <img
        src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/logins/logo.png?x-oss-process=image/resize,m_fill,w_264,h_168,limit_0"
        alt=""
      />
      <div class="login-form">
        <my-form>
          <div class="input-form">
            <my-field
              v-model="telphone"
              type="tel"
              :min="11"
              :max="11"
              placeholder="请输入手机号"
            >
              <template #left>
                <sp-icon
                  class-prefix="sp-iconfont"
                  name="call"
                  color="rgb(16, 187, 184)"
                  :size="20"
                />
              </template>
            </my-field>
            <my-field
              v-model="imgValidate"
              type="text"
              :min="4"
              :max="4"
              placeholder="请输入图形验证码"
            >
              <template #left>
                <sp-icon
                  name="other-pay"
                  color="rgb(16, 187, 184)"
                  :size="20"
                />
              </template>
              <template #right>
                <img
                  class="img-validate"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </template>
            </my-field>
            <my-field
              v-model="shortMessage"
              type="text"
              :min="4"
              :max="4"
              placeholder="请输入短信验证码"
            >
              <template #left>
                <sp-icon
                  class-prefix="sp-iconfont"
                  name="security"
                  color="rgb(16, 187, 184)"
                  :size="20"
                />
              </template>
              <template #right>
                <short-message />
              </template>
            </my-field>
          </div>
        </my-form>
      </div>
    </div>
  </div>
</template>

<script>
import { NavBar, Icon } from '@chipspc/vant-dgg'
import MyForm from '~/components/login/MyForm.vue'
import MyField from '~/components/login/MyField.vue'
import ShortMessage from '~/components/login/ShortMessage.vue'
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    MyForm,
    MyField,
    ShortMessage,
  },
  props: {},
  data() {
    return {
      telphone: '',
      imgValidate: '',
      shortMessage: '',
      imgVal: 'fg7q',
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    /** 手机校验规则 */
    telValidate(val) {
      return /^1[3-9]\d{9}$/.test(val)
    },
  },
}
</script>
<style lang="less" scoped>
.login {
  width: 375px;
  height: 100vh;
  font-family: PingFang SC;
  margin: 0 auto;
  background-color: #f0f2f5;
}
.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.58rem 0.32rem;
  > img {
    width: 2.64rem;
    margin-top: 0.32rem;
    margin-bottom: 0.32rem;
  }
  .login-form {
    margin-top: 0.48rem;
    width: 100%;
  }
}
.input-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  border-radius: 0.24rem;
  padding: 0 0.32rem;
  overflow: hidden;
}
.img-validate {
  width: 90px;
  height: 30px;
}
/deep/ .sp-nav-bar {
  height: 44px;
}
/deep/ .sp-nav-bar__title {
  font-size: 0.36rem;
  font-weight: 700;
}
</style>
