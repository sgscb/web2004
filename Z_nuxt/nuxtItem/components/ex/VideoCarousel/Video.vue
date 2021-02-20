<template>
  <div class="wrpaBox">
    <img v-if="homeDataList.Type === '图片'" :src="homeDataList.Src" alt />
    <video
      id="videoTime"
      v-if="homeDataList.Type === '视频'"
      autoplay
      muted
      @ended="goOnClick"
      controls
      :src="'./Data/' + homeDataList.Src"
    />
  </div>
</template>

<script>
export default {
  props: {
    indexData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      homeDataList: {
        Type: null,
        Src: null
      },
      nowIndex: 0
    };
  },
  created() {
    this.getData();
  },
  watch: {
    indexData: {
      handler(newValue) {
        this.indexData = newValue;
        this.getData();
      }
    }
  },
  methods: {
    getData() {
      this.homeDataList = this.indexData[0];
      if (this.homeDataList.Type === "视频") {
        setTimeout(() => {
          this.starPlay();
        }, 3000);
      }
    },
    starPlay() {
      this.nowIndex++;
      if (this.nowIndex > this.indexData.length - 1) {
        this.nowIndex = 0;
        this.homeDataList = this.indexData[this.nowIndex];
        if (this.homeDataList.Type === "视频") {
          setTimeout(() => {
            this.starPlay();
          }, 3000);
        }
      } else {
        this.homeDataList = this.indexData[this.nowIndex];
        if (this.homeDataList.Type === "图片") {
          setTimeout(() => {
            this.starPlay();
          }, 3000);
        }
      }
    },
    goOnClick() {
      this.starPlay();
    }
  }
};
</script>
<style scoped>
.wrpaBox img {
  width: 300px;
  height: 200px;
}
</style>
