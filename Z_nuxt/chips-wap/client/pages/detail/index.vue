<template>
  <div class="detail_index">
    <button>选择400电话</button>
  </div>
</template>
<script>
import selectPhone from './selectPhone'
export default {
  name: 'Index',
  components: {
    [selectPhone.name]: selectPhone,
  },
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.detail_index {
  width: 200px;
  border: 1px solid #666;
  font-size: 12px;
}
</style>
