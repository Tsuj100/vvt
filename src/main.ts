import { createApp } from "vue";
import App from "./App.vue";
import { Layout, Menu } from "ant-design-vue";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "ant-design-vue/dist/antd.css";

import { router } from "./router";

const app = createApp(App);

app.use(Layout);
app.use(Menu);
app.use(router);
app.use(ElementPlus);

app.mount("#app");
