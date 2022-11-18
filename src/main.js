import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import * as brandsIcons from "@fortawesome/free-brands-svg-icons";

import "@/assets/css/index.css";

library.add(
  faDownload,
  brandsIcons.faLinkedin,
  brandsIcons.faGithubAlt,
  brandsIcons.faPython,
  brandsIcons.faGolang,
  brandsIcons.faDocker,
  brandsIcons.faGitAlt,
  brandsIcons.faAws,
  brandsIcons.faLinux,
  brandsIcons.faVuejs,
  brandsIcons.faHtml5,
  brandsIcons.faCss3Alt,
  brandsIcons.faJsSquare
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
