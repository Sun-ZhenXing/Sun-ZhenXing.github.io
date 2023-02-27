---
title: 统计学总结
date: 2023-02-27
category:
  - AI
  - 统计
tag:
  - AI
  - 统计
---

本文是统计的简单总结。

<!-- more -->

[[TOC]]

## 1. 离散数据集

### 1.1 中心倾向

*@def* 给定数据 $x_i\left(i=1,\ 2,\ \cdots,\ n\right)$，**均值**（Mean 或者 Average）定义如下

$$
\overline{x} = \frac{1}{n} \sum_{i}x_i
$$

*@def* **中位数**（Median）是指数据中间点的值（如果数据点的个数是奇数），或者中间两个点的平均值（如果数据点的个数是偶数）。

*@def* 中位数的一个泛化概念是 **分位数**（Quantile），它表示少于数据中特定百分比的一个值（中位数表示少于 $50\%$ 的数据的一个值）。

### 1.2 离散度

*@def* 一个简单的度量是 **极差**（Range），指最大元素与最小元素的差

$$
R = \max_{i}x_i - \min_{i}x_i
$$

*@def* 离散度的另一个更复杂的度量是 **方差**（Variance），样本方差定义如下

$$
\mathrm{Var}(x) = \sigma^2 = \frac{1}{n-1}\sum_i
\left(x_i - \overline{x}\right)^2
$$

*@def* 然而，用方差很难给出直观的比较，所以我们更常使用 **标准差**（Standard Deviation）

$$
\sigma = \sqrt{\frac{1}{n-1}\sum_i
\left(x_i - \overline{x}\right)^2}
$$

*@def* 此时，**标准误差**（Standard Error）的计算方法是

$$
\sigma_n = \frac{\sigma}{\sqrt{n}} = \sqrt{\frac{1}{n(n-1)}\sum_i
\left(x_i - \overline{x}\right)^2}
$$

### 1.3 相关性

*@def* **协方差**（Covariance），这个概念是方差的一个对应词。方差衡量了单个变量对均值的偏离程度，而协方差衡量了两个变量对均值的串联偏离程度，在概率论中用来刻画两个随机变量 $X, Y$ 之间的相关性。

如果两个变量的变化趋势一致，也就是说如果其中一个大于自身的期望值，另外一个也大于自身的期望值，那么两个变量之间的协方差就是正值。如果两个变量的变化趋势相反，即其中一个大于自身的期望值，另外一个却小于自身的期望值，那么两个变量之间的协方差就是负值。

协方差的公式如下

$$
\mathrm{Cov}(x,\;y) = \frac{1}{n-1}\sum_{i}
\left(x_i-\overline{x}\right)\left(y_i-\overline{y}\right)
$$

方差就是协方差的一种特殊形式，当两个变量相同时，协方差就是方差了。

*@def* **相关**（Correlation）是更常受到重视的概念，它是由协方差除以两个变量的标准差

$$
r(x,\;y) = \frac{\mathrm{Cov}(x,\;y)}{\sqrt{\mathrm{Var}(x)\mathrm{Var}(y)}}
$$

## 2. 随机变量

### 2.1 期望

*@def* 设随机变量 $X$ 只取有限个可能的值 $a_i(i=1,\ 2,\ \cdots,\ m)$，其概率分布为

$$
P(X=a_i) = p_i
$$

则 $X$ 的数学 **期望**（Expectation）为

$$
E[X] = \sum_{i}a_{i}p_{i}
$$

以后所说的 “数学期望” 就是指此处的 “期望”。

### 2.2 方差

*@def* 设随机变量 $X$ 的分布为 $F$，则 $X$ 或分布 $F$ 的 **方差**（Variance）为

$$
\mathrm{Var}(X) = E\left[(X-EX)^2\right]
$$

方差和标准差是刻画随机变量在其中心位置附近散布的数字特征。

### 2.3 协方差

*@def* 随机变量的 **协方差**（Covariance）定义如下

$$
\mathrm{Cov}(X,\;Y) = E[(X - E[X])(Y - E[Y])]
$$

化简得

$$
\mathrm{Cov}(X,\;Y) = E[XY] - E[X]E[Y]
$$

### 2.4 协方差矩阵

*@def* 定义多个数据集 $\boldsymbol{D}_i(i=1,\ 2,\ \cdots,\ d)$ 如果需要数据集中两两的协方差，定义为一个矩阵，就是 **协方差矩阵**（Covariance Matrix）

定义 $\sigma(x_i, x_i)$ 为 $i, j$ 两个数据集间的协方差，那么协方差矩阵定义为

$$
\Sigma = \begin{bmatrix}
    \sigma(x_1, x_1) & \sigma(x_1, x_2) & \cdots & \sigma(x_1, x_d) \\
    \sigma(x_2, x_1) & \sigma(x_2, x_2) & \cdots & \sigma(x_2, x_d) \\
    \vdots & \vdots & \ddots & \vdots \\
    \sigma(x_d, x_1) & \sigma(x_d, x_2) & \cdots & \sigma(x_d, x_d)
\end{bmatrix} \in \mathbf{R}^{d \times d}
$$

从上式可以看出，协方差矩阵中对角线上元素就是各个随机变量的方差，非对角线上的就是两两随机变量之间的协方差。

使用 Python 计算协方差矩阵：

```python
import numpy as np

def cov(x1: np.ndarray, x2: np.ndarray) -> float:
    """计算协方差"""
    x1mean, x2mean = x1.mean(), x2.mean()
    return np.sum((x1-x1mean) * (x2-x2mean)) / (len(x1)-1)

def covMatrix(X: np.ndarray) -> np.ndarray:
    """协方差矩阵"""
    return np.array([[cov(X[0], X[0]), cov(X[0], X[1])],
                     [cov(X[1], X[0]), cov(X[1], X[1])]])

if __name__ == '__main__':
    # 计算方法 1
    # 各取 500 个标准正态分布的数据
    x1 = np.random.normal(0, 1, 500)
    x2 = np.random.normal(0, 1, 500)
    # 将 x1, x2 以向量的形式排列起来
    data_X = np.stack((x1, x2))
    print(covMatrix(data_X))
    # 计算方法 2
    print(np.cov(data_X))
```

[^1]: [美]格鲁斯（Grus，J.）著；高蓉，韩波译，*数据科学入门*，人民邮电出版社，2016-03

[^2]: 统计学概念之——协方差，知乎，<https://zhuanlan.zhihu.com/p/358169835>，2021-08-20
