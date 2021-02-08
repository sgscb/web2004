<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">登陆</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <!-- <a href="#" class="btn btn-outline-light my-2">你好 {{ user.name }}</a> -->
        <Dropdown :title="`你好 ${user.name}`">
          <Dropdown-item>
            <a href="#" class="dropdown-item">新建文章</a>
          </Dropdown-item>
          <Dropdown-item disabled>
            <a href="#" class="dropdown-item">编辑资料</a>
          </Dropdown-item>
          <Dropdown-item>
            <a href="#" class="dropdown-item">退出登录</a>
          </Dropdown-item>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  components: { Dropdown, DropdownItem },
  name: 'ClobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>, // 强制转换构造函数,期望的类型注释参数可能有助于解决这些问题
      required: false // 在这个对象上是必须的     // PropType ↑
    }
  }
});
</script>

<style></style>
