---
title: LeetCode 计划
date: 2023-04-05
category:
    - 奇思妙想
tag:
    - 算法
---

LeetCode 临时仓库，用于存放一些临时的算法题解。

<!-- more -->

[[TOC]]

## 1. LeetCode 题库计划

使用 Sanic + Nuxt3 搭建一个 LeetCode 题库，用于存放平时练习的算法题解，开放源代码用于给他人交流算法题解。

## 2. LeetCode 题解

### 1359. 有效的快递序列数目

排列组合插空法。初始条件下有一种情况，只有 $2$ 个位置，形成 $3$ 个空位。

```text
@ P1 @ D1 @
```

第二份快递可以选择这 $3$ 个空位，空位用 `@` 表示，那么总的情况是

$$
\mathrm{C}_3^2 + \mathrm{C}_3^1 = 6
$$

可以推导，第 $i$ 个有 $2i - 1$ 个空，插空时可以选择插入在两个空上，也可以是一个空，那么总数即为

$$
\mathrm{res} = \mathrm{res} \times \left(\mathrm{C}_{2i-1}^2 + \mathrm{C}_{2i-1}^{1}\right)
$$

接着化简这个式子

$$
\begin{aligned}
    \mathrm{C}_{2i-1}^2 + \mathrm{C}_{2i-1}^{1} &
    = \frac{\left(2i-1\right)\left(2i-2\right)}{2} + 2i-1 \\ &
    = \frac{4i^2 -6i + 2}{2} + 2i-1 \\ &
    = 2i^2-i \\ &
    = i \times \left(2i-1\right)
\end{aligned}
$$

即递推公式为

$$
\mathrm{res} = \mathrm{res} \times i \times (2i-1)
$$

::: code-tabs

@tab cpp

```cpp
class Solution {
public:
    int countOrders(int n) {
        long long res = 1;
        for (int i = 2; i <= n; ++i)
            res = res * i * (2 * i - 1) % 1000000007;
        return res;
    }
};
```

@tab python

```python
class Solution:
    def countOrders(self, n: int) -> int:
        res = 1
        for i in range(2, n + 1):
            res = res * i * (2 * i - 1) % 1000000007
        return res
```

:::

### 1920. 基于排列构建数组

位运算优化的原地操作算法。

::: code-tabs

@tab cpp

```cpp
class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        int n = nums.size();
        int mask = (1 << 10) - 1;
        for (int i = 0; i < n; ++i)
            nums[i] |= (nums[nums[i]] & mask) << 10;
        for (int i = 0; i < n; ++i)
            nums[i] >>= 10;
        return nums;
    }
};
```

@tab python

```python
class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        mask = (1 << 10) - 1
        for i in range(n):
            nums[i] |= (nums[nums[i]] & mask) << 10
        for i in range(n):
            nums[i] >>= 10
        return nums
```

:::

### 2063. 所有子字符串中的元音

组合问题，如果一个字符是元音字母，那么 `res` 必然加上它组成的子串总数，子串计算方法如下。

假设字符串有 $8$ 个字符，我们发现 `e` 是元音字母

```text
b b c d e f g h
```

`e` 是第 $5$ 个字。

那么子串一定是从 `e` 的左边开始（也包括 `e`），到 `e` 的右边结束（也包括 `e`），总数即为

$$
\mathrm{C}_5^1 \cdot \mathrm{C}_4^1 = 5 \times 4 = 20
$$

如果两边都选择的是 `e`，那么这个子串即为它自身。

也就是说，遍历到第 $i$ 个时，`res += (i + 1) * (n - i)`。

::: code-tabs

@tab cpp

```cpp
class Solution {
public:
    long long countVowels(string word) {
        long long res = 0;
        int n = word.size();
        for (int i = 0; i < n; ++i) {
            if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u')
                res += ((long long)i + 1) * (n - i);
        }
        return res;
    }
};
```

@tab python

```python
META_CHAR = 'aeiou'
class Solution:
    def countVowels(self, word: str) -> int:
        res = 0
        n = len(word)
        for i, ch in enumerate(word):
            if ch in META_CHAR:
                res += (i + 1) * (n - i)
        return res
```

:::
