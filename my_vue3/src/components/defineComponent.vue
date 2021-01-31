<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @defineComponent 获取对应的类型对Ts更加友好-提示
export default defineComponent({
  name: "defineComponent",
  props: {
    msg: {
      required: true,
      type: String,
    },
  },
  setup(props, context) {
    props.msg;
    context.emit;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
