---
title: 魔法盒
date: 2023-04-05
category:
    - 奇思妙想
---

本文是一些网页魔法的集合。

<!-- more -->

[[TOC]]

::: warning 迁移事项

魔法盒的最初想法已经演变为全新的知识框架，因此本文将和以前的内容一起转移到新的基于 Nuxt 的知识框架中，至 2023 年 6 月将上线。

:::

## 1. 网页魔法

### 1.1 复制 LaTeX 公式

给每个 LaTeX 公式后面添加一个按钮，点击按钮可以复制公式的 LaTeX 源码。

```js
document.querySelectorAll('.katex').forEach(el => {
  const btn = document.createElement('button');
  btn.innerText = 'Copy';
  btn.addEventListener('click', () => {
    const text = el.querySelector('annotation').textContent;
    navigator.clipboard.writeText(text).catch(err => {
      alert(`Failed to copy: ${text}`);
    });
  });
  el.appendChild(btn);
});
```
