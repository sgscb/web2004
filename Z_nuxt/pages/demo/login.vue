<template>
  <div class="login">
    <h3>登录</h3>
  </div>
</template>
<script>
export default {
  middleware({ store, route, redirect, params, query }) {
    console.log(store);
  }
};
</script>
