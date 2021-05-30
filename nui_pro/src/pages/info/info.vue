<template>
  <view class="content">
    <view class="btn"><button @click="back" type="primary">返回</button></view>
    <view class="title">{{ title }}</view>
    <view class="content-art">
      <rich-text class="richText" :nodes="strings"></rich-text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      strings: "",
    };
  },
  onLoad: function(e) {
    console.log(e, "详情页");
    uni.request({
      url: "https://unidemo.dcloud.net.cn/api/news/36kr/" + e.newsid,
      method: "GET",
      data: {},
      success: (res) => {
        this.title = res.data.title;
        this.strings = res.data.content;
      },
      fail: () => {},
      complete: () => {},
    });
  },
  methods: {
    back() {
      uni.navigateBack();
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  padding: 10upx 2%;
  width: 96%;
  flex-wrap: wrap;
  .title {
    line-height: 2em;
    font-weight: 700;
    font-size: 38upx;
  }
  .content-art {
    line-height: 2em;
  }
}
</style>
