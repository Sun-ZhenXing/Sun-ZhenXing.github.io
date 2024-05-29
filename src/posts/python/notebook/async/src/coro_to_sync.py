import asyncio
from typing import Any, Coroutine, TypeVar

T = TypeVar("T")


def coro_to_sync(
    coro: Coroutine[Any, Any, T],
    loop: asyncio.AbstractEventLoop | None = None,
) -> T:
    """将协程转换为同步函数，此函数只由主线程调用"""
    loop = loop or asyncio.get_event_loop()
    future = asyncio.run_coroutine_threadsafe(coro, loop)
    return future.result()
