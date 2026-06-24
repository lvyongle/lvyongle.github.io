import { defineConfig } from 'vitepress'
import { vitepressPluginLegend } from 'vitepress-plugin-legend';
import sidebarJSON from './theme/data/siderbar.json'
import navigationJSON from './theme/data/navigation.json'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['meta', { rel: 'keywords', content: 'Markdown,教程,' }],
    ['link', { rel: 'icon', href: '/imgs/logo.svg' }],
    ['link', { rel: 'canonical', href: 'https://xomk.cn' }]
  ],
  title: "吕永乐的学习笔记",
  description: "工作中学习，持续更新...",
  ignoreDeadLinks: true, // 禁用死链接检查
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/logo.svg',
    //页面上方导航栏
    nav: navigationJSON,
    //左边侧边栏目录
    sidebar:sidebarJSON,
    //显示右上角的友情连接
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'gitee', link: 'https://gitee.com/lvyongle8848' }
    ],
    //显示最近更新
    lastUpdated: true,
    //浏览器内搜索
    search: {
      provider: 'local'
    },
    //页脚
    footer: {
      // message: 'Released under the MIT License.',
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">备案号:京ICP备2024043921号-3</a>',
      copyright: 'Copyright © 2026-present 吕永乐'
    }
  },
  markdown: {
    config(md) {
      vitepressPluginLegend(md,{
        markmap: {
          showToolbar: true,
          // Other markmap options
        },
        mermaid: true, // or false to disable
        infographic: {
          showToolbar: true,
          // Other infographic options
        },
      });
    },
    lineNumbers:true
  },
})
