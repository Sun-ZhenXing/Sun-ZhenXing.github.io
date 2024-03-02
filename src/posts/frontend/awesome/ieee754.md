---
title: IEEE 754 浮点数交互式演示
date: 2022-12-10
category:
  - 前端
  - Awesome
tag:
  - 前端
  - IEEE754
---

<!-- markdownlint-disable MD033 -->

IEEE 754 浮点数的交互式演示。

<!-- more -->

## 1. 演示

<script setup lang="ts">
import IEEE754 from '@/components/IEEE754.vue'
</script>

<IEEE754 />

## 2. 原理

::: tip 解释

具体显示的结果取决于你的计算机储存方式和浮点数实现，考虑到现代计算机几乎 100% 地采用了 IEEE 754，并使用小端存储数据，所以这可以保证 100% 是正确的。除非你的机器 / JavaScript 实现使用大端存储，这样你看到的结果也是大端的。

:::

使用 ES6 新特性 `ArrayBuffer` 和 `DataView` 来读取和设置二进制数组：

```ts
// 将浮点数转换为 uint32 类型
const float32_to_uint32 = (f: number): number => {
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)
  view.setFloat32(0, f, true)
  return view.getUint32(0, true)
}
```

可参考 [本页组件实现代码](https://github.com/Sun-ZhenXing/Sun-ZhenXing.github.io/tree/main/src/.vuepress/components/IEEE754.vue) 来了解更多。

## 3. 推荐项目

1. [我使用 PySide6 构建的 IEEE 754 演示](https://github.com/Sun-ZhenXing/IEEE754)，效果好于当前页面
2. [IEEE 754 Converter (JavaScript)](https://www.h-schmidt.net/FloatConverter/IEEE754.html)
