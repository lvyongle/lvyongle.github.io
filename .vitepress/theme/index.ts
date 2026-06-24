
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import { initComponent } from 'vitepress-plugin-legend/component';
import PasswordProtect from "./components/PasswordProtect.vue";

import './custom.css' // <--- 关键步骤：引入自定义样式
import 'vitepress-plugin-legend/dist/index.css';

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("PasswordProtect",PasswordProtect)
        initComponent(app);
    },
} satisfies Theme;