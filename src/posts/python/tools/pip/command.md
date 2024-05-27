# 🚀 常见命令

[[TOC]]

## 1. 清除缓存文件

```bash
pip cache purge
```

## 2. 固定版本

```bash
pip freeze > requirements.txt
```

## 3. 设置镜像

更新 pip：

```bash
python -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ --upgrade pip
```

设置镜像地址：

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/
```
