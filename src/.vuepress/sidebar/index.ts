import { sidebar } from 'vuepress-theme-hope'

export const Sidebar = sidebar({
  '/posts/envs/': [
    {
      text: '环境搭建',
      icon: 'build',
      children: 'structure',
    },
    '/posts/intro'
  ],
  '/posts/ai/': [
    {
      text: '人工智能',
      icon: 'creative',
      children: [
        {
          prefix: 'probability-and-statistics/',
          collapsible: true,
          text: '概率与统计',
          children: 'structure'
        },
        {
          prefix: 'machine-learning',
          collapsible: true,
          text: '机器学习',
          children: 'structure'
        },
        {
          prefix: 'linear-algebra/',
          collapsible: true,
          text: '线性代数',
          children: 'structure'
        }
      ]
    },
    '/posts/intro'
  ],
  '/posts/backend/': [
    {
      text: '后端',
      icon: 'setting',
      children: [
        {
          prefix: 'history/',
          collapsible: true,
          text: '历史',
          children: 'structure'
        },
        {
          prefix: 'tech/',
          collapsible: true,
          text: '技术',
          children: 'structure'
        }
      ]
    },
    '/posts/intro'
  ],
  '/posts/frontend/': [
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
        },
        {
          prefix: 'android/',
          collapsible: true,
          text: 'Android',
          children: 'structure'
        }
      ]
    },
    '/posts/intro'
  ],
  '/posts/ideas/': [
    {
      text: '奇思妙想',
      icon: 'ability',
      children: 'structure',
    },
    '/posts/intro'
  ],
  '/posts/meta/': [
    {
      text: '博客构建引导',
      icon: 'setting',
      children: 'structure',
    },
    '/slides',
    '/posts/intro'
  ],
  '/posts/intro': [
    '/posts/meta',
    '/slides',
    '/posts/intro',
  ],
  '/': [
    '/posts/meta',
    '/slides',
    '/posts/intro',
  ]
})
