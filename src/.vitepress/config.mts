import { defineConfig } from 'vitepress';
import { themeConfig } from './configs/theme'

export default defineConfig({
  head: [
    // favicon
    ['link', { rel: 'icon', href: '/go-logo.svg' }],
  ],
  title: "MagicGopher Blog",
  description: "开源笔记、记录日常开发问题",
  themeConfig: themeConfig
})
