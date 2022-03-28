import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ["vue", "vue-router"],
            dts: true
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    css: {
        postcss: {
            plugins: [
                {
                    postcssPlugin: "internal:charset-removal",
                    AtRule: {
                        charset: (atRule) => {
                            if (atRule.name === "charset") {
                                atRule.remove();
                            }
                        }
                    }
                }
            ]
        }
    }
});
