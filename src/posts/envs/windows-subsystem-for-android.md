---
title: 使用 Windows 安卓子系统
date: 2023-03-28
category:
  - 环境搭建
tag:
  - WSA
---

Windows 安卓子系统的使用简介。

<!-- more -->

## 1. 安装 WSA

[Windows 安卓子系统](https://learn.microsoft.com/zh-cn/windows/android/wsa/)（Windows Subsystem for Android，WSA）使 Windows 11 能够运行 Android 应用程序。

首先确认你的 Windows 版本是否支持 WSA：
- x64 或 ARM64 架构的现代处理器
- Windows 11
- 至少 8 GB 的 RAM

确认后，需要 Windows 开启 **虚拟机平台**，如果没有打开，请在 **启用或关闭 Windows 功能** 中打开 **虚拟机平台**，然后重启。

目前 WSA 还处于预览阶段，仅在部分地区可用，需要将 Windows 地区设置为 **美国**，然后在 Microsoft Store 安装 [Amazon Appstore](ms-windows-store://pdp/?productid=9NJHK44TTKSX) 即可，相信不久 WSA 就可以开放使用。

安装完成后，系统将出现 **适用于 Android™ 的 Windows 子系统** 的应用，打开即可。

现在，你的 Windows 11 可以安装任何 Android 应用了，Android 应用和已经安装的 Windows 应用看起来一模一样。

然后进行一些配置，打开 WSA 安卓子系统设置页面，打开 **开发人员模式** 选项。

还有可选配置：**图形和性能**：可以指定显卡，以提升性能，例如指定为 **NVIDIA GeForce GTX 3070 Ti GPU**。

## 2. 使用 ADB 连接

查看 ADB 版本：

```bash
adb version
```

设置开发者模式后，现在可以直接连接 WSA：

```bash
adb connect 127.0.0.1:58526
```

第一次连接会提示是否授权，勾选 **总是允许来自此计算机的连接**，然后点击 **允许** 即可。

使用下面的命令安装 APK：

```bash
adb install <apk-file>
```

## 3. 配合 Android Studio 使用

如果已经使用 ADB 连接到 WSA，那么就可以使用 Android Studio 会自动识别，并在设备中显示 **Microsoft Corporation Subsystem for Android(TM)**，可以像正常开发 Android 应用一样开发。

如何置顶窗口？Windows 10 和以前窗口置顶可以通过一些小工具实现（如 ViewWizard），Windows 11 现在可以使用最新的 [PowerToys](https://github.com/microsoft/PowerToys) 来实现。[^1]

[^1]: PowerToys 是微软开发的一系列实用工具，包括窗口置顶功能。

在 PowerToys 项目的 Releases 中下载安装最新版本即可直接使用。在任意窗口中按 `Win + Ctrl + T` 切换置顶即可。

如果需要锁定大小，可以在 WSA 的设置界面给每个应用程序单独设置。
