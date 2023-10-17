import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueVirtualScroller from "vue-virtual-scroller";

import "./assets/base.css";
import "./assets/fonts.css";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueVirtualScroller);

app.mount("#app");
