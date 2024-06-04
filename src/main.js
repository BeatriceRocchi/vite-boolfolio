import "bootstrap/dist/css/bootstrap.css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./assets/scss/main.scss";

import { router } from "./router";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
