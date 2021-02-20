<template>
  <div class="my-nav">
    <img
      class="left-icon"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAwCAYAAAAPfWqeAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAj5JREFUWIW12N2LlkUYB+CfuxGxJH1a9qFpRSRBLYt/gAcigXgg6IEgBlEihYFRCB50Eh4EQQeCEKwI/gceKRiCKCgoS4hZhlaKKfYhHhS6uO7lwcsL2+tM++6+4w1zMnM/z8XMwDP3M0EeQnsU47iJCYw9DOQxHPLfONMaGcFhD8atR9IuRpIcTLK6MDbeciZHCzOBAxhugTyOYxVkP4aRQZGFOF5B9mGomzsI8gROVJBvsWBm/iDIyQqytxeZL/QkTleQPSVkPtDTOFNBvqkhc4We0fmclOLr2Z7vF1mE7yvIV/28ox/kOZytILv7XZHZEp7HDxXky36R2aAX8GMF+WIuyP9BL+KnCrJrrkgNehk/V5Cd80FK0FJcqiCfzRfphV7BLwVgGjsGQWZCy/FbBdk+KNKFXsPlCvJRC6QLnaogW1shXWiyB7mHD1oiyFCSaz2FxJ0kFxoWLUmSoSS/F6qZw0lWNZWwErcK+/QvVrfcoy52s4KtaQkFY/i7gN3Guy2hYBR/FrA7WNsSCt7BHwVsEutaQsFbuFHB1reEghW4XsE2tISCN3GtgN3FxpZQ8AauFrApbGoJBa/jSgXb3BIKXlU+TqbwXksoWIZfK9j7LaHoHPmlumIaH7aEgiW4WMG2tYSCl3Chgn3cEopOoVmqZqfxSUsoWIzzBQw+bQlF52fgXAX7HFmAVof1oiTfJXm7MLalJZQkzyY5kmS0p//kUEslyV/pXNFM9PRfb7VHve0pHMQ/OrcqS+8DO7XSyRFsegkAAAAASUVORK5CYII="
      alt=""
    />
    <div class="nav-title">互联网</div>
    <img
      class="right-icon"
      src="https://img10.dgg.cn/ptwap/dropdown-icone-more-solid.png"
      alt=""
    />
  </div>
</template>
<script>
import { Icon } from '@chipspc/vant-dgg'
export default {
  components: {
    [Icon.name]: Icon,
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    leftClick() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="less" scoped>
.my-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 375px;
  height: 44px;
  padding: 0.2rem;
  position: fixed;
  left: auto;
  top: 0;
  background-color: #1e4ed0;
  z-index: 9;
  .left-icon {
    width: 8.5px;
    height: 17.5px;
  }
  .nav-title {
    line-height: 1;
    padding: 0 1px;
    margin-left: 0.18rem;
    color: #ffffff;
    font-size: 0.36rem;
    font-family: PingFang SC;
    font-weight: 700;
  }
  .right-icon {
    height: 0.56rem;
    width: 0.56rem;
  }
}
</style>
