---
title: SVM：支持向量机
date: 2023-03-13
category:
  - AI
  - 机器学习
tag:
  - AI
  - 机器学习
  - SVM
---

支持向量机的基本介绍。

<!-- more -->

## 1. SVM 介绍

支持向量机（Support Vector Machine，SVM）是一种非常强大并且具有多种功能的机器学习模型，能够进行线性或非线性的分类、回归或异常值检测。SVM 特别适合用于复杂但可供使用的数据集规模比较小的分类问题。

我们先以二分类问题为例，如果给定训练样本集 $\boldsymbol{D} = \{(x_1,\,y_1),\, (x_2,\,y_2),\,\cdots(x_n,\,y_n)\}$，其中 $y_i \in \{-1,\,1\}$，则分类任务是基于训练集 $\boldsymbol{D}$ 在样本空间内找到一个划分平面，将不同类别的样本分开。

支持向量机使用的基本思想是两类不同样本距离分类超平面越远，则该超平面的分类效果越好。所谓的支持向量机模型，是一个与分类超平面相关的决策函数，该超平面可使得两类样本数据与该分类超平面形成的间隔均为最大。

因此，支持向量机本质是一个线性分类器，与逻辑回归或神经网络模型不同的是，支持向量机只能输出样本的类别值，而不能输出样本属于该类别的概率值。

分类超平面的方程可表示为

$$
\boldsymbol{w}^{\mathsf{T}}\boldsymbol{X} + b = 0
$$

其中 $\boldsymbol{w} = (w_1,\,w_2,\,\cdots,\,w_k)^{\mathsf{T}}$ 为参数向量，$\boldsymbol{X}$ 为特征向量，$b$ 为偏置量。

将数据集 $\boldsymbol{D}$ 关于超平面 $\boldsymbol{w}^{\mathsf{T}}\boldsymbol{X} + b = 0$ 的函数间隔 $d$ 定义为所有样本点到超平面函数间的最小值，即

$$
d = \min_i d_i
$$

我们的目标是选择合适的 $\boldsymbol{w}$ 和 $b$，使得 $d$ 最大化。

决策边界存在两个超平面，且关于我们的目标超平面对称，我们可用令这两个超平面为

$$
\boldsymbol{w}\boldsymbol{x} + b = 1
$$

和

$$
\boldsymbol{w}\boldsymbol{x} + b = -1
$$

这两个超平面之间的距离即为 $d$。根据几何性质，向量 $\boldsymbol{w}$ 是分类超平面的法向量，垂直于以上超平面。

在两个边界上分别取点 $\boldsymbol{x}_p,\,\boldsymbol{x}_q$，根据向量投影有

$$
d = \frac{\boldsymbol{w} \cdot (\boldsymbol{x}_p - \boldsymbol{x}_q)}
{\Vert\boldsymbol{w}\Vert}
$$

则

$$
d = \frac{2}{\Vert\boldsymbol{w}\Vert}
$$

其中

$$
\Vert\boldsymbol{w}\Vert = \sqrt{\sum_i w_i^2}
$$

要使得 $d$ 取最大值，即求 $f(x)$ 最小值，其中 $f(x)$ 的形式是为了计算简便而设计的，其定义如下

$$
f(x) = \frac{\Vert\boldsymbol{w}\Vert^2}{2}
$$

那么我们的优化目标为

$$
\argmin_{\boldsymbol{w},\,b} \frac{\Vert\boldsymbol{w}\Vert^2}{2}
$$

约束为

$$
\mathrm{s.t.} \quad y_i\left(\boldsymbol{w} \cdot \boldsymbol{x}_i + b\right) \geqslant 1,\,
i \in \overline{1,\, n}
$$

我们需要使用拉格朗日乘数法解决其无约束的对偶问题，进而求解，并使用序列最小优化算法。这部分不详细介绍，我们直接给出最终结果。
