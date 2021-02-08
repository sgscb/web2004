<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue';
import useClickOutside from '../hooks/useClickOutside';
export default defineComponent({
  name: 'Dropdow',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false);
    const dropdownRef = ref<null | HTMLElement>(null);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    // const handler = (e: MouseEvent) => {
    //   if (dropdownRef.value) {
    //     if (
    //       !dropdownRef.value.contains(e.target as HTMLElement) &&
    //       isOpen.value // e.target是html daom节点 要断言成HTML
    //     ) {
    //       isOpen.value = false;
    //     }
    //   }
    // };
    // onMounted(() => {
    //   document.addEventListener('click', handler);
    // });
    // onUnmounted(() => {
    //   document.removeEventListener('click', handler);
    // });
    const isuseClickOutside = useClickOutside(dropdownRef);

    watch(isuseClickOutside, () => {
      if (isOpen.value && isuseClickOutside.value) {
        isOpen.value = false;
      }
    });
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    };
  }
});
</script>

<style></style>
