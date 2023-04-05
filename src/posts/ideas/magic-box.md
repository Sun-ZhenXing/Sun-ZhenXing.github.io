---
title: 魔法盒
date: 2023-04-05
category:
    - 奇思妙想
---

本文是一些网页魔法的集合。

<!-- more -->

[[TOC]]

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
