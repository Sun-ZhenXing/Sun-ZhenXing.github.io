---
title: WSA 进阶
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

甚至可以安装一些极客软件：
- Termux
- Magisk
- SuperSU
- TaiChi
- Xposed
- LSposed
- KernelSU
- Kernel Flasher
- Mono

甚至能安装其他虚拟化软件（Android 容器和虚拟机），或者使用 Termux 安装其他 Linux 系统，使用自编译的 Linux 内核替换现有内核，运行更多自定义守护进程，甚至运行 Docker 容器。

## 2. 卸载和备份

### 2.1 卸载

如果需要安装其他发行版的 WSA（如官方版本），需要卸载现有版本的 WSA。

1. 打开 **适用于Android(TM) 的 Windows 子系统**
2. 关闭 WSA：**系统** -> **关闭适用于Android(TM) 的 Windows 子系统** -> **关闭**
3. 右键卸载此应用

### 2.2 备份数据

如果是更新 Google Play 版本的 WSA，可以直接在安装新版本的 WSA 时选择保留数据。

用户数据在此文件中：

```bash
%LOCALAPPDATA%\Packages\MicrosoftCorporationII.WindowsSubsystemForAndroid_8wekyb3d8bbwe\LocalCache\userdata.vhdx
```

复制此文件夹名称，然后使用 `Win + R` 打开 **运行**，粘贴回车即可打开此文件夹。

### 2.3 备份 APK 文件

可以使用 Adb 批量备份 APK 文件。

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

::: details 批量备份脚本

查看哪些包需要备份，通常是没有 `android` 和 `windows` 的包名：

```bash
adb shell pm list package | sed s/package://g | sed /android/d | sed /windows/d
```

Windows 下使用 Linux 工具可以参考 [Git](https://git-scm.com/) 提供的工具包。

使用 Git 提供的 `bash` 支持命令，将下列脚本保存为 `wsa-copy-apk.sh`，然后在 `bash` 中运行即可。

@[code bash](./src/wsa-copy-apk.sh)

WSL 2 的提供了一个 `bash` 命令和 Git 提供的是不兼容的，WSL 2 连接 WSA 较为繁琐。

:::

## 3. 使用 ROOT 权限

可以通过安装 **Root Checker Basic** 来检查 ROOT 权限。如果你已经安装过 **Magisk**，会弹出授权界面，对此应用授权即可。

在 Termux 中可以通过安装 `tsu` 来模拟 `su` 命令：

```bash
pkg install tsu
```

然后使用 `tsu` 命令即可获取 ROOT 权限。

```bash
tsu
```

## 4. 使用代理或 VPN

## 5. WSA 抓包指南
