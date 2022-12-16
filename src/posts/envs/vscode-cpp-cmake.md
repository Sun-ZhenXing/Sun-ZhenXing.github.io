---
title: VS Code 配置 C++ CMake 开发环境
date: 2022-12-16
category:
  - 环境搭建
tag:
  - VS Code
  - CMake
---

本文介绍 VS Code 配置 C++ CMake 开发环境的方式。

<!-- more -->

# VS Code 配置 C++ CMake 开发环境

[[TOC]]

## 1. 安装后端

## 1.1 编译后端

Linux 和 Mac 可使用系统的编译后端，也可以安装 Clang 等编译套件。

可选的后端有：
- 系统默认
- Clang
- MinGW
- MSVC（仅 Windows）

::: tip Windows 选择后端

Windows 推荐使用 MSVC（Microsoft Visual Studio）作为编译后端，因为 MinGW 对 Windows 支持性不完整，许多库无法支持。MSVC 对 Windows 有完整支持。下面主要介绍 Windows 的环境配置，Linux 与 Mac 只需少量配置即可。

:::

安装 MSVC 编译套件：
1. [下载 Visual Studio](https://visualstudio.microsoft.com/zh-hans/downloads/)，并安装
2. 安装时选择 C/C++ 的支持

安装后确保 VS 的工具包在路径上，类似于 `C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.29.30133\bin\Hostx64\x64`。

### 1.2 CMake

安装 [CMake](https://cmake.org/) 即可，也可以使用 Python 安装 CMake：

```bash
pip install cmake
```

安装结束后测试 CMake 版本，确保较新即可：

```bash
cmake --version
# cmake version 3.24.1
# CMake suite maintained and supported by Kitware (kitware.com/cmake).
```

## 2. VS Code 配置

### 2.1 安装扩展

下面的包可能有变动，只需选择官方的版本即可：
1. C/C++ 语言包
2. C/C++ 扩展包
3. CMake 包

现在已经可以使用 VS Code 创建/调试 CMake 项目了。

### 2.2 配置设置

`.vscode/c_cpp_properties.json` 配置文件：

```json
{
    "configurations": [
        {
            "name": "Win32",
            "includePath": [
                "${default}",
                "${workspaceFolder}/**"
            ],
            "defines": [
                "_DEBUG",
                "UNICODE",
                "_UNICODE"
            ],
            "windowsSdkVersion": "10.0.19044.0",
            "compilerPath": "C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Tools/MSVC/14.29.30133/bin/Hostx64/x64/cl.exe",
            "cStandard": "c17",
            "cppStandard": "c++17",
            "intelliSenseMode": "windows-msvc-x64"
        }
    ],
    "version": 4
}
```

注意几个要点：
- `includePath` 为语法检查的 Include，和 `CMakeLists.txt` 中的 Include 不冲突
- `windowsSdkVersion` 必须是当前 Windows 可用的 SDK 版本
- `compilerPath` 必须在路径（PATH）中

## 3. 创建项目

新建一个文件夹作为你的项目，并包含 `CMakeLists.txt`：

```cmake
project(test-cmake)
cmake_minimum_required(VERSION 3.9)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/build)

set(CMAKE_BUILD_TYPE Release)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

add_executable(${PROJECT_NAME} src/main.cpp)
```

`src/main.cpp` 是主文件：

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, CMake!" << std::endl;
    return 0;
}
```

在状态栏选择：
1. CMake: Release
2. Visual Studio 2019 Release: amd64

选择后自动配置，如果没有配置可以使用 VS Code 命令 `CMake: Configure` 进行配置，点击下面 Build 按钮即可生成目标。
