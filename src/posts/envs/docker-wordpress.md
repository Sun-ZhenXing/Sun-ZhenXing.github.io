---
title: Docker 搭建 WordPress 指南
date: 2022-12-13
category:
  - 环境搭建
tag:
  - Docker
  - WordPress
---

介绍 Docker 搭建 WordPress 并配置环境进行测试。

<!-- more -->

# Docker 搭建 WordPress

## 1. Docker 创建容器

确保已经安装 Docker，如果没有安装请搜索在你的系统上安装 Docker，当前测试系统是 Debian 11.5。

```bash
# 安装 MySQL 5.7
docker container run \
  -d \
  --name wordpressdb \
  --env MYSQL_ROOT_PASSWORD=123456 \
  --env MYSQL_DATABASE=wordpress \
  mysql:5.7

# 安装 WordPress，把文件保存在当前路径的 ./wordpress 路径下
# 将 8081 可以改为你需要暴露的端口
docker container run \
  -d \
  -p 8081:80 \
  --name wordpress \
  --env WORDPRESS_DB_PASSWORD=123456 \
  --link wordpressdb:mysql \
  --volume "$PWD/wordpress":/var/www/html \
  wordpress
```

然后编辑 `./wordpress/wp-config.php` 文件中的用户名和密码：

```php
define( 'DB_NAME', getenv_docker('WORDPRESS_DB_NAME', 'wordpress') );
define( 'DB_USER', getenv_docker('WORDPRESS_DB_USER', 'root') );
define( 'DB_PASSWORD', getenv_docker('WORDPRESS_DB_PASSWORD', '123456') );
```

打开地址即可即可使用 WordPress。

## 2. 修改最大上传限制

修改的 PHP 配置，进入容器：

```bash
sudo docker exec -it wordpress /bin/bash
```

下面的命令执行在 Docker 容器内：

```bash
cd /usr/local/etc/php/

# 查看默认最大限制
cat php.ini-production | grep upload_max_filesize
cat php.ini-production | grep post_max_size
cat php.ini-production | grep memory_limit

# 生成 php.ini
cp php.ini-production php.ini
sed -i "s/upload_max_filesize = 2M/upload_max_filesize = 128M/g" php.ini
sed -i "s/post_max_size = 8M/post_max_size = 256M/g" php.ini
sed -i "s/memory_limit = 128M/memory_limit = 512M/g" php.ini
exit
```

然后重启 WordPress 镜像：

```bash
sudo docker restart wordpress
```

现在已经配置完成了，打开地址即可访问，上传限制也可以该为你设定的其他值。

## 3. WordPress 容器内安装 `vim`

不建议更改容器内的设定，如果你一定需要的话可以按照下面设定进行：

进入容器：

```bash
sudo docker exec -it wordpress /bin/bash
```

下面的操作都在容器中进行。

先修改软件镜像源，可以使用下面的命令修改为清华源：

```bash
mv /etc/apt/sources.list /etc/apt/sources.list-bak
echo '
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main non-free contrib
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main non-free contrib
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main non-free contrib
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main non-free contrib
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main non-free contrib
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main non-free contrib
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security/ stretch/updates main non-free contrib
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security/ stretch/updates main non-free contrib
' > /etc/apt/sources.list
apt update
```

测试安装 `vim`：

```bash
apt install -y vim
```

::: danger 修改系统库

`libtinfo5` 是系统基础库，下面是危险操作。修改系统基础库，可能触发系统崩溃。

:::

如果报错提示 `libtinfo5` 版本不对，重新安装 `libtinfo5`：

```bash
apt install -y libtinfo5 --allow-remove-essential
apt install -y ncurses-base
apt install -y vim
```
