export default {
  themeConfig: {
    siteTitle: 'vitepress',
    nav: [
      { text: '指南', link: '/guild/installation/index.html' },
      { text: '组件', link: '/components/button/' }
    ],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/installation/index.html'
            },
            {
              text: '快速开始',
              link: '/guild/quickstart/index.html'
            }
          ]
        },
        {
          text: '进阶',
          items: [
            {
              text: 'xx',
              link: '/xx'
            }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button',
              link: '/components/button/index.html'
            }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'xxxx' }]
  }
};
