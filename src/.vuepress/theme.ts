import { hopeTheme } from 'vuepress-theme-hope'
import { Navbar } from './navbar/index.js'
import { Sidebar } from './sidebar/index.js'
import { projects } from './extend/'

export default hopeTheme({
  hostname: 'https://blog.alexsun.top',
  author: {
    name: '鸭梨',
    url: 'https://github.com/Sun-ZhenXing',
  },

  iconAssets: 'iconfont',
  logo: '/logo.svg',
  repo: 'Sun-ZhenXing/Sun-ZhenXing.github.io',
  docsDir: 'src',
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
  fullscreen: true,
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  blog: {
    name: '鸭梨',
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
      // Flipboard: 'https://example.com',
      Gitee: 'https://gitee.com/Sun-ZhenXing',
      GitHub: 'https://github.com/Sun-ZhenXing',
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
    roundAvatar: true,
  },

  locales: {
    '/': {
      navbar: Navbar,
      sidebar: Sidebar,
      footer: '鸭梨的博客',
      displayFooter: true,
      navbarLayout: {
        start: ['Brand'],
        center: ['Links'],
        end: ['Repo', 'Outlook', 'Search']
      },
      blog: {
        name: '鸭梨',
        description: '鸭梨的博客',
        intro: '/intro.html',
      },
      // page meta
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
    },
  },

  plugins: {
    autoCatalog: {
      shouldIndex: ({ path }) => path.startsWith('/posts/'),
    },
    blog: true,
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codetabs: true,
      container: true,
      demo: false,
      echarts: true,
      flowchart: false,
      gfm: true,
      imgLazyload: true,
      figure: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      footnote: true,
      stylize: [
        {
          matcher: /@note:.+/,
          replacer: ({ tag, content }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'warning', vertical: 'inherit' },
              content: content.substring(6)
            }
          }
        },
        {
          matcher: '@optional',
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'tip', vertical: 'inherit' },
              content: '可选'
            }
          }
        },
        {
          matcher: '@TODO',
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'danger', vertical: 'inherit' },
              content: 'TODO'
            }
          }
        },
        {
          matcher: '@def',
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'tip', vertical: 'inherit' },
              content: '定义'
            }
          }
        }
      ],
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    copyCode: {
      showInMobile: true,
    },

    sitemap: {
      extraUrls: projects.items,
    },

    pwa: {
      favicon: '/favicon.ico',
      update: 'hint',
      appendBase: true,
      apple: {
        icon: '/assets/icon/apple-icon-152.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/assets/icon/ms-icon-144.png',
        color: '#ffffff',
      },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: 'Demo',
            short_name: 'Demo',
            url: '/demo/',
            icons: [
              {
                src: '/assets/icon/guide-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
              {
                src: '/assets/icon/guide-monochrome.png',
                sizes: '192x192',
                purpose: 'monochrome',
                type: 'image/png',
              }
            ]
          }
        ]
      }
    }
  }
})
