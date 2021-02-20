<template>
  <ul class="nav-card-box">
    <slot />
  </ul>
</template>
<script>
export default {
  components: {},
}
</script>
<style lang="less" scoped>
.nav-card-box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  list-style: none;
}
</style>
