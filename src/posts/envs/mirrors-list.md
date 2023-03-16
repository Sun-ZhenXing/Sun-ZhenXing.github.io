---
title: 国内镜像网站列表
date: 2023-03-13
category:
  - 环境搭建
tag:
  - 镜像网站
---

保存国内可用的近乎所有镜像列表。

<!-- more -->

[[TOC]]

## 1. 系统发行版镜像

### 1.1 Ubuntu 镜像

推荐：[官方镜像列表](https://launchpad.net/ubuntu/+cdmirrors)。

推荐镜像列表：
1. [Ubuntu 官方镜像](https://ubuntu.com/download)
2. [清华大学镜像](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/)
3. [华为云镜像](https://repo.huaweicloud.com/ubuntu-releases/)
4. [阿里云镜像](https://mirrors.aliyun.com/ubuntu-releases/)
5. [南京大学镜像](https://mirror.nju.edu.cn/ubuntu-releases/)
6. [北京邮电大学镜像](https://mirrors.bupt.edu.cn/ubuntu-releases/)
7. [网易镜像](https://mirrors.163.com/ubuntu-releases/)
8. [中国科学技术大学镜像](https://mirrors.ustc.edu.cn/ubuntu-releases/)
9. [腾讯镜像](https://mirrors.cloud.tencent.com/ubuntu-releases/)

### 1.2 Debian 镜像

| 名称                      | 后缀                |
| ------------------------- | ------------------- |
| Debian 安装源             | `debian-cd`         |
| Debian 安全更新源         | `debian-security`   |
| Debian 第三方多媒体软件源 | `debian-multimedia` |
| Debian 预发软件源         | `debian-backports`  |
| Debian 其他架构移植源     | `debian-ports`      |
| Debian 过期源             | `debian-archive`    |

推荐：[官方镜像列表](https://www.debian.org/CD/http-ftp/)。

推荐镜像列表：
1. [Debian 官方镜像](https://www.debian.org/CD/http-ftp/)
2. [清华大学镜像](https://mirrors.tuna.tsinghua.edu.cn/debian-cd/)
3. [阿里云镜像](https://mirrors.aliyun.com/debian-cd/)

## 2. 系统软件源镜像

### 2.1 Ubuntu 镜像源

### 2.2 Debian 镜像源

Debian 使用 APT 作为包管理器，配置文件在保存在 `/etc/apt/sources.list` 中。

```bash
mv /etc/apt/sources.list /etc/apt/sources.list-bak
echo '...' > /etc/apt/sources.list
```

此处不推荐使用非官方的安全更新，具体原因可参考 [Debian: FAQ](https://www.debian.org/security/faq.en.html#mirror)。如果你想将镜像源的安全更新改为官方地址，请保留官方的 `*-security` 条目。

参考链接：
- 清华大学：<https://mirrors.tuna.tsinghua.edu.cn/help/debian/>
- 阿里云：<https://mirrors.tuna.tsinghua.edu.cn/help/debian/>

#### Debian 12 (bookworm)

::: code-tabs#source

@tab 官方源

```bash
deb http://deb.debian.org/debian bookworm main
deb http://deb.debian.org/debian-security bookworm-security main
deb http://deb.debian.org/debian bookworm-updates main
```

@tab 清华大学

```bash
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware

deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware

# deb https://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
# # deb-src https://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
```

@tab 阿里云

```bash

```

:::

#### Debian 11 (bullseye)

::: code-tabs#source

@tab 官方源

```bash
deb http://deb.debian.org/debian bullseye main
deb http://deb.debian.org/debian-security bullseye-security main
deb http://deb.debian.org/debian bullseye-updates main
```

@tab 清华大学

```bash
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free

# deb https://security.debian.org/debian-security bullseye-security main contrib non-free
# # deb-src https://security.debian.org/debian-security bullseye-security main contrib non-free
```

@tab 阿里云

```bash
deb https://mirrors.aliyun.com/debian/ bullseye main non-free contrib
# deb-src https://mirrors.aliyun.com/debian/ bullseye main non-free contrib

deb https://mirrors.aliyun.com/debian-security/ bullseye-security main
# deb-src https://mirrors.aliyun.com/debian-security/ bullseye-security main

deb https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
# deb-src https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib

deb https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
# deb-src https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
```

:::

#### Debian 10 (buster)

::: code-tabs#source

@tab 官方源

```bash
deb http://deb.debian.org/debian buster main
deb http://deb.debian.org/debian-security buster-security main
deb http://deb.debian.org/debian buster-updates main
```

@tab 清华大学

```bash
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-backports main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-backports main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free

# deb https://security.debian.org/debian-security buster/updates main contrib non-free
# # deb-src https://security.debian.org/debian-security buster/updates main contrib non-free
```

@tab 阿里云

```bash
deb https://mirrors.aliyun.com/debian/ buster main non-free contrib
# deb-src https://mirrors.aliyun.com/debian/ buster main non-free contrib

deb https://mirrors.aliyun.com/debian-security buster/updates main
# deb-src https://mirrors.aliyun.com/debian-security buster/updates main

deb https://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
# deb-src https://mirrors.aliyun.com/debian/ buster-updates main non-free contrib

deb https://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
# deb-src https://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
```

:::

#### Debian 9 (stretch)

::: code-tabs#source

@tab 官方源

```bash
deb http://deb.debian.org/debian stretch main
deb http://deb.debian.org/debian-security stretch-security main
deb http://deb.debian.org/debian stretch-updates main
```

@tab 清华大学

```bash
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian-security stretch/updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security stretch/updates main contrib non-free

# deb https://security.debian.org/debian-security stretch/updates main contrib non-free
# # deb-src https://security.debian.org/debian-security stretch/updates main contrib non-free
```

@tab 阿里云

```bash
deb https://mirrors.aliyun.com/debian/ stretch main non-free contrib
# deb-src https://mirrors.aliyun.com/debian/ stretch main non-free contrib

deb https://mirrors.aliyun.com/debian-security stretch/updates main
# deb-src https://mirrors.aliyun.com/debian-security stretch/updates main

deb https://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib
# deb-src https://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib
```

:::

## 3. PyPI 镜像

推荐镜像列表：
1. [清华大学镜像](https://pypi.tuna.tsinghua.edu.cn/simple)
2. [阿里云镜像](https://mirrors.aliyun.com/pypi/simple/)
3. [中国科技大学镜像](https://pypi.mirrors.ustc.edu.cn/simple/)
4. [豆瓣镜像](https://pypi.douban.com/simple/)
5. [华为云镜像](https://repo.huaweicloud.com/repository/pypi/simple/)
6. [北京外国语大学镜像](https://mirrors.bfsu.edu.cn/pypi/web/simple/)

第三方列表合集：
1. [校园网联合镜像站](https://mirrors.cernet.edu.cn/list/pypi)（包含国内众多高校）

## 4. Java 系列

### 4.1 JDK / OpenJDK 镜像

推荐镜像列表：
1. [华为云镜像](https://mirrors.huaweicloud.com/openjdk/)（旧版本 [访问此处](https://repo.huaweicloud.com/java/jdk/)）
2. [清华大学镜像 AdoptOpenJDK](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/)

下游版本：
1. [Amazon Corretto](https://aws.amazon.com/cn/corretto/)
2. [Zulu JDK](https://www.azul.com/downloads/?package=jdk)
3. [阿里巴巴 Dragonwell](https://dragonwell-jdk.io/#/index)
4. [腾讯 KonaJDK](https://cloud.tencent.com/product/tkjdk)
5. [微软 OpenJDK](https://learn.microsoft.com/zh-cn/java/openjdk/download)
6. [毕昇 JDK](https://www.hikunpeng.com/developer/devkit/compiler/jdk)

### 4.2 Maven 镜像
