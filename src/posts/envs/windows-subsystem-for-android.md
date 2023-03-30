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

[[TOC]]

## 1. 安装 WSA

[Windows 安卓子系统](https://learn.microsoft.com/zh-cn/windows/android/wsa/)（Windows Subsystem for Android™，WSA）使 Windows 11 能够运行 Android 应用程序。

首先确认你的 Windows 版本是否支持 WSA：
- x64 或 ARM64 架构的现代处理器
- Windows 11
- 至少 8 GB 的 RAM

确认后，需要 Windows 开启 **虚拟机平台**，如果没有打开，请在 **启用或关闭 Windows 功能** 中打开 **虚拟机平台**，然后重启。

目前 WSA 还处于预览阶段，仅在部分地区可用，需要将 Windows 地区设置为 **美国**，然后在 Microsoft Store 安装 [Amazon Appstore](ms-windows-store://pdp/?productid=9NJHK44TTKSX) 即可，相信不久 WSA 就可以开放使用。

安装完成后，系统将出现 **适用于 Android™ 的 Windows 子系统** 的应用，打开即可。

现在，你的 Windows 11 可以安装任何 Android 应用了，Android 应用和已经安装的 Windows 应用看起来一模一样。

然后进行一些配置，例如，如果你需要使用 WSA 进行开发，那么打开 **开发人员模式** 选项。

可选配置：**图形和性能**，可指定显卡运行 Android 子系统，例如指定为 **NVIDIA GeForce RTX 3070 Ti Laptop GPU**，以提升性能。

::: details 版本信息

通过查看系统版本，我们发现此系统是 Android 13，内核版本如下：

```text
5.10.117-windows-subsystem-for-android-20220906
#1 Tue Sep 6 23:23:03 UTC 2022
```

使用 Termux 命令 `uname -a` 的输出如下：

```text
Linux localhost 5.10.117-windows-subsystem-for-android-20220906
#1 SMP PREEMPT Tue Sep 6 23:23:03 UTC 2022 x86_64 Android
```

这不是意味着 WSA 使用 x86_64 架构，WSA 使用 Intel Bridge 技术在基于 x86 的处理器上模拟 ARM 应用程序，这可以让其兼容 x86 和 ARM 架构的应用程序。

WSA 和 WSL 2 使用的不是一张网卡，WSA 使用 **以太网适配器 vEthernet (WSLCore)**，而 WSL 2 使用 **以太网适配器 vEthernet (WSL)**。

:::

## 2. 使用 ADB 连接

::: tip ADB

下面的所有操作需要 [ADB 工具](https://developer.android.google.cn/studio/command-line/adb?hl=zh-cn)，如果没有安装，请先安装 ADB 工具。

如果不希望使用开启调试，可以直接阅读 [3. 使用 WSA](#_3-使用-wsa) 中的相关说明进行使用。

:::

确保已经打开 **开发人员模式**。

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

## 3. 使用 WSA

通常启动一个应用需要知道其包名，如果你已经知道包名，那么直接在文件管理器中输入 `wsa://<package-name>` 即可启动应用。

如果不知道，可以使用下面的命令查看所有已安装的应用的包名：

```bash
adb shell pm list packages
```

所有的 Android 都可以使用下面的命令启动应用：

```bash
adb shell am start -n <package-name>/<activity-name>
```

但是获取一个应用的首屏 `Activity` 名称比较麻烦，可以使用下面的命令查看应用的详细信息：

```bash
adb shell dumpsys package <package-name>
```

由于 Windows 11 支持从包名启动，所以可以使用 CMD 命令行来启动应用，例如启动设置：

```bash
start wsa://com.android.settings
```

由于 WSA 没有桌面，操作有点麻烦，我们可以给其安装一个 [微软桌面](https://www.coolapk.com/apk/com.microsoft.launcher)，然后新建一个快捷方式，地址是：

```yml
wsa://com.microsoft.launcher
```

这样双击就可以打开 Android 子系统的桌面了，但是不能设置为默认桌面，也不能更换壁纸，原因是 WSA 的默认应用指向了 Windows 默认应用。

## 4. 配合 Android Studio 进行开发

如果已经使用 ADB 连接到 WSA，那么就可以使用 Android Studio 会自动识别，并在设备中显示 **Microsoft Corporation Subsystem for Android(TM)**，可以像正常开发 Android 应用一样开发。

如何置顶窗口？Windows 10 和以前窗口置顶可以通过一些小工具实现（如 ViewWizard），Windows 11 现在可以使用最新的 [PowerToys](https://github.com/microsoft/PowerToys) 来实现。[^1]

[^1]: PowerToys 是微软开发的一系列实用工具，包括窗口置顶功能。

在 PowerToys 项目的 Releases 中下载安装最新版本即可直接使用。在任意窗口中按 `Win + Ctrl + T` 切换置顶即可。

如果需要锁定大小，可以在 WSA 的设置界面给每个应用程序单独设置。

::: warning 闪退

注意：部分应用随意调整大小时可能闪退。

如果使用 Android Studio 进行开发时，调整应用大小出现闪退，则可能是空指针异常。部分视图事件在重绘时没有传入 `view`，因此调整出错事件的视图对象，类型是 `View?`（Kotlin）或 `Optional<View>`（Java），需要进行判空处理。

:::

还有一些行为和实体机不一致：例如 `Toast`，实体机上 `Toast` 会显示在最上层，但是在 WSA 上 `Toast` 将发送到 Windows 通知栏。如果没有显示 `Toast`，可以检查 Windows 通知栏是否有通知或者是否开启了通知。
