import { DefaultTheme } from "vitepress";

export const zhNavbar: DefaultTheme.Config['nav'] = [
    // 首页
    { text: '首页', link: '/' },
    // 关于我
    {
        text: '关于我',
        items: [
            { text: '我的信息', link: '/docs/zh/关于我/我的信息.md' },
            { text: '更新日志', link: '/docs/zh/关于我/更新日志.md' },
        ]
    }
]