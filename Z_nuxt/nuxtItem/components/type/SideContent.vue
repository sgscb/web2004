<template>
  <div class="side-content">
    <slot />
    <div
      class="placeholder"
      :style="{ height: `calc(100% - ${lastElHeight})` }"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Number],
      required: true,
    },
    number: {
      type: [Number],
      required: true,
    },
  },
  data() {
    return {
      myValue: this.value,
      /** 各个子元素到父元素顶部的距离（数组） */
      itemOffset: [],
      canListen: true,
      timer: null,
      lastElHeight: '0px',
    }
  },
  watch: {
    value(newValue) {
      this.myValue = newValue
    },
    /** 监听myValue变化抛出 */
    myValue(newValue) {
      this.$emit('input', newValue)
    },
    /** 监听点击变化，使滚动条移动至对应位置 */
    number() {
      clearTimeout(this.timer)
      this.canListen = false
      const dom = document.querySelector('.side-content')
      dom.scrollTop = this.itemOffset[this.value]
      const doms = document.querySelectorAll('.side-content-item')
      doms[this.value].scrollIntoView(true, {
        behavior: 'auto',
        block: 'start',
        inline: 'nearset',
      })
      this.timer = setTimeout(() => {
        this.canListen = true
      }, 600)
    },
  },
  mounted() {
    this.getDomOffsetY()
    this.changeMyValue()
    this.getLastHeight()
  },
  methods: {
    /** 获取各个元素块到父元素顶部的距离 */
    getDomOffsetY() {
      const arr = []
      const dom = document.querySelectorAll('.side-content-item')
      dom.forEach((item, i) => {
        const distance = item.offsetTop - dom[0].offsetTop
        arr.push(distance)
      })
      this.itemOffset = arr
    },
    /** 获取最后一个元素块高度 */
    getLastHeight() {
      const dom = document.querySelectorAll('.side-content-item')
      this.lastElHeight = dom[dom.length - 1].offsetHeight - 1 + 'px'
    },
    /** 监听函数 */
    listen() {
      if (this.canListen) {
        const dom = document.querySelector('.side-content')
        this.itemOffset.forEach((item, i) => {
          if (dom.scrollTop >= item) {
            this.myValue = i
          }
        })
      }
    },
    /** 监听滚动后判断位置改变myValue值 */
    changeMyValue() {
      const dom = document.querySelector('.side-content')
      dom.addEventListener('scroll', this.listen)
    },
  },
}
</script>
<style lang="less" scoped>
.side-content {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>
