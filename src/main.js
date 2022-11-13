import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/css/index.css";
import "@/assets/fontawesome/css/fontawesome.min.css";
import "@/assets/fontawesome/css/brands.min.css";
import "@/assets/fontawesome/css/solid.min.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
