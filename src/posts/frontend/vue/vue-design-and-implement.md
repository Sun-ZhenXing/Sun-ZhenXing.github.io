---
title: Vue.js 设计与实现
date: 2023-03-27
category:
  - 前端
  - Vue
tag:
  - 前端
  - Vue
  - Vue3
---

<!-- markdownlint-disable MD033 -->

《Vue.js 设计与实现》的解析。

<!-- more -->

[[TOC]]

::: tip 书籍推荐

《Vue.js 设计与实现》这本书是 Vue 核心开发团队成员霍春阳编写的，没有源码阅读，直接分析了 Vue 3 的一些设计哲学。

《Vue.js 技术内幕》则是源码阅读，从 Vue 的源码来分析 Vue 的一些核心实现。

:::

## 1. 框架设计概述

### 1.1 权衡的艺术

> 框架的设计本身就是一种权衡的艺术。
> <cite>——尤雨溪</cite>

#### 1.1.1 命令式和声明式

命令式编程和声明式编程是两种不同的编程范式，Vue 给用户体验是声明式的，但是内部实现是命令式的。

命令式编程主要关注过程：

```js
const div = document.querySelector('#app')
div.innerHTML = 'Hello World'
div.addEventListener('click', () => {
  alert('Hello World')
})
```

声明式编程主要关注结果：

```vue
<div @click="alert('Hello World')">
  Hello World
</div>
```

#### 1.1.2 性能与可维护性

命令式编程的性能更好，直接使用原生的 JavaScript 实现。而声名式编程的无论界面如何，其内部一定会实现命令式的逻辑代码，所以性能上会有一定的损耗。

命令式编程的可维护性远远大于命令式代码，因为其代码更加直观，更容易理解。

DOM 渲染方式的直观比较：

| 项目     | `innerHTML`（字符串模板） | 虚拟 DOM     | 原生 JavaScript |
| -------- | ------------------------- | ------------ | --------------- |
| 心智负担 | 中等                      | 小           | 大              |
| 性能     | 低                        | 可接受，不错 | 高              |
| 可维护性 | 中等                      | 强           | 高              |

#### 1.1.3 运行时和编译时

运行时渲染指的是利用 `render` 函数将虚拟 DOM 渲染成真实 DOM 的过程。这个过程没有编译的内容，无法分析用户提供的内容。

编译时渲染指的是将模板编译成 DOM 元素。这个过程会分析用户提供的内容，理论上性能更好。例如 Svelte 就是编译时渲染，但是作者也在书中强调了 Svelte 的性能没有达到预期的效果。

还有一种方式，即运行时 + 编译时，这个过程可分为两个阶段：

1. 将模板编译成 `render` 函数
2. 利用 `render` 函数将虚拟 DOM 渲染成真实 DOM

这也是 Vue 的主要实现方式。

### 1.2 框架设计的核心要素

#### 1.2.1 控制代码体积

使用环境变量（如 `__DEV__`）和 **摇树优化**（Tree Shaking）来控制代码体积。

#### 1.2.2 输出不同的构建产物

通过构建不同的打包产物来应对不同的使用场景（如 CommonJS、ES Module、UMD、Runtime 等）。

#### 1.2.3 错误提示与处理

Vue 内部提供了一个同意的错误处理接口 `callWithErrorHandling`，用于处理错误。

#### 1.2.4 提升用户开发体验

内部使用 TypeScript 进行开发，提供了类型提示。包含了大量类型校验，可以保证项目的可维护性，提升用户开发体验，降低用户心智负担。

### 1.3 Vue.js 3 的设计思路

#### 1.3.1 描述 UI 的形式

声名式的模板描述：

```vue
<div :id="tid" :class="{ active: isActive }" @click="handleClick">
  {{ text }}
</div>
```

命令式的 `render` 函数：

```js
import { h } from 'vue'

export default {
  render() {
    return h('div', {
      id: this.tid,
      class: {
        active: this.isActive
      },
      onClick: this.handleClick
    }, this.text)
  }
}
```

#### 1.3.2 初始化渲染器

渲染器是 `createRenderer` 函数的返回值，它是一个对象，包含了 `render` 方法。

渲染函数需要两个参数，第一个参数是虚拟节点 `vnode`，第二个参数是容器 `container`，是真实的 DOM 元素。渲染函数的作用是将虚拟节点渲染成真实节点，然后挂载到容器上。抽象一点来说就是把 `vnode` 挂载到 `container` 上。

#### 1.3.3 组件的本质

Vue 以组件作为最小颗粒，Vue 程序的本质就是大量的组件渲染。

组件就是一组 DOM 元素的封装。一个组件就是一个 JavaScript 对象（VNode），内部封装了 DOM 元素的结构、样式、事件等。

#### 1.3.4 模板的工作原理

这部分在上一节已经讲过了，可以阅读原著。
