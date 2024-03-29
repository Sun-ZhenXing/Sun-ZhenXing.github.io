---
title: Cron 表达式
date: 2023-03-28
category:
  - 计算机核心知识
tag:
  - Cron
---

Cron 表达式的用法介绍。

<!-- more -->

[[TOC]]

## 1. Cron 表达式

Cron 是一款类 Unix 的操作系统下的基于时间的任务管理系统。用户可以通过 Cron 在固定时间、日期、间隔下，运行定期任务（可以是命令和脚本）。

Cron 常用于运维和管理，但也可用于其他地方，如：定期下载文件和邮件。Cron 该词来源于希腊语 chronos（χρόνος），原意是时间。[^1]

[^1]: Cron，维基百科，<https://zh.wikipedia.org/wiki/Cron>

Cron 使用的语法就是 Cron 表达式。原始的 Cron 表达式是五段的（分、时、日、月、周），但是在 Linux 中，Cron 表达式可以有六段（秒、分、时、日、月、周）。

后来有一些工具沿用并扩展了 Cron 表达式，现在流行的 Cron 表达式有七段（秒、分、时、日、月、周、年，为了兼容六段的 Cron 表达式，年可以省略），本文将介绍这种 Cron 表达式。

::: info 第三方工具

有许多作业调度框架都使用 Cron 表达式，例如 Java 生态的 [Quartz](https://github.com/quartz-scheduler/quartz) 或者 Python 生态的 [Rocketry](https://github.com/Miksus/rocketry) 等。另外像 GitHub Actions 这样的 CI 工具也可以使用 Cron 指定其运行周期，这些框架或平台都提供了 Cron 表达式的解析和生成工具，可以方便地使用 Cron 表达式来管理作业。

:::

## 2. Cron 表达式语法

Cron 表达式的格式如下：[^2]

[^2]: Cron表达式的详细用法，简书，<https://www.jianshu.com/p/e9ce1a7e1ed1>

| 字段                     | 允许值          | 允许的特殊字符    |
| ------------------------ | --------------- | ----------------- |
| 秒（可选，分为两种版本） | 0-59            | `, - * /`         |
| 分                       | 0-59            | `, - * /`         |
| 小时                     | 0-23            | `, - * /`         |
| 日期                     | 1-31            | `, - * ? / L W C` |
| 月份                     | 1-12 或 JAN-DEC | `, - * /`         |
| 星期                     | 1-7 或 SUN-SAT  | `, - * ? / L C #` |
| 年（可选）               | 空或 1970-2099  | `, - * /`         |

### 2.1. 基本用法

下面以秒为例，介绍最基本的 Cron 表达式用法。

- 允许值范围：0~59，不允许为空值
- `"*"` 代表每秒钟触发一次
- `","` 代表在指定的秒数触发，比如 `"0,15,45"` 代表 0 秒、15 秒和 45 秒时触发任务
- `"-"` 代表在指定的范围内触发，比如 `"25-45"` 代表从 25 秒开始触发到 45 秒结束触发，每秒触发一次
- `"/"` 代表步进，`"/"` 前面的值代表初始值（`"*"` 等同 `"0"`），后面的值代表偏移量，比如 `"0/20"` 或者 `"*/20"` 代表从 0 秒钟开始，每隔 20 秒钟触发一次，即第 0 秒、20 秒、40 秒分别触发一次。`"10-45/20"` 代表在 `[10, 45]` 内步进 20 秒触发

由于日期和星期互斥，它们中的一个在指定时，另一个需要指定为 `?` 来避免冲突。

### 2.2. 特殊字符

部分字段允许使用特殊字符，其含义如下：

- `"?"` 代表不指定值，可以用于日期和星期字段
- `"L"` 代表最后，可以用于日期和星期字段，比如 `"L"` 代表最后一天，`"6L"` 代表最后一个星期五
- `"W"` 代表最近的工作日，可以用于日期字段，比如 `"15W"` 代表离 15 号最近的工作日
- `"C"` 联系日历计算的值，可以用于日期和星期字段，例如星期域是 `"1C"` 表示关联日历中第一天
- `"#"` 代表第几个，可以用于星期字段，比如 `"6#3"` 代表第三个星期五

## 3. Cron 表达式示例

| 表达式                     | 含义                                                              |
| -------------------------- | ----------------------------------------------------------------- |
| `0 0 12 * * ?`             | 每天中午 12 点触发                                                |
| `0 15 10 ? * *`            | 每天上午 10:15 触发                                               |
| `0 15 10 * * ?`            | 每天上午 10:15 触发                                               |
| `0 15 10 * * ? *`          | 每天上午 10:15 触发                                               |
| `0 15 10 * * ? 2023`       | 2023 年的每天上午 10:15 触发                                      |
| `0 * 14 * * ?`             | 在每天下午 2 点到下午 2:59 期间的每 1 分钟触发                    |
| `0 0/5 14 * * ?`           | 在每天下午 2 点到下午 2:55 期间的每 5 分钟触发                    |
| `0 0/5 14,18 * * ?`        | 在每天下午 2 点到 2:55 期间和下午 6 点到 6:55 期间的每 5 分钟触发 |
| `0 0-5 14 * * ?`           | 每天下午 2 点到下午 2:05 期间的每 1 分钟触发                      |
| `0 10,44 14 ? 3 WED`       | 每年三月的星期三的下午 2:10 和 2:44 触发                          |
| `0 15 10 ? * MON-FRI`      | 周一至周五的上午 10:15 触发                                       |
| `0 15 10 15 * ?`           | 每月 15 日上午 10:15 触发                                         |
| `0 15 10 L * ?`            | 每月最后一日的上午 10:15 触发                                     |
| `0 15 10 ? * 6L`           | 每月的最后一个星期五上午 10:15 触发                               |
| `0 15 10 ? * 6L 2022-2025` | 2022 年至 2025 年的每月的最后一个星期五上午 10:15 触发            |
| `0 15 10 ? * 6#3`          | 每月的第三个星期五上午 10:15 触发                                 |

```python
import locale
from datetime import datetime

from cron_descriptor import CasingTypeEnum, ExpressionDescriptor
from croniter import croniter

print(locale.getdefaultlocale())
print(datetime.now().strftime("%B"))

# 设置新的语言
locale.setlocale(locale.LC_ALL, "zh_CN.UTF-8")
print(datetime.now().strftime("%B"))

CRON = "2 13 * 5 *"
base = datetime(2023, 8, 15, 4, 46)
iter = croniter(CRON, base)
print(iter.get_next(datetime))
print(iter.get_next(datetime))
print(iter.get_next(datetime))

descriptor = ExpressionDescriptor(
    expression=CRON,
    casing_type=CasingTypeEnum.Title,
    use_24hour_time_format=True,
    locale_code="zh_CN",
    verbose=True,
)

print(descriptor.get_description())
```

语言问题：

```python
import locale

from cron_descriptor import Options, get_description

options = Options()
options.locale_code = "zh_CN"

# current locale
print(locale.getdefaultlocale())

cron_express = "30 */6 * 1,2,3 1-5"
print(get_description(cron_express))
print(get_description(cron_express, options))

# set new locale
locale.setlocale(locale.LC_ALL, "zh_CN.UTF-8")

print(get_description(cron_express))
print(get_description(cron_express, options))
```
