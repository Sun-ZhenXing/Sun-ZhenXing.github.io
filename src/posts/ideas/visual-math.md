---
title: VisualMath 计划
date: 2023-04-05
category:
    - 奇思妙想
tag:
    - 可视化
---

VisualMath 计划的一些想法和成果。

<!-- more -->

[[TOC]]

## 1. VisualMath 计划最初设想

在高中时，学习论证方法时，对机械证明感兴趣，想编写一个程序来实现机械证明（特别是 [吴方法](https://baike.baidu.com/item/%E5%90%B4%E6%96%B9%E6%B3%95/10946875)，可参考 Java Geometry Expert 的实现），但是当时的能力有限，无法完成稍稍复杂的证明。

后来希望能编写一个程序，实现数学计算的可视化，就自己编写了一个简易的 [Python 代数计算器](https://github.com/Sun-ZhenXing/VisualMath)，大概长这个样子：

![](https://pic.rmb.bdstatic.com/bjh/e4813caf014f57742f4e6fa1090b2769.jpeg)

可以将输入的表达式交给 Python 执行，然后使用 SymPy 计算，转换为 LaTeX 并在前端渲染。例如，我输入 `solve x^3 - 2x^2 - 3` 的时候，下面会渲染：

$$
\left[ \frac{2}{3} + \left(- \frac{1}{2} - \frac{\sqrt{3} i}{2}\right) \sqrt[3]{\frac{\sqrt{113}}{6} + \frac{97}{54}} + \frac{4}{9 \left(- \frac{1}{2} - \frac{\sqrt{3} i}{2}\right) \sqrt[3]{\frac{\sqrt{113}}{6} + \frac{97}{54}}}, \  \frac{2}{3} + \frac{4}{9 \left(- \frac{1}{2} + \frac{\sqrt{3} i}{2}\right) \sqrt[3]{\frac{\sqrt{113}}{6} + \frac{97}{54}}} + \left(- \frac{1}{2} + \frac{\sqrt{3} i}{2}\right) \sqrt[3]{\frac{\sqrt{113}}{6} + \frac{97}{54}}, \  \frac{4}{9 \sqrt[3]{\frac{\sqrt{113}}{6} + \frac{97}{54}}} + \frac{2}{3} + \sqrt[3]{\frac{\sqrt{113}}{6} + \frac{97}{54}}\right]
$$

解方程 $x^3 - 2x^2 - 3 = 0$ 完全依赖 SymPy 进行，而且还在 Bilibili 录了一个[视频](https://www.bilibili.com/video/BV1o7411Q7U5)。

后来进行了一次重构，前端仅仅使用单个 HTML 文件，后端改成 Sanic 实现，但是使用 SymPy 实现注定无法成为  Wolfram Alpha 那样好用的计算工具。

## 2. 灵感

上面的项目只能是一种想法，而不能是一个项目，因为这只能用于炫耀而不能用于实际。

后来看到了 [PyScript](https://pyscript.net/) 项目，开始期望使用纯前端实现一个简易的 Wolfram Alpha，虽然不一定会实现，但是这是一种想法，希望以后实现的时候能回想起来。

其实在这个项目出现的前两天，我刚好在编译 [python-wasm](https://github.com/ethanhs/python-wasm) 这个项目，并成功将 Python 运行在浏览器中。

我希望我们的前端版本的 Wolfram Alpha 使用 Python 语法，在前端基于 WebAssembly 执行 Python 语句并获得结果，可以扩展模块或使用自己的模块。

用过 Wolfram Alpha 的朋友一定知道它的强大，通过简单的一句话就能判断你想获得哪些数据，我希望实现几个页面，并加入一些可选功能。当然，这取决于我到底想做成什么样：
- 基础计算
- 代码编写执行
- 图表和函数可视化
- 过程推导
- 自定义模块

```python
def f(x: int) -> int:
    return x + 3
```

这个设想需要实现一个子项目，所以还是有点复杂，以后有机会可以实现部分组件：
- 代码编辑器，可使用开源组件
- LaTeX 识别，可使用第三方 API
- 公式编辑器，可使用开源组件
- 公式语言转换，需要自行实现（支持 LaTeX、MathML、OMML 和 MAthJson）
- 将公式语言转换为指令语句，需要自行实现
- 部分 NLP 模型
