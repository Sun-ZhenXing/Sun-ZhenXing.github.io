---
title: 附录 A：数学公式
icon: fluent:math-formula-24-filled
---

[[TOC]]

## 1. 斜率、波动率和相关系数

斜率对应 Excel 函数 `SLOPE`，表示线性回归线的斜率。

$$
k = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n} (x_i - \bar{x})^2} = \frac{\mathrm{Cov}(x,\, y)}{\mathrm{Var}(x)}
$$

波动率对应 Excel 函数 `STDEV`，表示样本标准差。

$$
\sigma = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}} = \sqrt{\frac{\mathrm{Var}(x)}{n-1}}
$$

相关系数对应 Excel 函数 `CORREL`，表示两个变量之间的相关性。

$$
r = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n} (x_i - \bar{x})^2} \sqrt{\sum_{i=1}^{n} (y_i - \bar{y})^2}} = \frac{\mathrm{Cov}(x,\, y)}{\sigma_x \sigma_y}
$$
