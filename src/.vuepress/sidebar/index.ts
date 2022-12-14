import { sidebar } from 'vuepress-theme-hope'

export const Sidebar = sidebar({
  '/': [
    {
      text: '元设置',
      icon: 'home',
      prefix: 'meta/',
      children: 'structure'
    },
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
          children: 'structure'
        },
      ]
    },
    'intro'
  ]
})
