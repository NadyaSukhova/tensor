import './assets/main.less'
import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaRegularCommentDots, FaCss3Alt  } from "oh-vue-icons/icons";

addIcons(FaRegularCommentDots, FaCss3Alt );

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");