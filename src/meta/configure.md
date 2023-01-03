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

# 博客配置指南

## 基础配置

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

## 页面结构

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

## 将一篇 MarkDown 文章视为 Vue SFC

每一个 MarkDown 文章都会被编译为 Vue SFC（单文件组件），因此可以借助 TypeScript 直接编写动态网页。

```vue
---
title: 测试
date: 2023-01-03
---

_你好， {{ msg }}_

<RedDiv>

_当前计数为： {{ count }}_

</RedDiv>

<button @click="count++">点我！</button>

<script setup>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)

const msg = 'Markdown 中的 Vue'
const count = ref(0)
</script>

<style scoped>
.red-div {
  color: red;
}
</style>
```

## 自定义组件

VuePress2 支持自定义组件，这依赖 [客户端配置](https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html) 实现，新建 `.vuepress/client.ts` 开始配置：

```ts
import { defineClientConfig } from '@vuepress/client'
import MyComponent from './components/MyComponent.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('MyComponent', MyComponent)
  }
})
```

新建 `.vuepress/components/MyComponent.vue` 组件：

```vue
<script setup lang="ts">
const props = defineProps<{
  title: string
  url: string
  content: string
}>()
</script>

<template>
  <h2>MyComponent</h2>
  <p>{{ props.title }}</p>
  <p>{{ props.url }}</p>
  <p>{{ props.content }}</p>
</template>

<style scoped lang="scss">
h2 {
  color: red;
}
</style>
```

VuePress2 默认包含 SCSS 依赖，如果需要 Less 需要自行安装引入。

这样，此组件就会被全局导入，在任意文章下使用 `MyComponent` 组件即可：

```vue
<MyComponent
  title="hello"
  url="https://blog.alexsun.top/"
  content="Hello VuePress!"
></MyComponent>
```
