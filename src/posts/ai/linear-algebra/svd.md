---
title: 矩阵分解：EVD 和 SVD
date: 2023-02-27
category:
  - AI
  - 线性代数
tag:
  - AI
  - 线性代数
  - SVD
---

特征值分解（EVD）和奇异值分解（SVD）简单总结。

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

对于矩阵 $\boldsymbol{A}$，有一组特征向量 $\boldsymbol{v}$，将这组向量进行正交化单位化，就能得到一组正交单位向量。**特征值分解**（Eigenvalue decomposition，EVD），就是将矩阵 $\boldsymbol{A}$ 分解为如下式：

$$
\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{\Sigma}\boldsymbol{Q^{-1}}
$$

其中，$\boldsymbol{Q}$ 是矩阵 $\boldsymbol{A}$ 的特征向量组成的矩阵，$\boldsymbol{\Sigma}$ 则是一个对角阵，对角线上的元素就是特征值。

解特征值的方式很简单，通过定义我们可以得到

$$
\left| \boldsymbol{A} - \lambda \boldsymbol{I} \right| = 0
$$

其中 $\boldsymbol{I}$ 为单位矩阵。

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
  \left| \boldsymbol{A} - \lambda \boldsymbol{I} \right|
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

解得 $\lambda = 1,\,2$，其中 $1$ 为重根。

当 $\lambda = 2$ 时，求出 $\boldsymbol{A} - 2\boldsymbol{I}$，过程如下

$$
\begin{aligned}
  \boldsymbol{A} - 2\boldsymbol{I}
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

### 2.3 Python 实现特征值分解

SymPy 和 NumPy 均支持特征值分解，但 SymPy 是符号解，是精准值但更慢，适合研究。而 NumPy 为数值解，更快但有精度损失，适合生产。

SymPy 进行特征值分解：

```python
from sympy import Matrix

A = Matrix([[-1, 1, 0], [-4, 3, 0], [1, 0, 2]])

print(A.eigenvals())
# {1: 2, 2: 1}，特征值和其重根数量

print(A.eigenvects())
# [
#   (1, 2, [ Matrix([[-1], [-2], [ 1]]) ]),
#   (2, 1, [ Matrix([[0],  [0],  [1] ]) ]),
# ]
```

矩阵的 `.eigenvects()` 方法返回列表，每个列表是一个三元组，分别代表特征值、特征值的重根数和特征向量。

使用 NumPy 进行特征值分解：

```python
import numpy as np

A = np.array([[-1, 1, 0], [-4, 3, 0], [1, 0, 2]])
vals, vecs = np.linalg.eig(A)

print(vals)
# [2. 1. 1.]

print(vecs)
# [[ 0.          0.40824829  0.40824829]
#  [ 0.          0.81649658  0.81649658]
#  [ 1.         -0.40824829 -0.40824829]]
```

这里的特征向量和 SymPy 计算有所不同是因为 NumPy 进行了单位化。

## 3. SVD 分解

### 3.1 奇异值分解

特征值分解只能用于方阵，我们下面要介绍的 **奇异值分解**（Singular Value Decomposition，SVD）就是可以解决这个问题。

奇异值分解也有各种各样的用途：用 SVD 解 PCA、潜在语言索引也依赖于 SVD 算法。可以说，SVD 是矩阵分解、降维、压缩、特征学习的一个基础的工具，因而 SVD 在机器学习领域也相当的重要。

奇异值分解是一个能适用于任意矩阵的一种分解的方法，对于任意矩阵 $\boldsymbol{A}$ 总是存在一个奇异值分解：

$$
\boldsymbol{A} = \boldsymbol{U}\boldsymbol{\Sigma}\boldsymbol{V}^{\mathsf{T}}
$$

若 $\boldsymbol{A}$ 是一个 $m \times n$ 的矩阵，那么得到的 $\boldsymbol{U}$ 是一个 $m \times m$ 方阵，$\boldsymbol{U}$ 里面的正交向量被称为左奇异向量。$\boldsymbol{\Sigma}$ 是一个 $m \times n$ 的矩阵，且 $\boldsymbol{\Sigma}$ 是对角矩阵，对角线上的元素称为奇异值。$\boldsymbol{V}$ 是 $n \times n$ 矩阵，且 $U$ 和 $V$ 都是酉矩阵。

那么我们如何计算左奇异向量、右奇异向量和奇异值呢？我们可以把奇异值和特征值联系起来。

首先，我们用矩阵 $\boldsymbol{A}$ 的转置乘 $\boldsymbol{A}$，得到一个方阵，这样我们可以用方阵进行特征分解，得到特征值和特征向量满足下面的等式：

$$
\left(\boldsymbol{A}^{\mathsf{T}}\boldsymbol{A}\right)\boldsymbol{v}_i =
\lambda_i\boldsymbol{v}_i
$$

这里的 $\boldsymbol{v}_i$ 就是右奇异向量，同理我们用下面的等式得到左奇异向量 $\boldsymbol{u}_i$：

$$
\left(\boldsymbol{A}\boldsymbol{A}^{\mathsf{T}}\right)\boldsymbol{u}_i =
\lambda_i\boldsymbol{u}_i
$$

当然以上结论只是我们的设想，下面进行证明，如果对证明细节不感兴趣可以忽略。

::: details 证明

$$
\begin{aligned}
  && \boldsymbol{A} &= \boldsymbol{U}\boldsymbol{\Sigma}\boldsymbol{V}^{\mathsf{T}} \\
  & \Rightarrow & \boldsymbol{A}^{\mathsf{T}} &=
  \boldsymbol{V}\boldsymbol{\Sigma}^{\mathsf{T}}\boldsymbol{U}^{\mathsf{T}} \\
  & \Rightarrow & \boldsymbol{A}^{\mathsf{T}}\boldsymbol{A} &=
  \boldsymbol{V}\boldsymbol{\Sigma}^{\mathsf{T}}\boldsymbol{U}^{\mathsf{T}}
  \boldsymbol{U}\boldsymbol{\Sigma}\boldsymbol{V}^{\mathsf{T}} \\
  &&&= \boldsymbol{V}\boldsymbol{\Sigma}^{2}\boldsymbol{V}^{\mathsf{T}}
\end{aligned}
$$

提示：若 $\boldsymbol{U}$ 是实矩阵，且 $\boldsymbol{U}^{\mathsf{T}}\boldsymbol{U} = \boldsymbol{I}$，那么 $\boldsymbol{U}$ 是实对称矩阵。

从上面的结论可以看出 $\boldsymbol{A}^{\mathsf{T}}\boldsymbol{A}$ 的特征向量就是 SVD 中的 $\boldsymbol{V}$ 矩阵。同理 $\boldsymbol{A}\boldsymbol{A}^{\mathsf{T}}$ 的特征矩阵为 $\boldsymbol{U}$。

:::

从证明中，我们得出求出奇异值的两种方法：

第一种方式是通过 $\boldsymbol{A}\boldsymbol{v}_i = \sigma_i\boldsymbol{u}_i$ 得到 $\sigma_i = \boldsymbol{A}\boldsymbol{v_i}\boldsymbol{u}_i^{\mathsf{T}}$

第二种是通过 $\boldsymbol{A}^{\mathsf{T}}\boldsymbol{A} = \boldsymbol{V}\boldsymbol{\Sigma}^{2}\boldsymbol{V}^{\mathsf{T}}$ 得出结论，特征值矩阵等于奇异值矩阵平方，也就是说特征值和奇异值满足如下关系

$$
\sigma_i = \sqrt{\lambda_i}
$$

::: details 奇异值分解示例

矩阵 $\boldsymbol{A}$ 定义为

$$
\boldsymbol{A} = \begin{bmatrix}
  0 & 1 \\
  1 & 1 \\
  1 & 0
\end{bmatrix}
$$

首先计算 $\boldsymbol{A}^{\mathsf{T}}\boldsymbol{A}$ 和 $\boldsymbol{A}\boldsymbol{A}^{\mathsf{T}}$：

$$
\boldsymbol{A}^{\mathsf{T}}\boldsymbol{A} =
\begin{bmatrix}
  0 & 1 & 1 \\
  1 & 1 & 0
\end{bmatrix}
\begin{bmatrix}
  0 & 1 \\
  1 & 1 \\
  1 & 0
\end{bmatrix} =
\begin{bmatrix}
  2 & 1 \\
  1 & 2
\end{bmatrix}
$$

$$
\boldsymbol{A}\boldsymbol{A}^{\mathsf{T}} =
\begin{bmatrix}
  0 & 1 \\
  1 & 1 \\
  1 & 0
\end{bmatrix}
\begin{bmatrix}
  0 & 1 & 1 \\
  1 & 1 & 0
\end{bmatrix} =
\begin{bmatrix}
  1 & 1 & 0 \\
  1 & 2 & 1 \\
  0 & 1 & 1
\end{bmatrix}
$$

然后，求出 $\boldsymbol{A}^{\mathsf{T}}\boldsymbol{A}$ 和 $\boldsymbol{A}\boldsymbol{A}^{\mathsf{T}}$ 的特征值和特征向量：

1. $\boldsymbol{A}^{\mathsf{T}}\boldsymbol{A}$ 的特征值和特征向量
    $$
    \lambda_1 = 3,\,
    \boldsymbol{v}_1 = \begin{bmatrix}
      1 / \sqrt{2} \\
      1 / \sqrt{2}
    \end{bmatrix}
    $$
    $$
    \lambda_2 = 1,\,
    \boldsymbol{v}_2 = \begin{bmatrix}
      -1 / \sqrt{2} \\
      1 / \sqrt{2}
    \end{bmatrix}
    $$
2. $\boldsymbol{A}\boldsymbol{A}^{\mathsf{T}}$ 的特征值和特征向量
    $$
    \lambda_1 = 3,\,
    \boldsymbol{u}_1 = \begin{bmatrix}
      1 / \sqrt{6} \\
      2 / \sqrt{6} \\
      1 / \sqrt{6}
    \end{bmatrix}
    $$
    $$
    \lambda_2 = 1,\,
    \boldsymbol{u}_2 = \begin{bmatrix}
      1 / \sqrt{2} \\
      0 \\
      -1 / \sqrt{2}
    \end{bmatrix}
    $$
    $$
    \lambda_3 = 0,\,
    \boldsymbol{u}_3 = \begin{bmatrix}
      1 / \sqrt{3} \\
      -1 / \sqrt{3} \\
      1 / \sqrt{3}
    \end{bmatrix}
    $$

其次，我们利用 $\boldsymbol{A}\boldsymbol{v}_i = \sigma_i\boldsymbol{u}_i$，$i = 1,\,2$，求奇异值：

$$
\begin{bmatrix}
  0 & 1 \\
  1 & 1 \\
  1 & 0
\end{bmatrix}
\begin{bmatrix}
  1 / \sqrt{2} \\
  1 / \sqrt{2}
\end{bmatrix} = \sigma_1
\begin{bmatrix}
  1 / \sqrt{6} \\
  2 / \sqrt{6} \\
  1 / \sqrt{6}
\end{bmatrix} \Rightarrow
\sigma_1 = \sqrt{3}
$$

$$
\begin{bmatrix}
  0 & 1 \\
  1 & 1 \\
  1 & 0
\end{bmatrix}
\begin{bmatrix}
  1 / \sqrt{2} \\
  -1 / \sqrt{2}
\end{bmatrix} = \sigma_2
\begin{bmatrix}
  1 / \sqrt{2} \\
  0 \\
  -1 / \sqrt{2}
\end{bmatrix} \Rightarrow
\sigma_2 = 1
$$

当然，最简单的方式是直接利用结论 $\sigma_i = \sqrt{\lambda_i}$ 得出奇异值。

最后，我们得到 $\boldsymbol{A}$ 的奇异值分解为

$$
\boldsymbol{A} = \boldsymbol{U}\boldsymbol{\Sigma}\boldsymbol{V}^{\mathsf{T}} =
\begin{bmatrix}
  1 / \sqrt{6} & 1 / \sqrt{2} & 1 / \sqrt{3} \\
  2 / \sqrt{6} & 0 & -1 / \sqrt{3} \\
  1 / \sqrt{6} & -1 / \sqrt{2} & 1 / \sqrt{3}
\end{bmatrix}
\begin{bmatrix}
  \sqrt{3} & 0 \\
  0 & 1 \\
  0 & 0
\end{bmatrix}
\begin{bmatrix}
  1 / \sqrt{2} & 1 / \sqrt{2} \\
  -1 / \sqrt{2} & 1 / \sqrt{2}
\end{bmatrix}
$$

此时 $\boldsymbol{\Sigma}$ 不为方阵，最后一行一定为 $0$，我们可以直接将其删去，因此也不需要计算最后一个特征值为 $0$ 的特征向量。直接写为：

$$
\boldsymbol{A} = \boldsymbol{U}\boldsymbol{\Sigma}\boldsymbol{V}^{\mathsf{T}} =
\begin{bmatrix}
  1 / \sqrt{6} & 1 / \sqrt{2} \\
  2 / \sqrt{6} & 0 \\
  1 / \sqrt{6} & -1 / \sqrt{2}
\end{bmatrix}
\begin{bmatrix}
  \sqrt{3} & 0 \\
  0 & 1
\end{bmatrix}
\begin{bmatrix}
  1 / \sqrt{2} & 1 / \sqrt{2} \\
  -1 / \sqrt{2} & 1 / \sqrt{2}
\end{bmatrix}
$$

:::

### 3.2 Python 实现奇异值分解

这里还是使用 SymPy 进行符号解和 NumPy 进行数值解两种方法。

SymPy 有求奇异值和奇异值分解的方法：

```python
from sympy.matrices import Matrix

A = Matrix([[0, 1], [1, 1], [1, 0]])

print(A.singular_values())
# [sqrt(3), 1]

U, S, VH = A.singular_value_decomposition()
print(U)
# Matrix([[sqrt(2)/2, sqrt(6)/6],
#         [0, sqrt(6)/3],
#         [-sqrt(2)/2, sqrt(6)/6]])

print(S)
# Matrix([[1, 0],
#         [0, sqrt(3)]])

print(VH)
# Matrix([[-sqrt(2)/2, sqrt(2)/2],
#         [sqrt(2)/2, sqrt(2)/2]])
```

下面是 NumPy 进行奇异值分解的方法：

```python
import numpy as np

A = np.array([[0, 1], [1, 1], [1, 0]])
U, S, VH = np.linalg.svd(A)

print(U)
# [[-4.08248290e-01  7.07106781e-01  5.77350269e-01]
#  [-8.16496581e-01  2.64811510e-17 -5.77350269e-01]
#  [-4.08248290e-01 -7.07106781e-01  5.77350269e-01]]

print(S)
# [1.73205081 1.        ]

print(VH)
# [[-0.70710678 -0.70710678]
#  [-0.70710678  0.70710678]]
```
