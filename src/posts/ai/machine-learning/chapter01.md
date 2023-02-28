---
title: 第 1 章：机器学习概述
date: 2023-02-28
category:
  - AI
  - 机器学习
tag:
  - AI
  - 机器学习
---

吴恩达机器学习课程，第一章。

<!-- more -->

[[TOC]]

## 1. 机器学习定义

Arthur Samuel 在 1959 年给机器学习的定义是：让机器在没有明确编程的情况下进行学习。

机器学习算法主要分为两大类：
1. 监督学习
2. 非监督学习

另外有一些学习算法介于这两者之间，例如强化学习。

### 1.1 监督学习

监督学习指的是学习从 $x$ 到 $y$ 的映射过程。监督学习的最关键特征是我们提供学习示例来帮助机器学习，即包括 “正确答案”。最终算法将只依赖于 $x$ 而猜测出 $y$ 值。

应用示例：

| 输入 $x$       | 输出 $y$                  | 应用       |
| -------------- | ------------------------- | ---------- |
| 邮件           | 是否是垃圾邮件（$0 / 1$） | 反垃圾邮件 |
| 语音           | 文本                      | 语音识别   |
| 英语           | 法语                      | 机器翻译   |
| AD，用户信息   | 是否可能点击（$0 / 1$）   | 在线推荐   |
| 图像、雷达信号 | 汽车的位置                | 自动驾驶   |
| 手机的图片     | 有缺陷（$0 / 1$）         | 视觉检测   |

如果我们获得了大量的关于房价的数据，我如何知道我的房子应该价值多少？

关于面积和价值拟合直线，或者拟合曲线？或者有更好的方法，后续我们将会讨论到底应该选择哪种拟合方法。

这类问题被称为回归，我们试图从无数可能的数字中预测应一个。而分类问题则选择有限的可能性，让我们看下面的示例。

乳腺癌预测：例如我有各种乳腺癌的数据，包括其大小等信息，而预测结果是良性的还是恶性的（$0 / 1$），输出只有两种值。

分类问题的输出只在很小的一部分集合中，预测类别可能是数字也可能不是，关键取决于你如何解释它们。

监督学习可通过多个输入来预测值，例如乳腺癌可能和年龄有关，这样我们将年龄作为输入。还可能和癌症的细胞形状有关等。

总结：监督学习是从 “正确答案” 中学习，监督学习的两种类型是监督学习和非监督学习。

### 1.2 非监督学习

在非监督学习中，我们的数据和标签并不相关，例如在乳腺癌数据中我们并没有被告知肿瘤是良性的还是恶性的。无监督学习将找到无标签数据中的关键内容，例如聚类问题，Google 新闻每天都会将相关的新闻聚合在一起。

第二个示例是 DNA 的数据，DNA 和人身体的某些特征并没有被标记，研究人员可以从 DNA 数据中预测一个人的身高或眼睛特点，甚至能预测你喜不喜欢吃西兰花。我们可以把不同人的 DNA 进行分类，没有明确的分类标准，依据最显著的一些特征让机器进行聚类学习。

事实上，我们可以对非监督学习进行定义：数据只给定 $x$ 而不包含 $y$，算法必须在数据中找到正确的结构。

常见的非监督学习：
- 聚类
- 异常检测
- 降维

下面我们将使用 Jupyter Notebook 来学习更多的内容。

::: info Jupyter Notebook

本文不记录 Jupyter Notebook 的相关笔记，如果需要请访问 [官方文档](http://jupyter.org/) 或 [Python 笔记仓库](https://blog.alexsun.top/vuepress-python-notes/pypi-package/) 来学习。

:::