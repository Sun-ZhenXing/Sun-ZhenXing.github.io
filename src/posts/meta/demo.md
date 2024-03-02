---
date: 2022-12-04
category:
  - 元定义
tag:
  - 元定义
  - 博客配置
---

# 博客编写示例

使用 VuePress 编写博客的一些配置和示例。

<!-- more -->

## 文章结构

每个 MarkDown 文件都由这几部分构成：

```markdown
---
yaml: info
---

`more` 注释之前的内容被视为文章摘要。

<!-- more -->

文章内容……
```

## Frontmatter 配置

MarkDown 可以使用三个短横线（`---`）行组成的部分，在文章的头部定义配置信息，将 YAML 写在这两行中间。

```markdown
---
yaml: info
---

<!-- 这是内容 -->
```

VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置，常见的配置如下。

```yaml
# 文章的标题
title: 页面配置
# 页面的图标
icon: page
# 侧边栏的顺序
order: 1

# 作者
author: Ms.Hope
# 写作时间
date: 2020-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 页面配置
  - 使用指南

# 置顶
sticky: true
# 收藏
star: true
# 自定义页脚
footer: 这是测试显示的页脚
# 自定义版权信息
copyright: 无版权
```

本页面的配置是：

```yaml
title: 博客编写示例
date: 2020-12-04
category:
  - 元定义
tag:
  - 元定义
  - 博客配置
```

## 引用资源

你可以将图片和 Markdown 文件放置在一起，但是要使用 **相对链接**（`./path/to/file`）进行引用。

但是对于 `.vuepress/public` 文件夹的资源，使用绝对链接（`/path/to/file`）进行引用。

## Vue 组件

VuePress 支持自定义 Vue 组件并在 MarkDown 中使用，主题包含了一个自定义徽章可以使用：

```markdown
<Badge text="徽章文字" color="#242378" />
```

<!-- markdownlint-disable MD033 -->
> 文字结尾应该有深蓝色的 *徽章文字* 徽章 <Badge text="徽章文字" />。
