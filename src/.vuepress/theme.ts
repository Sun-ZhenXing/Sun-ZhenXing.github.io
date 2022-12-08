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
  docsDir: 'docs',
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
        left: ['Brand'],
        center: ['Links'],
        right: ['Repo', 'Outlook', 'Search']
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
    blog: {
      autoExcerpt: true,
    },

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: 'Giscus',
    //   repo: 'vuepress-theme-hope/giscus-discussions',
    //   repoId: 'R_kgDOG_Pt2A',
    //   category: 'Announcements',
    //   categoryId: 'DIC_kwDOG_Pt2M4COD69',
    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: 'Twikoo',
    //   // envId: 'https://twikoo.ccknbc.vercel.app',
    //   /**
    //    * Using Waline
    //    */
    //   // provider: 'Waline',
    //   // serverURL: 'https://vuepress-theme-hope-comment.vercel.app',
    // },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codetabs: true,
      container: true,
      demo: false,
      echarts: false,
      flowchart: false,
      gfm: true,
      imageLazyload: true,
      figure: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      // playground: {
      //   presets: ['ts', 'vue'],
      // },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    sitemap: {
      extraUrls: projects.items,
    },

    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cachePic: true,
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
