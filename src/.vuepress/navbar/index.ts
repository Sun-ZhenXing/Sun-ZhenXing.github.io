import { navbar } from 'vuepress-theme-hope'

export const Navbar = navbar([
  '/',
  { icon: 'discover', link: '/posts/meta/', text: '构建' },
  { icon: 'creative', link: '/posts/intro', text: '关于' },
])
