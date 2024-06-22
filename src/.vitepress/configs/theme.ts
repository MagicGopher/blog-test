import { DefaultTheme } from "vitepress";
import { zhNavbar } from '../navbar/index';

export const themeConfig: DefaultTheme.Config = {
    // 中文导航栏
    nav: zhNavbar,
    // 社交链接
    socialLinks: [
        { icon: 'github', link: 'https://github.com/MagicGopher' }
    ]
}