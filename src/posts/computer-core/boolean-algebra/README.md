---
title: 逻辑代数
date: 2023-11-16
category:
  - 计算机核心知识
tag:
  - 逻辑代数
---

逻辑代数基础。

<!-- more -->

[[TOC]]

## 1. 逻辑代数简介

*@def* 在数学和数理逻辑中，**逻辑代数**（Boolean algebra）是代数的一个分支，其变量的值仅为真和假两种真值（通常记作 $1$ 和 $0$）。逻辑代数也被称为 **布尔代数** 或 **开关代数**。[^1]

[^1]: 逻辑代数，维基百科，<https://zh.wikipedia.org/wiki/%E9%80%BB%E8%BE%91%E4%BB%A3%E6%95%B0>

初等代数中变量的值是数字，而且主要的运算是加法、乘法和乘方（以及它们的逆运算），而逻辑代数的主要运算有合取（与），记为 $\land$；析取（或），记为 $\lor$；否定（非），记为 $\lnot$。因此，它是以普通代数描述数字关系相同的方式来描述逻辑关系的形式主义。

逻辑代数一直是 *数字电路设计* 的基础，并且所有现代 *编程语言* 提供支持。它也用在集合论和统计学中。

## 2. 定义

### 2.1 逻辑变量和逻辑函数

*@def* 参与逻辑运算的变量叫 **逻辑变量**，用大写字母 $A,\,B,\,\cdots$ 表示。每个变量的取值非 $0$ 即 $1$。 $0$、$1$ 不表示数的大小，而是代表两种不同的逻辑状态。

*@def* 逻辑代数的 **基本逻辑运算符号** 有合取（与），记为 $\land$；析取（或），记为 $\lor$；否定（非），记为 $\lnot$。默认的计算优先级为否定大于合取大于析取，使用括号改变运算优先级。

一般在数字电路中，我们使用符号 $\cdot$ 来表示逻辑与（像乘号一样可以省略），符号 $+$ 来表示逻辑或，符号 $-$ 来表示逻辑非。

用这几个符号来代替逻辑运算符号，可以使逻辑运算更加简洁。这一点可以类别于数学中的加法、乘法、减法，但是逻辑运算的结果只有 $0$ 和 $1$ 两种可能。

|  逻辑公式   |      数学运算       |
| :---------: | :-----------------: |
| $A \lor B$  | $A + B - A \cdot B$ |
| $A \land B$ |     $A \cdot B$     |
|  $\lnot A$  |       $1 - A$       |

为了表示方便，我们不妨假设，$1 + 1 = 1$（其实并没有什么问题，此处的 $+$ 是逻辑运算 $\lor$），这样逻辑运算和经典的数学运算就没什么区别了。

|  逻辑公式   |    简化版本    |
| :---------: | :------------: |
| $A \lor B$  |    $A + B$     |
| $A \land B$ |      $AB$      |
|  $\lnot A$  | $\overline{A}$ |

*@def* **逻辑函数** 是由逻辑变量 $A,\,B,\,\cdots$ 和基本逻辑运算符号组成的表达式。例如：

$$
F = A\overline{B} + \overline{A}BC + A\overline{C}
$$

式中，$A$、$B$、$C$ 称为 **原变量**，$\overline{A}$、$\overline{B}$、$\overline{C}$ 称为对应的 **反变量**，$F$ 称为 **逻辑函数**（$F$ 称为 **逻辑反函数**）。

### 2.2 真值表

*@def* **真值表** 是逻辑函数的一种表示方法，用来计算逻辑表示式在每种论证（即每种逻辑变数取值的组合）上的值。

例如上述的 $F$ 的真值表如下：

|  $A$  |  $B$  |  $C$  |  $F$  |
| :---: | :---: | :---: | :---: |
|  $0$  |  $0$  |  $0$  |  $0$  |
|  $0$  |  $0$  |  $1$  |  $0$  |
|  $0$  |  $1$  |  $0$  |  $0$  |
|  $0$  |  $1$  |  $1$  |  $1$  |
|  $1$  |  $0$  |  $0$  |  $1$  |
|  $1$  |  $0$  |  $1$  |  $1$  |
|  $1$  |  $1$  |  $0$  |  $1$  |
|  $1$  |  $1$  |  $1$  |  $0$  |

参阅下面的 [符号解算](#5-符号解算) 来了解如何编程计算真值表。

对于二元运算符，我们使用紧凑形式的真值表，如：

| $\land$ |  $0$  |  $1$  |
| :-----: | :---: | :---: |
|   $0$   |  $0$  |  $0$  |
|   $1$   |  $0$  |  $1$  |

## 3. 运算公式

### 3.3 运算性质类比

逻辑代数的运算性质可以和其他学科类目进行类别。

|  逻辑运算   |      数学运算       |
| :---------: | :-----------------: |
| $A \lor B$  | $A + B - A \cdot B$ |
| $A \land B$ |     $A \cdot B$     |
|  $\lnot A$  |       $1 - A$       |

|  逻辑运算   |                 概率运算                  |
| :---------: | :---------------------------------------: |
| $A \lor B$  | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| $A \land B$ |               $P(A \cap B)$               |
|  $\lnot A$  |                $1 - P(A)$                 |

我们所熟知的集合运算也可以类比为逻辑运算。

|     定律     |                           集合论                           |                    逻辑代数                    |
| :----------: | :--------------------------------------------------------: | :--------------------------------------------: |
| 交换律（并） |                   $A \cup B = B \cup A$                    |                $A + B = B + A$                 |
| 交换律（交） |                   $A \cap B = B \cap A$                    |                  $A B = B A$                   |
| 结合律（并） |          $(A \cup B) \cup C = A \cup (B \cup C)$           |          $(A + B) + C = A + (B + C)$           |
| 结合律（交） |          $(A \cap B) \cap C = A \cap (B \cap C)$           |               $(A B) C = A(BC)$                |
| 分配律（并） |      $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$      |           $A + BC = (A + B)(A + C)$            |
| 分配律（交） |      $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$      |              $A(B + C) = AB + AC$              |
|    幂等律    |              $\complement(\complement A) = A$              |         $\overline{\overline{A}} = A$          |
| 摩根律（并） | $\complement(A \cup B) = \complement A \cap \complement B$ | $\overline{A + B} = \overline{A} \overline{B}$ |
| 摩根律（交） | $\complement(A \cap B) = \complement A \cup \complement B$ | $\overline{A B} = \overline{A} + \overline{B}$ |

## 4. 逻辑电路模拟

## 5. 符号解算

### 5.1 开始使用 SymPy

符号计算和数值计算是两种不同的计算方式。在研究的过程中，我们经常需要对一些复杂的表达式进行化简，带入求值，求出的值常常也是符号而不是浮点数，这常常都需要专业的数学软件来完成，如 MATLAB、Mathematica 等。

例如求方方程 $x^2 - 2x - 1 = 0$ 的解，我们期望计算的结果是 $1 \pm \sqrt{2}$，而不是 $−0.414213562373095$ 和 $2.41421356237309$（可以尝试 [在线计算](https://www.sympygamma.com/input/?i=solve%28x**2-2*x-1%29)）。

Python 著名的符号计算库 [SymPy](https://sympy.org/) 提供了逻辑学功能，可以用来对逻辑函数进行带入求值、计算真值表等功能。

如果你还没有安装过 SymPy，确保你的电脑上已经安装了 Python 3，然后在命令行中输入：

```bash
pip install sympy
```

下面就可以编程进行符号解算了。例如解方程 $x^2 + 2x + 1 = 0$：

```python
from sympy import *
from sympy.abc import *

print(solve(x**2 - 2*x - 1))
```

输出的结果是：

```python
[1 - sqrt(2), 1 + sqrt(2)]
```

### 5.2 使用 SymPy 计算逻辑函数

在 SymPy 中使用 `|` 表示逻辑或，`&` 表示逻辑与，`~` 表示逻辑非。

```python
y | (x & y)
x | y
~x
```

通用也支持蕴含（`>>`、`<<`）、异或（`^`）、等价（`Eq`）、不等价（`Ne`）等运算。

```python
x >> y
x << y
x ^ y
Eq(x, y)
Ne(x, y)
```

你可以使用 `subs()` 方法来进行带入求值，如：

```python
(y & x).subs({x: true, y: false})  # False
(y & x).subs({x: true, y: true})   # True
```

使用 `atoms()` 方法可以获取逻辑函数中的所有变量：

```python
(x | y).atoms() # {x, y}
```

其中 [`SOPform`](https://docs.sympy.org/latest/modules/logic.html#sympy.logic.boolalg.SOPform)、[`POSform`](https://docs.sympy.org/latest/modules/logic.html#sympy.logic.boolalg.POSform)、[`ANFform`](https://docs.sympy.org/latest/modules/logic.html#sympy.logic.boolalg.ANFform) 提供了对不同格式的范式的支持。

使用 [`to_dnf()`](https://docs.sympy.org/latest/modules/logic.html#sympy.logic.boolalg.to_dnf) 方法来转换为析取范式（Disjunctive Normal Form，DNF），使用 [`to_cnf()`](https://docs.sympy.org/latest/modules/logic.html#sympy.logic.boolalg.to_cnf) 方法来转换为合取范式（Conjunctive Normal Form，CNF），使用 [`to_anf()`](https://docs.sympy.org/latest/modules/logic.html#sympy.logic.boolalg.to_anf) 方法来转换为代数范式（Algebraic Normal Form，ANF）。此外还支持另外几种非常见的范式。

推荐使用 `true` 和 `false` 代替 Python 内置的 `True` 和 `False`，因为 `True` 和 `False` 是内置的 `bool` 类型，其继承自 `int` 类型，因此在进行逻辑运算时会出现一些表示上的不一致。

可以使用通用的化简函数 `sympify()` 来简化逻辑函数。使用 [`simplify_logic()`](https://docs.sympy.org/latest/modules/logic.html#sympy.logic.boolalg.bool_map) 函数来简化逻辑函数，[`bool_map()`](https://docs.sympy.org/latest/modules/logic.html#sympy.logic.boolalg.bool_map) 函数用于映射两个逻辑函数之间的逻辑映射关系。

计算真值表：

```python
from sympy.logic.boolalg import truth_table
from sympy.abc import x, y

table = truth_table(x >> y, [x, y])
print('| x | y | x >> y |')
print('|---|---|--------|')
for (x_, y_), expr in table:
    print(f'| {x_} | {y_} | {int(expr is true):6} |')
```

打印结果如下：

| $x$ | $y$ | $x \rightarrow y$ |
| --- | --- | ----------------: |
| $0$ | $0$ |               $1$ |
| $0$ | $1$ |               $1$ |
| $1$ | $0$ |               $0$ |
| $1$ | $1$ |               $1$ |

现在我们测试 [第二节：真值表](#22-真值表) 的例子：

```python
from sympy.logic.boolalg import truth_table
from sympy.abc import A, B, C

table = truth_table(A & ~B | ~A & B & C | A & ~C, [A, B, C])
print('| A | B | C | F |')
print('|---|---|---|---|')
for (A_, B_, C_), expr in table:
    print(f'| {A_} | {B_} | {C_} | {int(expr is true)} |')
```

[`satisfiable()`](https://docs.sympy.org/latest/modules/logic.html#sympy.logic.inference.satisfiable) 函数用于执行逻辑推断，判断逻辑函数是否可满足，即是否存在一组变量的取值使得逻辑函数为真等条件。
