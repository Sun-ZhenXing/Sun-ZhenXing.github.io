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
