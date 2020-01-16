import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入 antd-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 引入全局样式
import "@/assets/styles/index.scss";

Vue.config.productionTip = false;

// 使用 antd-vue
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
