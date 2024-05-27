# SQLAlchemy 连接池中的连接失效

[[TOC]]

## 1. 问题复现

在使用 SQLAlchemy 连接 MySQL 时，如果 MySQL 服务端主动断开连接，那么 SQLAlchemy 会报错。

查看 MySQL 连接超时时间 `wait_timeout`，如未进行配置，默认值为 28800，即 8 小时。

```sql
show global variables like '%timeout%';
```

设置 MySQL 超时时间为 2 秒：

```sql
set global wait_timeout=2;
```

下面是在使用 `asyncio-mqtt` 时出现的问题，如果取消注释 `await asyncio.sleep(3)`，连接将被闲置 3 秒，此时 MySQL 已经断开连接，再次发送请求时，就会报错。

```python
import asyncio
import sys

import asyncio_mqtt as aiomqtt
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine

import config
from src.services.save_data import select_strategy

if sys.platform == 'win32':
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
else:
    import uvloop
    asyncio.set_event_loop_policy(uvloop.EventLoopPolicy())

engine = create_async_engine(config.DB_URL, echo=False)
session = async_sessionmaker(
    engine,
    expire_on_commit=False
)

async def main():
    reconnect_interval = 1.0
    while True:
        try:
            async with aiomqtt.Client(config.MQTT_URL) as client:
                await client.subscribe('Home/#')
                async with client.messages() as messages:
                    async for message in messages:
                        try:
                            msg = message.payload.decode()
                            print(message.topic.value, '\t', msg)
                            # 这是业务函数入口
                            await select_strategy(session, message.topic.value, msg)
                        except UnicodeDecodeError:
                            print('[ERROR] decode error',
                                  message.topic.value, message.payload)
                    # await asyncio.sleep(3)
        except aiomqtt.MqttError as error:
            print(
                f'Error `{error}`. Reconnecting in {reconnect_interval} seconds.')
            await asyncio.sleep(reconnect_interval)
        except Exception as e:
            print('[ERROR] ', e)
            print(message.topic.value, message.payload)

if __name__ == '__main__':
    asyncio.run(main())
```

SQLAlchemy 会报错：

```bash
[ERROR]  (pymysql.err.OperationalError) (2013, 'Lost connection to MySQL server during query')
(Background on this error at: https://sqlalche.me/e/20/e3q8)
```

## 2. 解决方案

我们先学习一下 SQLAlchemy 的连接池参数。

- `pool_size`：设置连接池中，保持的连接数。初始化时并不产生连接。
- `max_overflow`：当连接池里的连接数已达到 `pool_size` 时，且都被使用时。又要求从连接池里获取连接时，`max_overflow` 就是允许再新建的连接数。
- `pool_timeout`：从连接池里获取连接，如果此时无空闲的连接。且连接数已经到达了 `pool_size+max_overflow`。此时获取连接的进程会等待 `pool_timeout` 秒。如果超过这个时间，还没有获得将会抛出异常，默认为 30 秒。
- `pool_recycle`：数据库连接的生存时间。一个连接当连接空闲 `pool_recycle` 秒后，会被重置。默认为 -1，即永久可用。

当 `pool_recycle` 设置为 -1 时，也就是连接池不会主动丢弃这个连接。但是有可能数据库设置了连接超时时间。例如 MySQL，设置的有 `wait_timeout` 默认为 28800。当连接空闲 8 小时时会自动断开。

### 2.1 不使用连接池

在创建引擎时，设置 `poolclass=NullPool`，不使用连接池。

缺点是降低连接效率。

```python
engine = create_async_engine(config.DB_URL, echo=False, poolclass=NullPool)
```

### 2.2 设置连接超时时间

在创建引擎时，设置 `pool_recycle=3600`，每 3600 秒（1 小时）回收连接，建议和 `pool_pre_ping=True` 一起使用。

```python
engine = create_async_engine(config.DB_URL, echo=False, pool_recycle=3600)
```

### 2.3 自动重连

设置 `pool_pre_ping=True`，每次从连接池中取出连接时，都会先尝试 ping（相当于 `SELECT 1`），如果连接已经断开，那么 SQLAlchemy 会自动重连，并放弃所有旧的连接。

如果出现错误将最多重试 3 次，否则此错误正常抛出。

```python
engine = create_async_engine(config.DB_URL, echo=False, pool_pre_ping=True)
```
