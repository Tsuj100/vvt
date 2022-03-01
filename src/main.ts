import { createApp } from "vue";
import App from "./App.vue";
import { Layout, Menu } from "ant-design-vue";

import "ant-design-vue/es/layout/style/index.css";
import "ant-design-vue/es/menu/style/index.css";

import { router } from "./router";

const app = createApp(App);

app.use(Layout);
app.use(Menu);
app.use(router);

app.mount("#app");
