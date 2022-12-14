import { sidebar } from 'vuepress-theme-hope'

export const Sidebar = sidebar({
  '/': [
    {
      text: '文章',
      icon: 'home',
      prefix: 'posts/',
      children: [
        {
          prefix: 'envs/',
          text: '环境搭建',
          children: 'structure'
        },
        {
          prefix: 'frontend/',
          text: '前端',
          children: [
            {
              prefix: 'vue/',
              text: 'Vue',
              children: 'structure'
            },
            {
              prefix: 'awesome/',
              text: 'Awesome 项目',
              children: 'structure'
            }
          ]
        },
      ]
    },
    {
      text: '元设置',
      icon: 'setting',
      prefix: 'meta/',
      children: 'structure'
    },
    'intro'
  ]
})
