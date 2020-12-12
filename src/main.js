import "babel-polyfill";
import Vue from "vue";
import frame from "./frame.vue";
import router from "./router";
import store from "./store";
import axios from "./common/axios";
import filters from "./filters";
import VueProgressBar from "vue-progressbar";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import ImpPanel from "./components/panel.vue";
//列表组件
import CategoryList from "@/components/CategoryList";
//分页
import Pagination from "@/components/Pagination";
//提示
import HintButton from "@/components/HintButton";
import Title from "@/components/Title";
// mock
import "./mock/mockServer";
import "./api/mock-api";
Vue.prototype.$http = axios;
Vue.axios = axios;
Vue.http = axios;
Vue.use(axios);

Vue.use(Element);
Vue.component(ImpPanel.name, ImpPanel);
Vue.component("CategoryList", CategoryList);
Vue.component("HintButton", HintButton);
Vue.component("Pagination", Pagination);
Vue.component("Title", Title);

Vue.use(VueProgressBar, {
  color: "#eeeeee",
  failedColor: "#874b4b",
  thickness: "2px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s"
  },
  autoRevert: true,
  location: "top",
  inverse: false
});

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// 创建实例
new Vue({
  store,
  router,
  el: "#root",
  render: h => h(frame)
});
