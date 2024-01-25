import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/tailwind.css";
import vScroll from "./utils/vScroll.js";
import FlagIcon from "vue-flag-icon";
import { i18n } from "@/i18n";

const app = createApp(App);

app.use(router);

app.use(FlagIcon);

app.use(i18n);

app.directive("scroll", vScroll);

app.mount("#app");
