---
title: Android 开发总结
date: 2023-02-23
category:
  - Android
tag:
  - Android
---

安卓开发总结。

<!-- more -->

## 1. Maven 镜像仓库

`settings.gradle` 内可设置镜像仓库。

```gradle
pluginManagement {
    repositories {
        gradlePluginPortal()
        google()
        mavenCentral()
        maven { url 'https://jitpack.io' }
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/public' }
        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
    }
}
```

## 附录 A：常见报错指南

Sync 时错误：`Caused by: org.gradle.api.internal.plugins.PluginApplicationException: Failed to apply`。

解决方法：在项目的 `gradle.properties` 中加入下面的代码。

```properties
android.overridePathCheck=true
```
