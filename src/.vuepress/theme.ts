import { hopeTheme } from 'vuepress-theme-hope'

import { projects } from './extend/'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'

export default hopeTheme({
  author: {
    name: 'Alex Sun',
    url: 'https://blog.alexsun.top/',
  },
  blog: {
    description: '鸭梨的博客',
    medias: {
      // Baidu: 'https://example.com',
      BiliBili: 'https://space.bilibili.com/364834987',
      // Bitbucket: 'https://example.com',
      // Dingding: 'https://example.com',
      // Discord: 'https://example.com',
      // Dribbble: 'https://example.com',
      Email: 'mailto:sun-zhenxing@foxmail.com',
      // Evernote: 'https://example.com',
      // Facebook: 'https://example.com',
      GitHub: 'https://github.com/Sun-ZhenXing',
      // Flipboard: 'https://example.com',
      Gitee: 'https://gitee.com/Sun-ZhenXing',
      // Gitlab: 'https://example.com',
      // Gmail: 'https://example.com',
      // Instagram: 'https://example.com',
      // Lark: 'https://example.com',
      // Lines: 'https://example.com',
      // Linkedin: 'https://example.com',
      // Pinterest: 'https://example.com',
      // Pocket: 'https://example.com',
      // QQ: 'https://example.com',
      // Qzone: 'https://example.com',
      // Reddit: 'https://example.com',
      // Rss: 'https://example.com',
      // Steam: 'https://example.com',
      // Twitter: 'https://example.com',
      // Wechat: 'https://example.com',
      // Weibo: 'https://example.com',
      // Whatsapp: 'https://example.com',
      // Youtube: 'https://example.com',
      // Zhihu: 'https://example.com',
    },
    name: '鸭梨',
    roundAvatar: true,
  },

  docsDir: 'src',
  fullscreen: true,
  hostname: 'https://blog.alexsun.top',
  iconAssets: 'iconify',
  locales: {
    '/': {
      blog: {
        description: '鸭梨的博客',
        intro: '/intro.html',
        name: '鸭梨',
      },
      displayFooter: true,
      footer: '鸭梨的博客',
      // page meta
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
      navbar: Navbar,
      navbarLayout: {
        center: ['Links'],
        end: ['Repo', 'Outlook', 'Search'],
        start: ['Brand'],
      },
      sidebar: Sidebar,
    },
  },
  logo: '/logo.svg',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  plugins: {
    blog: true,
    catalog: {},
    copyCode: {
      showInMobile: true,
    },
    docsearch: {
      apiKey: '3b6438cb1895eff367c5c84c8fa50383',
      appId: 'DF0MWQNCKW',
      indexName: 'alexsun_blog',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonAriaLabel: '搜索文档',
              buttonText: '搜索文档',
            },
            modal: {
              errorScreen: {
                helpText: '你可能需要检查你的网络连接',
                titleText: '无法获取结果',
              },
              footer: {
                closeText: '关闭',
                navigateText: '切换',
                searchByText: '搜索提供者',
                selectText: '选择',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                reportMissingResultsLinkText: '点击反馈',
                reportMissingResultsText: '你认为该查询应该有结果？',
                suggestedQueryText: '你可以尝试查询',
              },
              searchBox: {
                cancelButtonAriaLabel: '取消',
                cancelButtonText: '取消',
                resetButtonAriaLabel: '清除查询条件',
                resetButtonTitle: '清除查询条件',
              },
              startScreen: {
                favoriteSearchesTitle: '收藏',
                noRecentSearchesText: '没有搜索历史',
                recentSearchesTitle: '搜索历史',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                saveRecentSearchButtonTitle: '保存至搜索历史',
              },
            },
          },
        },
      },
      placeholder: '搜索文档',
      searchParameters: {
        facetFilters: ['tags:blog'],
      },
    },

    mdEnhance: {
      // GFM 警告
      alert: true,
      // 自定义对齐
      align: true,
      // 属性
      attrs: true,
      // Chart 图表
      chart: false,
      // 代码组
      codetabs: true,
      // 组件
      component: true,
      // 代码示例
      demo: true,
      // Echarts 图表
      echarts: true,
      // figure
      figure: true,
      // 流程图
      flowchart: true,
      // GFM 语法
      gfm: true,
      // 图片懒加载
      imgLazyload: true,
      // 图片标记
      imgMark: true,
      // 图片大小
      imgSize: true,
      // 包含文件
      include: true,
      // KaTeX 数学公式
      katex: {
        // 支持复制公式
        copy: true,
      },
      // 标注
      mark: true,
      // Markmap
      markmap: true,
      // Mermaid
      mermaid: true,
      // 幻灯片
      revealJs: true,
      // 风格化
      stylize: [
        {
          matcher: /@note:.+/,
          replacer: ({ content, tag }) => {
            if (tag === 'em') {
              return {
                attrs: { type: 'warning', vertical: 'inherit' },
                content: content.substring(6),
                tag: 'Badge',
              }
            }
          },
        },
        {
          matcher: '@optional',
          replacer: ({ tag }) => {
            if (tag === 'em') {
              return {
                attrs: { type: 'tip', vertical: 'inherit' },
                content: '可选',
                tag: 'Badge',
              }
            }
          },
        },
        {
          matcher: '@TODO',
          replacer: ({ tag }) => {
            if (tag === 'em') {
              return {
                attrs: { type: 'danger', vertical: 'inherit' },
                content: 'TODO',
                tag: 'Badge',
              }
            }
          },
        },
        {
          matcher: '@def',
          replacer: ({ tag }) => {
            if (tag === 'em') {
              return {
                attrs: { type: 'tip', vertical: 'inherit' },
                content: '定义',
                tag: 'Badge',
              }
            }
          },
        },
      ],
      // 下标
      sub: true,
      // 上标
      sup: true,
      // 标签页分组
      tabs: true,
      // v-pre 容器
      vPre: true,
      // Vue Playground
      vuePlayground: true,
    },
    pwa: {
      appendBase: true,
      apple: {
        icon: '/assets/icon/apple-icon-152.png',
        statusBarColor: 'black',
      },
      favicon: '/favicon.ico',
      manifest: {
        icons: [
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: '/assets/icon/chrome-mask-512.png',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: '/assets/icon/chrome-mask-192.png',
            type: 'image/png',
          },
          {
            sizes: '512x512',
            src: '/assets/icon/chrome-512.png',
            type: 'image/png',
          },
          {
            sizes: '192x192',
            src: '/assets/icon/chrome-192.png',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            icons: [
              {
                purpose: 'maskable',
                sizes: '192x192',
                src: '/assets/icon/guide-maskable.png',
                type: 'image/png',
              },
              {
                purpose: 'monochrome',
                sizes: '192x192',
                src: '/assets/icon/guide-monochrome.png',
                type: 'image/png',
              },
            ],
            name: 'Demo',
            short_name: 'Demo',
            url: '/demo/',
          },
        ],
      },
      msTile: {
        color: '#ffffff',
        image: '/assets/icon/ms-icon-144.png',
      },
      update: 'hint',
    },

    sitemap: {
      extraUrls: projects.items,
    },
  },

  repo: 'Sun-ZhenXing/Sun-ZhenXing.github.io',
})
