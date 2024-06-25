import { DefaultTheme } from "vitepress";

export const zhNavbar: DefaultTheme.Config['nav'] = [
    // 首页
    { text: '首页', link: '/' },
    // 数据库
    {
        text: '数据库',
        items: [
            { text: 'MySQL', link: '/docs/zh/数据库/MySQL.md' },
            { text: 'Redis', link: '/docs/zh/数据库/Redis.md' },
        ]
    },
    // 关于我
    {
        text: '关于我',
        items: [
            { text: '我的信息', link: '/docs/zh/关于我/我的信息.md' },
            { text: '更新日志', link: '/docs/zh/关于我/更新日志.md' },
        ]
    }
]