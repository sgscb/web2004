<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
    <h1>{{ person.name }}</h1>
    <h1>{{ greetings }}</h1>

    <button @click="increase">赞 + 1</button><br />
    <button @click="updateGreeting">watch</button>
    <p>
      <span>x:{{ x }}-y:{{ y }}</span>
    </p>

    <!-- 请求照片 -->
    <h1 v-if="loading">loading!...</h1>
    <Modal />
    <img v-if="loadedDog" :src="resultDog.message" alt="" />
    <img v-if="loaded" :src="result[0].url" alt="" />
    <defineComponent msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  reactive,
  toRefs,
  watch,
  onMounted,
  onUpdated,
  onRenderTriggered,
} from "vue";
// @defineComponent
import defineComponent from "./components/defineComponent.vue";
import Modal from "./components/Modal.vue";

import useMounsePosition from "./hooks/useMousePosition";
import useURLLoader from "./hooks/useURLLoader";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string };
}
interface DogResult {
  message: string;
  status: string;
}
interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
export default {
  name: "App",
  components: {
    defineComponent,
    Modal,
  },
  setup() {
    //

    // @模块化难度上升 使用请求的照片
    // "https://dog.ceo/api/breeds/image/random"
    const { result, loading, loaded } = useURLLoader<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    const {
      result: resultDog,
      loading: loadingDog,
      loaded: loadedDog,
    } = useURLLoader<DogResult>("https://dog.ceo/api/breeds/image/random"); // ?--DogResult[]

    watch(resultDog, () => {
      if (resultDog.value) {
        console.log("value", resultDog.value.message);
      }
    });

    // @鼠标追踪
    const { x, y } = useMounsePosition(); // **替换reactive
    // onMounted(() => {
    //   document.addEventListener("click", updateMouse);
    // });
    // onUnmounted(() => {
    //   document.removeEventListener("click", updateMouse);
    // });

    // @watch

    // @生命周期 watch
    // onMounted(() => {
    //   console.log("mounted");
    // });
    // onUpdated(() => {
    //   console.log("updated");
    // });
    // onRenderTriggered((event) => {
    //   console.log(event);
    // });

    // @ref 和 reactive
    // const count = ref(0);
    // const increase = () => {
    //   count.value++;
    // };
    // const double = computed(() => {
    //   return count.value * 2;
    // });
    // return {
    //   count,
    //   increase,
    //   double,
    // };
    const data: DataProps = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {
        data.count++;
      },
      numbers: [3, 6, 2],
      person: {
        name: "chenbin",
        age: 22,
      },
    });

    data.numbers[0] = 8;
    data.person.name = "viking";

    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "Hello!";
      data.person.name = "hujunjie";
    };
    // console.log(123, greetings.value);
    document.title = "updated" + greetings.value;
    const refData = toRefs(data);
    // watch 简单应用
    watch(data, () => {
      document.title = "updated" + data.count;
    });
    console.log(data.count);
    // 使用 getter 的写法 watch reactive 对象中的一项
    watch([greetings, () => data.count], (newValue, oldValue) => {
      console.log("old", oldValue);
      console.log("new", newValue);
      document.title = "updated" + greetings.value + data.count;
    });
    // { deep: true }
    return {
      ...refData,
      greetings,
      updateGreeting,
      x,
      y,
      result,
      loaded,
      loading,
      resultDog,
      loadedDog,
      loadingDog,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
