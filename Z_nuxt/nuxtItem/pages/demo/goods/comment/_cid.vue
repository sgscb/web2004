<template>
  <div class="comment-detail">
    <h3>评论详情</h3>
    <!-- 默认加载comment第一个带_ -->
  </div>
</template>
<script>
export default {
  middleware({ route }) {
    console.log(route);
  }
};
</script>
