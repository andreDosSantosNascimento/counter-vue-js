import { createApp } from "vue";
import { createPinia } from "pinia";
import CounterComponent from "./components/CounterComponent/index.vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("CounterComponent", CounterComponent);
app.mount("#app");
