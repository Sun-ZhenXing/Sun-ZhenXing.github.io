---
title: 编辑 hosts 文件
date: 2023-04-11
category:
  - 环境搭建
tag:
  - GitHub
  - GFW
---

编辑 `hosts` 文件加速访问。

<!-- more -->

[[TOC]]

## 1. 加速 GitHub 资源

即使使用 VPN，有一些应用也无法访问 GitHub，许多情况下我们需要使用 `raw.githubusercontent.com` 来访问 GitHub 上的资源，但是由于 GFW 的原因，常常无法访问。

1. 解析最新的 DNS
2. 添加到 `hosts` 文件

### 1.1 解析最新的 DNS

通过一些 [在线 DNS 解析网站](http://www.ip33.com/dns.html)，我们可以获取 `raw.githubusercontent.com` 的 IP 地址，例如：

- `185.199.110.133`
- `185.199.108.133`
- `185.199.109.133`
- `185.199.111.133`

可以去网站上查看新的 IP 地址，多次尝试。

### 1.2 添加到 hosts 文件

推荐使用 [PowerToys](https://learn.microsoft.com/zh-cn/windows/powertoys/) 等 `host` 文件管理工具编辑，PowerToys 提供了 Hosts File Editor，可以方便的编辑 `hosts` 文件。
