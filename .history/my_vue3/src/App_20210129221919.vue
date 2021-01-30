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
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, watch } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string };
}
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    onMounted(() => {
      console.log("mounted");
    });

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
      person: {},
    });

    data.numbers[0] = 8;
    data.person.name = "viking";
    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "Hello!";
    };
    document.title = "updated" + greetings.value;
    const refData = toRefs(data);
    return {
      ...refData,
      greetings,
      updateGreeting,
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
