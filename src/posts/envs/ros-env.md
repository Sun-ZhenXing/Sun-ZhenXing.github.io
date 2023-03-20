---
title: 配置 ROS 环境
date: 2023-02-21
category:
  - 环境搭建
tag:
  - ROS
  - Ubuntu
---

本文介绍 ROS 环境的安装步骤。

<!-- more -->

[[TOC]]

## 1. 安装 Ubuntu 20

本文全部基于 Ubuntu 20.04 的环境，可以使用虚拟机或实体机器安装。

镜像下载地址：[^1]

[^1]: Ubuntu 镜像地址，launchpad.net，<https://launchpad.net/ubuntu/+cdmirrors>

| 镜像站   | 链接                                                                                  |
| -------- | ------------------------------------------------------------------------------------- |
| 官方镜像 | [releases.ubuntu.com](https://www.releases.ubuntu.com/)                               |
| 清华大学 | [mirrors.tuna.tsinghua.edu.cn](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/) |
| 南京大学 | [mirror.nju.edu.cn](https://mirror.nju.edu.cn/ubuntu-releases/)                       |
| 华为云   | [repo.huaweicloud.com](https://repo.huaweicloud.com/ubuntu-releases/)                 |
| 阿里云   | [mirrors.aliyun.com](https://mirrors.aliyun.com/ubuntu-releases/)                     |

下载得到 `ubuntu-20.04.5-desktop-amd64.iso`，安装教程如有问题，可参考网络其他教程。

## 2. 基础安装

更新镜像地址（阿里云镜像为例）：

```bash
mv /etc/apt/sources.list /etc/apt/sources.list-bak
echo 'deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse' > /etc/apt/sources.list
```

更新，安装基础工具：

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install vim wget curl git zip unzip tar -y
```

安装并更新 `python3-pip`，配置负载均衡镜像加速：

```bash
sudo apt install python3-pip
python3 -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade pip
pip3 config set global.extra-index-url "https://pypi.tuna.tsinghua.edu.cn/simple/ https://mirrors.aliyun.com/pypi/simple/ https://repo.huaweicloud.com/repository/pypi/simple/ https://mirrors.bfsu.edu.cn/pypi/web/simple/"
```

安装：

```bash
cd
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'

# 克隆 ROS 镜像仓库，如果克隆出错可尝试配置代理，或提前下载解压
git clone https://github.com/ros/rosdistro.git
```

安装完整版 `ros-noetic-desktop-full`，如果需要精简版请替换名称：

```bash
cat rosdistro/ros.asc | sudo apt-key add -
sudo apt update
sudo install -y ros-noetic-desktop-full
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

安装其他依赖：

```bash
sudo apt install -y python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
```

## 3. 初始化配置

官方版本需要稳定的外网环境（能访问 `raw.githubusercontent.com`），如果不能请选择大陆版本。

::: tabs

@tab 官方版本

```bash
sudo rosdep init
rosdep update
```

@tab 大陆版本

安装 `rosdep` 的中国大陆镜像版本 `rosdepc`，没有网络问题：[^2]

[^2]: 鱼香 ROS，知乎，<https://zhuanlan.zhihu.com/p/398754989>

```bash
sudo pip3 install rosdepc
```

初始化：

```bash
sudo rosdepc init
rosdepc update
```

:::

## 4. 测试

启动引擎：

```bash
roscore
```

在另一个终端运行自检测试：

```bash
roswtf
```

检查通过，运行小海龟：

```bash
rosrun turtlesim turtlesim_node
```

再创建一个新终端，移动小海龟：

```bash
rosrun turtlesim turtle_teleop_key
```

根据指示，通过键盘按键控制小海龟移动。

## 5. VS Code 开发环境

这一步可选，如果直接在 [VS Code 官网](https://code.visualstudio.com/) 下载安装包，请确保下载 Linux x64	`.deb` 版本。

如果需要配置请安装：
- Python 扩展包
- CMake 扩展包
- C/C++ 语言支持

这些扩展包直接搜索均为第一个，直接安装即可。安装完成之后即可使用，不需要编写其他配置文件。
