<template>
  <indexVideo :index-data="indexData" />
</template>

<script>
import indexVideo from "@/components/ex/VideoCarousel/Video.vue";

export default {
  name: "app",
  components: {
    indexVideo
  },
  data() {
    return {
      indexData: [
        {
          Type: "视频",
          Src: "one.mp4"
        },
        {
          Type: "图片",
          Src: "https://img.yzcdn.cn/vant/apple-1.jpg"
        },
        {
          Type: "图片",
          Src: "https://img.yzcdn.cn/vant/cat.jpeg"
        }
      ]
    };
  }
};
</script>
