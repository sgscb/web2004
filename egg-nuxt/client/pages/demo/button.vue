<template>
  <div class="demo">
    <sp-button type="primary" @click="sendMessage">主要按钮</sp-button>
  </div>
</template>
<script>
import { Button, Toast } from '@chipspc/vant-dgg'
import Demo from '~/api/demo/index.js'
export default {
  name: 'Demo',
  components: {
    [Button.name]: Button,
    [Toast.name]: Toast,
  },
  async asyncData({ $axios }) {
    const res = await Demo.ceshiData({ $axios }, { id: 1 })
    console.log(res)
  },
  methods: {
    sendMessage() {
      Toast('11111111')
    },
  },
}
</script>
<style scoped>
.demo {
  font-size: 0;
}
</style>
