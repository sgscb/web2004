<template>
  <img :src="result && result.message" />
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  async setup() {
    // https://dog.ceo/api/breeds/image/random
    const rawData = await axios.get("https://dog.ceo/api/breeds/image");
    console.log(rawData.data.message, 132);
    return {
      result: rawData.data,
    };
  },
});
</script>

<style></style>
