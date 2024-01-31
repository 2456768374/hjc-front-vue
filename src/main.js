// 引入全局初始化样式
import "./assets/initial.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

/* 开启Vue Devtools */
Vue.config.devtools = true;
