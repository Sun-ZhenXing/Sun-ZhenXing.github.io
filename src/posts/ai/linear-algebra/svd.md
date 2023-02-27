---
title: SVD 分解
date: 2023-02-27
category:
  - AI
  - 线性代数
tag:
  - AI
  - 线性代数
  - SVD
---

SVD 分解简单总结。

<!-- more -->

[[TOC]]

## 1. 矩阵分解

矩阵分解的作用：[^1]

[^1]: 机器学习中 SVD 总结，Microstrong，<https://mp.weixin.qq.com/s/Dv51K8JETakIKe5dPBAPVg>

- 矩阵填充（通过矩阵分解来填充原有矩阵，例如协同过滤的ALS算法就是填充原有矩阵）
- 清理异常值与离群点
- 降维、压缩
- 个性化推荐
- 间接的特征组合（计算特征间相似度）

## 2. 特征分解

### 2.1 特征值和特征向量

如果一个向量 $\boldsymbol{v}$ 是矩阵 $\boldsymbol{A}$ 的特征向量，将一定可以表示成下面的形式：

$$
\boldsymbol{A}\boldsymbol{v} = \lambda \boldsymbol{v}
$$

其中，$\lambda$ 是特征向量 $\boldsymbol{v}$ 对应的特征值，一个矩阵的一组特征向量是一组正交向量。

### 2.2 特征值分解

对于矩阵 $\boldsymbol{A}$，有一组特征向量 $\boldsymbol{v}$，将这组向量进行正交化单位化，就能得到一组正交单位向量。特征值分解，就是将矩阵 $\boldsymbol{A}$ 分解为如下式：

$$
\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{\Sigma}\boldsymbol{Q^{-1}}
$$

其中，$\boldsymbol{Q}$ 是矩阵 $\boldsymbol{A}$ 的特征向量组成的矩阵，$\boldsymbol{\Sigma}$ 则是一个对角阵，对角线上的元素就是特征值。

解特征值的方式很简单，通过定义我们可以得到

$$
\left| \boldsymbol{A} - \lambda \boldsymbol{E} \right| = 0
$$

其中 $\boldsymbol{E}$ 为单位矩阵。

通过特征方程得到特征值，从而求出特征向量。

::: details 特征值分解示例

定义方阵 $\boldsymbol{A}$ 为

$$
\boldsymbol{A} = \begin{bmatrix}
  -1 & 1 & 0 \\
  -4 & 3 & 0 \\
  1  & 0 & 2
\end{bmatrix}
$$

下面对 $\boldsymbol{A}$ 进行特征值分解。

首先，由方阵 $\boldsymbol{A}$ 的特征方程，求出特征值：

$$
\begin{aligned}
  \left| \boldsymbol{A} - \lambda \boldsymbol{E} \right|
  &= \begin{vmatrix}
    -1 - \lambda & 1 & 0 \\
    -4 & 3 - \lambda & 0 \\
    1 & 0 & 2 - \lambda
  \end{vmatrix} \\
  &= \left(2 - \lambda\right)\begin{vmatrix}
    -1 - \lambda & 1 \\
    -4 & 3 - \lambda
  \end{vmatrix} \\
  &= (2 - \lambda)(\lambda - 1)^2 \\
  &= 0
\end{aligned}
$$

解得 $\lambda = 1,\,2$，其中 $2$ 为重根。

当 $\lambda = 2$ 时，求出 $\boldsymbol{A} - 2\boldsymbol{E}$，过程如下

$$
\begin{aligned}
  \boldsymbol{A} - 2\boldsymbol{E}
  &= \begin{bmatrix}
    -3 & 1 & 0 \\
    -4 & 1 & 0 \\
    1 & 0 & 0
  \end{bmatrix} \\
  &\to \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 0
  \end{bmatrix}
\end{aligned}
$$

解得 $x_1 = 0$，$x_2 = 0$，取特征向量为 $v_1 = \begin{bmatrix}0 \\ 0 \\ 1\end{bmatrix}$。

同理当 $\lambda = 1$ 时，特征向量为 $v_2 = \begin{bmatrix}-1 \\ -2 \\ 1\end{bmatrix}$。

方阵 $\boldsymbol{A}$ 的特征分解为

$$
\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{\Sigma}\boldsymbol{Q}^{\mathsf{T}} =
\begin{bmatrix}
  0 & -1 & -1 \\
  0 & -2 & -2 \\
  1 & 1 & 1
\end{bmatrix}
\begin{bmatrix}
  2 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
  0 & -1 & -1 \\
  0 & -2 & -2 \\
  1 & 1 & 1
\end{bmatrix}^{-1}
$$

:::

特征值分解只能用于方阵，而且不是每个方阵都能进行特征值分解（无解时，但可表示出复矩阵），我们下面要介绍的奇异值分解就是要解决这个问题。

## 3. SVD 分解

### 3.1 奇异值分解

奇异值分解是一个能适用于任意矩阵的一种分解的方法，对于任意矩阵 $\boldsymbol{A}$ 总是存在一个奇异值分解：

$$
\boldsymbol{A} = \boldsymbol{U}\boldsymbol{\Sigma}\boldsymbol{V}^{\mathsf{T}}
$$

假设 $\boldsymbol{A}$ 是一个 $m \times n$ 的矩阵，那么得到的 $\boldsymbol{U}$ 是一个 $m \times m$ 方阵，$\boldsymbol{U}$ 里面的正交向量被称为左奇异向量。$\boldsymbol{\Sigma}$ 是一个 $m \times n$ 的矩阵，$\boldsymbol{\Sigma}$ 是对角矩阵，对角线上的元素称为奇异值。
