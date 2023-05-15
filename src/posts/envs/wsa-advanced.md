---
title: 使用 WSA 进阶
date: 2023-05-15
category:
  - 环境搭建
tag:
  - WSA
---

Windows 安卓子系统的进阶指南。

<!-- more -->

[[TOC]]

::: info 前言

如果没有阅读 [使用 Windows 安卓子系统](./windows-subsystem-for-android.md)，请先阅读此文章。

:::

## 1. 安装 Google Play 版本的 WSA

如果你不想使用 Amazon Appstore，或者你需要自定义一些配置（如可 Root、安装面具等）可以安装 Google Play 版本的 WSA。

*@TODO*

## 2. 备份 APK 文件

列出包名：

```bash
adb shell pm list package
```

列出 APK 文件路径：

```bash
adb shell pm path ${package_name}
```

复制文件到电脑上：

```bash
adb pull ${device_path} ${host_path}
```

## 3. 使用代理或 VPN

## 4. ROOT 指南

## 5. WSA 抓包指南
