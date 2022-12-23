import { sidebar } from 'vuepress-theme-hope'

export const Sidebar = sidebar({
  '/envs/': [
    {
      text: '环境搭建',
      icon: 'setting',
      children: 'structure',
    },
    '/intro'
  ],
  '/backend/': [
    {
      text: '后端',
      icon: 'setting',
      children: [
        {
          prefix: 'history/',
          collapsible: true,
          text: '历史',
          children: 'structure'
        }
      ]
    },
    '/intro'
  ],
  '/frontend/': [
    {
      text: '前端',
      icon: 'setting',
      children: [
        {
          prefix: 'vue/',
          collapsible: true,
          text: 'Vue',
          children: 'structure'
        },
        {
          prefix: 'history/',
          collapsible: true,
          text: '历史',
          children: 'structure'
        },
        {
          prefix: 'awesome/',
          collapsible: true,
          text: 'Awesome 项目',
          children: 'structure'
        }
      ]
    },
    '/intro'
  ],
  '/meta/': [
    {
      text: '元设置',
      icon: 'setting',
      children: 'structure',
    },
    '/intro'
  ],
  '/': [
    {
      text: '元设置',
      icon: 'setting',
      children: 'structure',
    },
    '/intro',
  ]
})
