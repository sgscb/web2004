<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @focus="focSearch"
      />
    </form>
    <!-- 搜索弹框 -->
    <div class="popup">
      <van-popup
        ref="popupShut"
        v-model="popupShow"
        position="right"
        :style="{ height: '100%', width: '100%' }"
      >
        <div class="search">
          <van-search
            ref="searchVal"
            v-model="search.keywords"
            v-myFocus
            border
            special-label
            placeholder="请输入业务或规划师姓名"
            @focus="searchVal()"
            @search="enterSearch"
          >
            <template #left-icon>
              <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
            </template>
          </van-search>
        </div>
        <button @click="onPopupShow">返回</button>
      </van-popup>
    </div>
  </div>
</template>
<script>
import { Search, Toast, Popup, Icon } from "vant";
export default {
  component: {
    [Search.name]: Search,
    [Toast.name]: Toast,
    [Icon.name]: Icon
  },
  directives: {
    myFocus: {
      // 指令的定义
      inserted(el) {
        let inputDom = el;
        if (el.tagName !== "INPUT") {
          inputDom = el.querySelector("input");
        }
        inputDom && inputDom.focus();
        console.log(el.querySelector("input").tagName === "INPUT");
      }
    }
  },
  data() {
    return {
      value: "",
      search: { keywords: "", scoreSort: 0 },
      popupShow: false
    };
  },
  created() {},
  methods: {
    onPopupShow() {
      this.popupShow = false;
    },
    onClickPopupLeft() {
      var val = this.$refs.popupShut.$el;
      this.$nextTick(() => {
        val.querySelector("input").focus();
      }, 1000);
    },
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    focSearch() {
      this.popupShow = true;
      // this.onClickPopupLeft();
    },
    enterSearch() {
      // 确认发送请求
      if (this.search.keywords) {
        console.log(this.search.keywords);
        this.popupShow = false;
        Toast(`√  共找到43471个规划师`);
      }
    },
    searchVal() {
      console.log(123);
    }
  },
  watch: {
    popupShow: {
      handler(newVal, oldVal) {
        console.log(newVal, 123);
        if (newVal) {
          // this.onClickPopupLeft();
        }
      }
    }
  },
  updated() {
    this.onClickPopupLeft();
  }
};
</script>
