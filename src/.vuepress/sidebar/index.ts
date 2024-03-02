import { sidebar } from 'vuepress-theme-hope'

export const Sidebar = sidebar({
  '/': [
    '/posts/meta',
    '/slides',
    '/posts/intro',
  ],
  '/posts/ai/': [
    {
      children: [
        {
          children: 'structure',
          collapsible: true,
          prefix: 'probability-and-statistics/',
          text: '概率与统计',
        },
        {
          children: 'structure',
          collapsible: true,
          prefix: 'machine-learning',
          text: '机器学习',
        },
        {
          children: 'structure',
          collapsible: true,
          prefix: 'linear-algebra/',
          text: '线性代数',
        },
      ],
      icon: 'creative',
      text: '人工智能',
    },
    '/posts/intro',
  ],
  '/posts/backend/': [
    {
      children: 'structure',
      icon: 'setting',
      text: '后端',
    },
    '/posts/intro',
  ],
  '/posts/computer-core/': [
    {
      children: 'structure',
      icon: 'computer',
      text: '计算机核心知识',
    },
    '/posts/intro',
  ],
  '/posts/envs/': [
    {
      children: 'structure',
      icon: 'build',
      text: '环境搭建',
    },
    '/posts/intro',
  ],
  '/posts/frontend/': [
    {
      children: 'structure',
      icon: 'page',
      text: '前端',
    },
    '/posts/intro',
  ],
  '/posts/ideas/': [
    {
      children: 'structure',
      icon: 'ability',
      text: '奇思妙想',
    },
    '/posts/intro',
  ],
  '/posts/intro': [
    '/posts/meta',
    '/slides',
    '/posts/intro',
  ],
  '/posts/meta/': [
    {
      children: 'structure',
      icon: 'setting',
      text: '博客构建引导',
    },
    '/slides',
    '/posts/intro',
  ],
})
