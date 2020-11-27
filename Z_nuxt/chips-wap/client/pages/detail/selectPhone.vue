<template>
  <div class="select_phone">
    <sp-cell is-link @click="showPopup">展示弹出层</sp-cell>
    <sp-popup v-model="show">内容</sp-popup>
  </div>
</template>
<script>
import { Popup } from '@chipspc/vant-dgg'
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showPopu() {
      this.show = true
    },
  },
}
</script>
