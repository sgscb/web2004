<template>
  <div>
    <Search />
    <div v-for="(item, index) of 120" :key="index">{{ index }}</div>
  </div>
</template>

<script>
import Search from '@/components/common/Search.vue'
export default {
  components: {
    Search,
  },
}
</script>

<style></style>
