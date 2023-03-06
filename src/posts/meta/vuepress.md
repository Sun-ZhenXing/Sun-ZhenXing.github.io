---
title: VuePress 指南
date: 2023-03-06
category:
  - 元定义
tag:
  - 元定义
  - VuePress
---

VuePress2 的使用指南。

<!-- more -->

## 1. 将一篇 MarkDown 文章视为 Vue SFC

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

## 2. 自定义组件

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

## 3. 使用 Webpack 打包

VuePress 支持使用 Webpack 打包，依赖示例如下：

```json
{
  "name": "vuepress-webpack-test",
  "version": "1.0.0",
  "description": "test webpack",
  "main": "index.js",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "docs:build:webpack": "vuepress-webpack build docs",
    "docs:clean-dev": "vuepress dev docs --clean-cache",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@vuepress/client": "2.0.0-beta.61",
    "sass-loader": "^13.2.0",
    "vue": "^3.2.47",
    "vuepress": "2.0.0-beta.61",
    "vuepress-plugin-md-enhance": "2.0.0-beta.189",
    "vuepress-webpack": "2.0.0-beta.61",
    "webpack": "5.0.0"
  }
}
```
