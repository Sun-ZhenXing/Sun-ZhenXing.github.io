---
title: 奥林匹克计数谜题
date: 2023-04-05
category:
    - 奇思妙想
tag:
    - 数学
---

3Blue1Brown 奥林匹克计数谜题讲解，视频地址 [YouTube](https://www.youtube.com/watch?v=bOXCLR3Wric&t=8s)。

<!-- more -->

## 1. 原题重述

本题来源于 3Blue1Brown 在 [YouTube: Olympiad level counting](https://www.youtube.com/watch?v=bOXCLR3Wric&t=8s) 视频中介绍的题目，其原题目出自 *Titus Andreescu & Zuming Feng. Combinatorial Problems*，如果你想了解更多，推荐看原视频。

原题：Find the number of subsets of $\{1,\,\cdots,\,2000\}$, the sum of whose elements is divisible by $5$.

翻译：对于集合 $\{1,\,2,\,3,\,\cdots,\,2000\}$，它有多少个子集满足条件：子集中所有数之和能被 $5$ 整除？

首先，我们先举几个例子。对于子集 $\{3,\,1,\,4\}$，其和为 $8$，不满足条件，因此它不是结果之一。而对于子集 $\{2,\,3,\,5\}$，其和为 $10$，满足条件。

### 1.1 穷举法

如果使用穷举法，是一定能计算出来的，只不过使用计算机计算所需的时间可能要超过宇宙历史。因为这个 $2000$ 个元素集合的子集个数为

$$
2^{2000} = \overbrace{1148 \cdots 376}^{603}
\approx 1.148 \times 10^{602}
$$

我们猜测，每一种情况（和模 $5$ 的数字分别是 $0,\,1,\,2,\,3,\,4$）的子集应该是大致相等的，我们猜测结果为

$$
\frac{1}{5} \cdot 2^{2000}
$$

很不幸这个数字不是整数，我们想知道确切结果。

但是穷举法对于少数几个的数字也是可以计算的，例如 $5$ 个：

```python
set_length = 5
s = 1 << set_length

count = 0
for i in range(s):
    bin_repr = bin(i).removeprefix('0b').zfill(set_length)[::-1]
    subset = [
        k for k, v in zip(range(1, set_length + 1), bin_repr)
        if v == '1'
    ]
    print(subset)
    sum_subset = sum(subset)
    if sum_subset % 5 == 0:
        count += 1
print(count)
```

我们通过手动计算，也可以得到 $5$ 个元素的数组满足条件的子集有 $8$ 个。

我们把不同的子集归类一下：

```python
[
    [],
    [1],
    [2],
    [1, 2], [3],
    [1, 3], [4],
    [2, 3], [1, 4], [5],
    [1, 2, 3], [2, 4], [1, 5],
    [1, 2, 4], [3, 4], [2, 5],
    [1, 3, 4], [1, 2, 5], [3, 5],
    [2, 3, 4], [1, 3, 5], [4, 5],
    [1, 2, 3, 4], [2, 3, 5], [1, 4, 5],
    [1, 2, 3, 5], [2, 4, 5],
    [1, 2, 4, 5], [3, 4, 5],
    [1, 3, 4, 5],
    [2, 3, 4, 5],
    [1, 2, 3, 4, 5]
]
```

和相同的子集被安排在同一行，计算它们的个数，发现它们居然存在某种对称？

### 1.2 生成函数

考虑生成函数

$$
p\left(x\right) = \left(1 + x^1\right)\left(1 + x^2\right)\left(1 + x^3\right)\left(1 + x^4\right)\left(1 + x^5\right)
$$

我们将每个项展开，每个变量的系数就是和为指数的子集数量。

很神奇？可以使用项的选择来解释，也可以使用二项式定理解释，具体可以自行理解。

**生成函数**

作者在此举例了斐波那契数列的一种非常有趣的解法。

不妨定义斐波那契数列 $\{f_n\}$ 如下：

$$
\begin{aligned}
    f_0 &= 0 \\
    f_1 &= 1 \\
    f_{i} &= f_{i-1} + f_{i-2},\, i \geqslant 2
\end{aligned}
$$

构造生成函数

$$
F(x) = 0 + 1x^1 + 1x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + \cdots
$$

由于 $f_{i} = f_{i-1} + f_{i-2}$ 显然有

$$
F(x) = xF(x) + x^2F(x) + x
$$

解得

$$
F(x) = \frac{x}{1 - x - x^2}
$$

我们给它做一点变形：

$$
\begin{aligned}
    F(x) &= \frac{x}{1 - x - x^2} \\
    &= \frac{x}{\left(1 - \varphi x\right)\left(1 + \frac{1}{\varphi}x\right)} \\
    &= \frac{1 / \sqrt{5}}{1 - \varphi x} - \frac{1/\sqrt{5}}{}
\end{aligned}
$$

[^1]: <https://puzzlingthroughmed.com/olympiad-counting-puzzle/>
