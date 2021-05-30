import Vue from "vue";
import App from "./App";
import SpIcon from "./components/common/spIcon/SpIcon.vue"; // 字体图标组件

Vue.config.productionTip = false;

App.mpType = "app";
Vue.component("SpIcon", SpIcon);

const app = new Vue({
  ...App,
});
app.$mount();
