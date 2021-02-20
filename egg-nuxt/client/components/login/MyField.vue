<template>
  <div class="input-field">
    <div class="left">
      <slot name="left" />
    </div>
    <input
      v-model="message"
      :type="type"
      :placeholder="placeholder"
      :minlength="min"
      :maxlength="max"
    />
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import { Icon, Toast } from '@chipspc/vant-dgg'
export default {
  components: {
    [Icon.name]: Icon,
    [Toast.name]: Toast,
  },
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: [String],
      required: true,
    },
    placeholder: {
      type: [String],
      default: '',
    },
    min: {
      type: [Number],
      default: 0,
    },
    max: {
      type: [Number],
      default: 12,
    },
    rules: {
      type: [Array],
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      message: '',
    }
  },
  computed: {},
  watch: {
    value() {
      this.message = this.value
    },
    message() {
      this.$emit('input', this.message)
    },
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.right {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
}
.left {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}
.input-field {
  position: relative;
  height: 60px;
  > input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding-left: 30px;
    border: 0;
    outline: 0;
    font-size: 14px;
    font-weight: 400;
    color: #b8b8b8;
    background-color: transparent;
    font-family: Aria;
    &::placeholder {
      font-size: 14px;
      font-weight: 400;
      color: #b8b8b8;
      font-family: Aria;
    }
  }
}
.left-icon {
  padding-right: 30px;
}
.input-field:not(:last-child) {
  border-bottom: 0.5px solid #d7d8d9;
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
