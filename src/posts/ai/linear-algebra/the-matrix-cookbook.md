---
title: The Matrix Cookbook 中文翻译
date: 2023-02-28
category:
  - AI
  - 线性代数
tag:
  - AI
  - 线性代数
---

*The Matrix Cookbook* 部分翻译。

<!-- more -->

原作者：*Kaare Brandt Petersen* 和 *Michael Syskind Pedersen*，版本：**November 15, 2012**.

*The Matrix Cookbook* 收集与矩阵有关的事实。译本不提供参考文献，详细的参考文献也需要访问原文。本文只是少部分翻译，并不会按照原文全部写出，待补充。

如果有错误，请反馈到博客 Issue，如果经过查证是原文错误反馈到原作者邮箱 <cookbook@2302.dk>。

## 符号定义

|                 符号                  | 含义                                                                                                                         |
| :-----------------------------------: | :--------------------------------------------------------------------------------------------------------------------------- |
|           $\boldsymbol{A}$            | 矩阵                                                                                                                         |
|         $\boldsymbol{A}_{ij}$         | 矩阵的索引                                                                                                                   |
|         $\boldsymbol{A}_{i}$          | 矩阵的索引                                                                                                                   |
|         $\boldsymbol{A}^{ij}$         | 矩阵的索引                                                                                                                   |
|          $\boldsymbol{A}^n$           | 矩阵的索引或者方阵的 $n$ 次幂                                                                                                |
|         $\boldsymbol{A}^{-1}$         | $\boldsymbol{A}$ 的逆矩阵                                                                                                    |
|          $\boldsymbol{A}^+$           | $\boldsymbol{A}$ 的伪逆                                                                                                      |
|        $\boldsymbol{A}^{1/2}$         | $\boldsymbol{A}$ 的平方根（如果唯一的话）                                                                                    |
|        $(\boldsymbol{A})_{ij}$        | $\boldsymbol{A}$ 的 $(i,\,j)$ 位置的元素                                                                                     |
|               $A_{ij}$                | $\boldsymbol{A}$ 的 $(i,\,j)$ 位置的元素                                                                                     |
|        $[\boldsymbol{A}]_{ij}$        | $\boldsymbol{A}$ 的 $ij$-子矩阵，指删除了第 $i$ 行和第 $j$ 列的矩阵                                                          |
|           $\boldsymbol{a}$            | 向量（列向量）                                                                                                               |
|          $\boldsymbol{a}_i$           | 向量的索引                                                                                                                   |
|                 $a_i$                 | 向量的索引                                                                                                                   |
|                  $a$                  | 标量                                                                                                                         |
|                $\Re z$                | 标量的实数部分                                                                                                               |
|          $\Re\boldsymbol{z}$          | 向量的实数部分                                                                                                               |
|          $\Re\boldsymbol{Z}$          | 矩阵的实数部分                                                                                                               |
|                $\Im z$                | 标量的虚数部分                                                                                                               |
|          $\Im\boldsymbol{z}$          | 向量的虚数部分                                                                                                               |
|          $\Im\boldsymbol{Z}$          | 矩阵的虚数部分                                                                                                               |
|        $\det(\boldsymbol{A})$         | $\boldsymbol{A}$ 的行列式                                                                                                    |
|     $\mathrm{Tr}(\boldsymbol{A})$     | $\boldsymbol{A}$ 的迹                                                                                                        |
|    $\mathrm{diag}(\boldsymbol{A})$    | $\boldsymbol{A}$ 的对角化，例如 $(\mathrm{diag}(\boldsymbol{A}))_{ij} = \delta_{ij}A_{ij}$                                   |
|    $\mathrm{eig}(\boldsymbol{A})$     | $\boldsymbol{A}$ 的特征值                                                                                                    |
|    $\mathrm{vec}(\boldsymbol{A})$     | $\boldsymbol{A}$ 的向量版本                                                                                                  |
|                $\sup$                 | 集合的上确界                                                                                                                 |
|      $\Vert\boldsymbol{A}\Vert$       | $\boldsymbol{A}$ 的范数                                                                                                      |
|     $\boldsymbol{A}^{\mathsf{T}}$     | 矩阵的转置                                                                                                                   |
|    $\boldsymbol{A}^{-\mathsf{T}}$     | 矩阵的转置的逆矩阵，$\boldsymbol{A}^{-\mathsf{T}} = (\boldsymbol{A}^{-1})^{\mathsf{T}} = (\boldsymbol{A}^{\mathsf{T}})^{-1}$ |
|          $\boldsymbol{A}^*$           | 复共轭矩阵                                                                                                                   |
|      $\boldsymbol{A}^\mathsf{H}$      | 转置复共轭矩阵                                                                                                               |
|  $\boldsymbol{A}\circ\boldsymbol{B}$  | Hadamard 积（元素积）                                                                                                        |
| $\boldsymbol{A}\otimes\boldsymbol{B}$ | Kronecker 积                                                                                                                 |
|           $\boldsymbol{0}$            | 零矩阵，所有元素为 $0$                                                                                                       |
|           $\boldsymbol{I}$            | 单位矩阵                                                                                                                     |
|         $\boldsymbol{J}^{ij}$         | 单值矩阵，只有 $(i,\,j)$ 位置是 $1$，其他是 $0$                                                                              |
|         $\boldsymbol{\Sigma}$         | 正定矩阵                                                                                                                     |
|        $\boldsymbol{\Lambda}$         | 对角矩阵                                                                                                                     |

## 1. 基础

$$
\begin{align}
  (\boldsymbol{AB})^{-1} &= \boldsymbol{B}^{-1}\boldsymbol{A}^{-1} \\
  (\boldsymbol{ABC}\cdots)^{-1} &= \cdots\boldsymbol{C}^{-1}\boldsymbol{B}^{-1}\boldsymbol{A}^{-1} \\
  (\boldsymbol{A}^{\mathsf{T}})^{-1} &= (\boldsymbol{A}^{-1})^{\mathsf{T}} \\
  (\boldsymbol{A} + \boldsymbol{B})^{\mathsf{T}} &= \boldsymbol{A}^{\mathsf{T}} + \boldsymbol{B}^{\mathsf{T}} \\
  (\boldsymbol{A}\boldsymbol{B})^{\mathsf{T}} &= \boldsymbol{B}^{\mathsf{T}}\boldsymbol{A}^{\mathsf{T}} \\
  (\boldsymbol{ABC}\cdots)^{\mathsf{T}} &= \cdots\boldsymbol{C}^{\mathsf{T}}\boldsymbol{B}^{\mathsf{T}}\boldsymbol{A}^{\mathsf{T}} \\
  (\boldsymbol{A}^{\mathsf{H}})^{-1} &= (\boldsymbol{A}^{-1})^{\mathsf{H}} \\
  (\boldsymbol{A} + \boldsymbol{B})^{\mathsf{H}} &= \boldsymbol{A}^{\mathsf{H}} + \boldsymbol{B}^{\mathsf{H}} \\
  (\boldsymbol{A}\boldsymbol{B})^{\mathsf{H}} &= \boldsymbol{B}^{\mathsf{H}}\boldsymbol{A}^{\mathsf{H}} \\
  (\boldsymbol{ABC}\cdots)^{\mathsf{H}} &= \cdots\boldsymbol{C}^{\mathsf{H}}\boldsymbol{B}^{\mathsf{H}}\boldsymbol{A}^{\mathsf{H}} \\
\end{align}
$$

### 1.1 迹（Trace）

$$
\begin{align}
  \mathrm{Tr}(\boldsymbol{A}) &= \textstyle\sum_i A_{ii} \\
  \mathrm{Tr}(\boldsymbol{A}) &= \textstyle\sum_i \lambda_{i}, \quad \lambda_i = \mathrm{eig}(\boldsymbol{A}) \\
  \mathrm{Tr}(\boldsymbol{A}) &= \mathrm{Tr}(\boldsymbol{A}^{\mathsf{T}}) \\
  \mathrm{Tr}(\boldsymbol{AB}) &= \mathrm{Tr}(\boldsymbol{BA}) \\
  \mathrm{Tr}(\boldsymbol{A} + \boldsymbol{B}) &= \mathrm{Tr}(\boldsymbol{A}) + \mathrm{Tr}(\boldsymbol{B}) \\
  \mathrm{Tr}(\boldsymbol{ABC}) &= \mathrm{Tr}(\boldsymbol{BCA}) = \mathrm{Tr}(\boldsymbol{CAB}) \\
  \boldsymbol{a}^{\mathsf{T}}\boldsymbol{a} &= \mathrm{Tr}(\boldsymbol{a}\boldsymbol{a}^{\mathsf{T}})
\end{align}
$$

### 1.2 行列式（Determinant）

设 $\boldsymbol{A}$ 是一个 $n \times n$ 方阵。

$$
\begin{align}
  \det(\boldsymbol{A}) &= \prod_i \lambda_i, \quad \lambda_i = \mathrm{eig}(\boldsymbol{A}) \\
  \det(c\boldsymbol{A}) &= c^n\det(\boldsymbol{\boldsymbol{A}}), \quad \text{if } \boldsymbol{A} \in \R^{n \times n} \\
  \det(\boldsymbol{A}^{\mathsf{T}}) &= \det(\boldsymbol{A}) \\
  \det(\boldsymbol{AB}) &= \det(\boldsymbol{A})\det(\boldsymbol{B}) \\
  \det(\boldsymbol{A}^{-1}) &= 1 / \det(\boldsymbol{A}) \\
  \det(\boldsymbol{A}^n) &= \det(\boldsymbol{A})^n \\
  \det(\boldsymbol{I} + \boldsymbol{uv}^{\mathsf{T}}) &= 1 + \boldsymbol{u}^{\mathsf{T}}\boldsymbol{v}
\end{align}
$$

当 $n = 2$ 时：

$$
\begin{align}
  \det(\boldsymbol{I} + \boldsymbol{A}) &= 1 + \det(\boldsymbol{A}) + \mathrm{Tr}(\boldsymbol{A})  
\end{align}
$$

当 $n = 3$ 时：

$$
\begin{align}
  \det(\boldsymbol{I} + \boldsymbol{A}) &= 1 + \det(\boldsymbol{A}) + \mathrm{Tr}(\boldsymbol{A}) + \frac{1}{2}\mathrm{Tr}(\boldsymbol{A})^2 - \frac{1}{2}\mathrm{Tr}(\boldsymbol{A}^2)
\end{align}
$$

当 $n = 4$ 时：

$$
\begin{align}
  \det(\boldsymbol{I} + \boldsymbol{A}) &= 1 + \det(\boldsymbol{A}) + \mathrm{Tr}(\boldsymbol{A}) + \frac{1}{2} + \mathrm{Tr}(\boldsymbol{A})^2 - \frac{1}{2}\mathrm{Tr}(\boldsymbol{A}^2) + \frac{1}{6}\mathrm{Tr}(\boldsymbol{A})^3 - \frac{1}{2}\mathrm{Tr}(\boldsymbol{A})\mathrm{Tr}(\boldsymbol{A}^2) + \frac{1}{3}\mathrm{Tr}(\boldsymbol{A}^3)
\end{align}
$$

对于小的数 $\varepsilon$，下面的近似成立

$$
\begin{align}
  \det(\boldsymbol{I} + \varepsilon\boldsymbol{A}) &\cong
  1 + \det(\boldsymbol{A}) + \varepsilon\mathrm{Tr}(\boldsymbol{A}) + \frac{1}{2}\varepsilon^2\mathrm{Tr}(\boldsymbol{A})^2 - \frac{1}{2}\varepsilon^2\mathrm{Tr}(\boldsymbol{A}^2)
\end{align}
$$

### 1.3 2x2 的特殊情况

考虑矩阵 $\boldsymbol{A}$

$$
\boldsymbol{A} = \begin{bmatrix}
  A_{11} & A_{12} \\
  A_{21} & A_{22}
\end{bmatrix}
$$

行列式和迹

$$
\begin{align}
  \det(\boldsymbol{A}) &= A_{11}A_{22} - A_{12}A_{21} \\
  \mathrm{Tr}(\boldsymbol{A}) &= A_{11} + A_{22}
\end{align}
$$

特征值

$$
\begin{aligned}
  \lambda_1 &= \frac{\mathrm{Tr}(\boldsymbol{A}) + \sqrt{\mathrm{Tr}(\boldsymbol{A})^2 - 4\det(\boldsymbol{A})}}{2} \\
\lambda_2 &= \frac{\mathrm{Tr}(\boldsymbol{A}) - \sqrt{\mathrm{Tr}(\boldsymbol{A})^2 - 4\det(\boldsymbol{A})}}{2}
\end{aligned}
$$

$$
\begin{aligned}
  \lambda_1 + \lambda_2 &= \mathrm{Tr}(\boldsymbol{A}) \\
  \lambda_1\lambda_2 &= \det(\boldsymbol{A})
\end{aligned}
$$

特征向量

$$
\begin{aligned}
  \boldsymbol{v}_1 &\propto \begin{bmatrix}
    A_{12} \\
    \lambda_1 - A_{11}
  \end{bmatrix} \\
  \boldsymbol{v}_2 &\propto \begin{bmatrix}
    A_{12} \\
    \lambda_2 - A_{12}
  \end{bmatrix}
\end{aligned}
$$

$$
\begin{align}
  \boldsymbol{A}^{-1} &= \frac{1}{\det(\boldsymbol{A})}\begin{bmatrix}
    A_{22} & -A_{12} \\
    -A_{21} & A_{11}
  \end{bmatrix}
\end{align}
$$
