import { createApp } from "vue";
import App from "./App.vue";
import { Layout, Menu } from "ant-design-vue";

import "ant-design-vue/lib/layout/style/index.css"
import "ant-design-vue/lib/menu/style/index.css"

createApp(App).use(Layout).use(Menu).mount("#app");
