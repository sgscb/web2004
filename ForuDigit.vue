<template>
  <div class="foru-digit">
    <!-- <sp-work-tab-filter :value="0" @change="handlerItemChange">
      <sp-work-tab-filter-item class="filter-item"
        >热门(4)</sp-work-tab-filter-item
      >
      <sp-work-tab-filter-item>销量</sp-work-tab-filter-item>
      <sp-work-tab-filter-item>适应场景</sp-work-tab-filter-item>
      <sp-work-tab-filter-item>适应场景</sp-work-tab-filter-item>
      <sp-work-tab-filter-item v-for="(elem, i) of child" :key="i"
        >适应场景</sp-work-tab-filter-item
      >
    </sp-work-tab-filter> -->
    <ul class="item-list" @click="itemChange">
      <li v-for="(elem, i) of child" :key="i">
        {{ elem }}
      </li>
    </ul>
  </div>
</template>
<script>
import {
  Toast,
  Icon,
  WorkTabFilter,
  WorkTabFilterItem,
} from '@chipspc/vant-dgg'
export default {
  name: 'BeforFoure',
  components: {
    [WorkTabFilter.name]: WorkTabFilter,
    [WorkTabFilterItem.name]: WorkTabFilterItem,
  },
  props: {
    child: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    itemChange(e) {
      if (e.target.nodeName === 'LI' && e.target.dataset.n === '1') {
        console.log(111)
      } else {
        e.target.dataset.n = '1'
        console.log(222)
      }
    },
  },
}
</script>
<style lang="less" scoped>
.foru-digit {
  font-size: 24px;
  color: #222222;
  .item-list {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 250px;
      background: #f0f4ff;
      width: 149px;
      height: 64px;
      line-height: 64px;
      margin: 24px 12.5px;
      text-align: center;
    }
  }
  // 选中的样式
}
</style>
