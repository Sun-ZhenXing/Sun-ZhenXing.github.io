---
title: 博客配置指南
date: 2022-12-04
category:
  - 元定义
tag:
  - 元定义
  - 博客配置
---

使用 VuePress 和 `vuepress-theme-hope` 构建个人博客的配置指南。

<!-- more -->

## 1. 基础配置

配置项目：
- `src/.vuepress/config.ts` 配置
- `src/README.md` 主页配置
- `src/.vuepress/navbar/` 导航栏配置
- `src/.vuepress/sidebar/` 侧边栏配置
- `src/.vuepress/style/` 样式配置
- `src/intro.md` 个性化主页配置

::: tip 重要功能

当前的 ***在 GitHub 上编辑*** 功能不能自动配置，其 `config.ts` 配置项为 `docsDir: 'docs'`，但是默认创建文件夹为 `src/`，所以需要将 `'docs'` 修改为 `'src'`。

:::

## 2. 页面结构

页面通常包含下面的部分：
- [路径导航](https://vuepress-theme-hope.github.io/v2/zh/guide/layout/breadcrumb.html)
- [标题和页面信息](https://vuepress-theme-hope.github.io/v2/zh/guide/feature/page-info.html)
- [TOC (文章标题列表)](https://vuepress-theme-hope.github.io/v2/zh/guide/layout/page.html#标题列表)
- [贡献者、更新时间等页面元信息](https://vuepress-theme-hope.github.io/v2/guide/feature/meta.html)
- [评论](https://vuepress-theme-hope.github.io/v2/zh/guide/feature/comment.html)
- [导航栏](https://vuepress-theme-hope.github.io/v2/zh/guide/layout/navbar.html)
- [侧边栏](https://vuepress-theme-hope.github.io/v2/zh/guide/layout/sidebar.html)
- [页脚](https://vuepress-theme-hope.github.io/v2/zh/guide/layout/footer.html)
- 返回顶部按钮

这些都可以通过主题配置 `config.ts` 和页面 Frontmatter 自定义它们。
