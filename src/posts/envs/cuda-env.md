---
title: CUDA 指南
date: 2023-05-02
category:
  - 环境搭建
tag:
  - CUDA
  - NVIDIA
---

CUDA 安装、环境和版本等问题。

<!-- more -->

## 1. CUDA 安装

不同的概念：
- 显卡型号
- 显卡计算能力（Compute Capability）
- 驱动版本
- CUDA
- CUDA Toolkit
- CuDNN
- NVCC
- PyTorch 依赖的 CUDA 和 CuDNN

资源：
- [各种版本 CUDA 的下载页面](https://developer.nvidia.com/cuda-toolkit-archive)

参见：
- [NVVP 错误处理](https://mp.weixin.qq.com/s?__biz=MzI2NDkwNzU4Mg==&mid=2247483663&idx=1&sn=a5e6c06438523d0a2a1b303f35bbf4b2)

根据您的问题，您需要使用C++和OpenCV编写一个函数来打半透明斜条纹。您可以使用OpenCV的cv::Mat类来创建一个图像，然后使用cv::rectangle函数来绘制矩形。要绘制斜条纹，您可以使用cv::line函数。最后，您可以使用cv::addWeighted函数将图像与透明度相乘以创建半透明效果。

以下是一个可能的实现：

```cpp
#include <opencv2/opencv.hpp>

void drawTransparentStripes(cv::Mat& image, int width, int height, int num_stripes, double alpha) {
    // Create a blank image with the same size as the input image
    cv::Mat overlay = cv::Mat::zeros(image.size(), image.type());

    // Calculate the width of each stripe
    int stripe_width = width / num_stripes;

    // Draw the stripes
    for (int i = 0; i < num_stripes; i++) {
        cv::Point pt1(i * stripe_width, 0);
        cv::Point pt2((i + 1) * stripe_width, height);
        cv::Scalar color(i % 2 == 0 ? 255 : 0, i % 2 == 0 ? 0 : 255, 0);
        cv::line(overlay, pt1, pt2, color, 5);
    }

    // Apply the transparency
    cv::addWeighted(image, 1 - alpha, overlay, alpha, 0, image);
}

cv::Mat image = cv::imread("path/to/image.jpg");
drawTransparentStripes(image, image.cols, image.rows, 10, 0.5);
cv::imshow("Image", image);
cv::waitKey(0);
```
