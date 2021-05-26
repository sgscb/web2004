<template>
  <view class="content">
    <view class="uni-list">
      <view
        class="uni-list-cell"
        hover-class="uni-list-cell-hover"
        v-for="(item, index) in news"
        :key="index"
        @tap="openinfo"
        :data-newsid="item.post_id"
      >
        <view class="uni-media-list">
          <image class="uni-media-list-logo" :src="item.author_avatar"></image>
          <view class="uni-media-list-body">
            <view class="uni-media-list-text-top">{{ item.title }}</view>
            <view class="uni-media-list-text-bottom uni-ellipsis">{{
              item.created_at
            }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      news: [],
    };
  },
  onLoad() {
    uni.showLoading({
      title: "加载中......",
      mask: false,
    });
    uni.request({
      url: "https://unidemo.dcloud.net.cn/api/news",
      method: "GET",
      data: {},
      success: (res) => {
        if (res.statusCode !== 200) return;
        this.news = res.data;
        console.log(this.news);
        uni.hideLoading();
      },
      fail: () => {},
      complete: () => {},
    });
  },
  methods: {
    openinfo(e) {
      var newsid = e.currentTarget.dataset.newsid;
      console.log(newsid);
      uni.navigateTo({
        url: "/pages/info/info?newsid=" + newsid,
        success: (res) => {
          console.log(res, "成功");
        },
        fail: (err) => {
          console.log(err, "错误");
        },
        complete: () => {},
      });
    },
  },
};
</script>
<style lang="less" scoped>
::v-deep.content {
  .uni-media-list {
    .uni-media-list-body {
      height: auto;
      .uni-media-list-text-top {
        display: inline-block;
        width: 280px;
        line-height: 34rpx;
        height: 34rpx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
