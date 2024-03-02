---
title: PCA：主成分分析
date: 2023-02-27
category:
  - AI
  - 线性代数
tag:
  - AI
  - 线性代数
  - PCA
---

主成分分析简单步骤。

<!-- more -->

## 1. PCA 介绍

在 [SVD：奇异值分解](./svd.md) 中，我们介绍了特征值分解和奇异值分解的基本方法，本节我们将使用这两种方法进行 **主成分分析**（Principal Component Analysis，PCA）。

## 2. 使用特征值分解进行 PCA

设有 $m$ 条 $n$ 维数据，需要降维到 $k$ 维（$k < n$），使用特征值进行 PCA 的基本步骤如下：

1. 将原始数据按列组成 $n$ 行 $m$ 列矩阵 $\boldsymbol{X}$
2. 将 $\boldsymbol{X}$ 的每一行（代表一个属性字段）进行零均值化，即减去这一行的均值
3. 求出协方差矩阵 $\boldsymbol{C} = \dfrac{1}{m}\boldsymbol{X}\boldsymbol{X}^{\mathsf{T}}$
4. 求出协方差矩阵 $\boldsymbol{C}$ 的特征值及对应的特征向量
5. 将特征向量按对应特征值大小从上到下按行排列成矩阵，取前 $k$ 行组成矩阵 $\boldsymbol{P}$
6. $\boldsymbol{Y} = \boldsymbol{P}\boldsymbol{X}$ 即为降维到 $k$ 维后的数据

## 3. 使用奇异值分解进行 PCA

@[code python](./src/pca.py)
