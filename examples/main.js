import { createApp } from "vue";
import App from "./App.vue";

import "../components/css/index.scss";
import zDemo from "../components/lib/demo/index";
import zCard from "../components/lib/card/index";

createApp(App).use(zDemo).use(zCard).mount("#app");
