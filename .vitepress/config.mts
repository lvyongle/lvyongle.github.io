import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "创作家园",
  description: "工作中学习，持续更新...",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '学习文档', 
        items:[
          { text: 'Markdown教程', link: '/content/markdown' },
          { text: 'Springboot教程', link: '/content/springboot' }
        ]
      }
    ],

    sidebar: {
      '/content/markdown/':[
        {
          text: 'Markdown教程',
          link: '/content/markdown',
          // collapsed: false,
          items:[
            { text: '第1章 课程纵览', link: '/content/markdown/01' },
            { text: '第2章 基础语法速通', link: '/content/markdown/02' },
            { text: '第3章 进阶排版', link: '/content/markdown/03' },
            { text: '第4章 图表与流程图', link: '/content/markdown/04' },
            { text: '第5章 工具链与AI工作流', link: '/content/markdown/05' },
            { text: '第6章 实战项目', link: '/content/markdown/06' },
          ]
        }
      ],
      '/content/springboot/':[
          { 
            text: 'SpringBoot入门学习',
            link: '/content/springboot',
            // collapsed: false,
            items:[
              { text: '第1章 课程纵览', link: '/content/springboot/01' },
              { text: '第2章 基础语法素通', link: '/content/springboot/02' },
              { text: '第3章 进阶排版', link: '/content/springboot/03' },
              { text: '第4章 图表与流程图', link: '/content/springboot/04' },
              { text: '第5章 工具链与AI工作流', link: '/content/springboot/05' },
              { text: '第6章 实战项目', link: '/content/springboot/06' },
            ]
           }
      ]
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'gitee', link: 'https://gitee.com/lvyongle8848' }
    ],
  }
})
