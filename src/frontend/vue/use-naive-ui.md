---
title: 开始使用 Naive UI
date: 2020-12-04
category:
  - 前端
  - Vue
tag:
  - 前端
  - Vue
  - Vue3
  - Naive UI
---

从零开始使用 Naive UI 的步骤。

<!-- more -->

# 开始使用 Naive UI

[[TOC]]

## 1. Naive UI

[Naive UI](https://www.naiveui.com/zh-CN/) 是 Vue3 官方推荐的一款 UI 库，其功能覆盖全面、界面统一简洁，适合不同需求的开发者使用。

## 2. 项目准备

文本使用的项目模板是 [创建 Vite 应用](./create-vite-app.md) 一文中的模板，使用 Vue3 + Vite3 + TypeScript。

现在可以开始安装 Naive UI 了，输入下面的命令开始安装：

```bash
pnpm add -D naive-ui
```

*@optional* 如果需要配套的字体，安装 `vfonts`：

```bash
pnpm add -D vfonts
```

*@optional* *@recommend* 如果需要配套的图标，安装 `@vicons/ionicons5`：

```bash
pnpm add -D @vicons/ionicons5
```

要选用图标，可以查看 [xicons](https://xicons.org/) 网站上的示例，可以搜索哦！

## 3. 配置自动导入

安装 Vite 自动导入插件：

```bash
pnpm add -D unplugin-auto-import
pnpm add -D unplugin-vue-components
```

下面在 `vite.config.ts` 中配置下面的项目：

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```

在 `.gitignore` 最后加入：

```gitignore
# auto import plugin
components.d.ts
```
