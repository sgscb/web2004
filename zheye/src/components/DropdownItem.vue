<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style>
.dropdown-option.is-disabled * {
  color: #6c757d;
  /* 值能阻止点击、状态变化和鼠标指针变化 */
  pointer-events: none;
  background-color: transparent;
}
</style>
