# Python 协程

## 1. 协程

协程是子例程的更一般形式。

子例程可以在某一点进入并在另一点退出。协程则可以在许多不同的点上进入、退出和恢复。它们可通过 [async def](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#async-def) 语句来实现。参见 [PEP 492](https://www.python.org/dev/peps/pep-0492) [^1]。

- *@3.5+* **协程**（coroutine）可以在多个位置上挂起和恢复执行
- `await` 表达式，`async for` 以及 `async with` 只能在协程函数体中使用
- 使用 `async def` 语法定义的函数总是为协程函数，即使它们不包含 `await` 或 `async` 关键字
- 在协程函数体中使用 `yield from` 表达式将引发 `SyntaxError`

详细解释见 [官方文档语言参考手册](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#coroutines)。

## 2. 协程函数

返回一个 [`Coroutine`](https://docs.python.org/zh-cn/3/glossary.html#term-coroutine) 对象的函数。

协程函数可通过 [`async def`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#async-def) 语句来定义，并可能包含 [`await`](https://docs.python.org/zh-cn/3/reference/expressions.html#await)、[`async for`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#async-for) 和 [`async with`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#async-with) 关键字。这些特性是由 [PEP 492](https://www.python.org/dev/peps/pep-0492) 引入的。

## 3. PEP 492

PEP 是 Python 语言发展的提案。

[PEP 492](https://www.python.org/dev/peps/pep-0492) 提出使用 `async` 和 `await` 语法实现协程，将协程作为 Python 中的一个正式的单独概念，并增加相应的支持语法。

该提案在 Python 3.5 版本实现。

[^1]: 官方文档术语对照表，<https://docs.python.org/zh-cn/3/glossary.html#term-coroutine>

## 4. 技巧

### 4.1 在异步代码中调用同步函数

对于一些同步函数，如果我们在异步代码中直接调用这些函数，会导致事件循环被阻塞，从而影响整个程序的性能。因此最好的方法是将这些函数放在线程中运行。

> [!TIP]
> 由于 [GIL](https://docs.python.org/zh-cn/3/glossary.html#term-global-interpreter-lock) 的存在，`asyncio.to_thread()` 通常不会对 CPU 密集型函数产生显著的性能提升，故通常只能被用来将 I/O 密集型函数变为非阻塞的。但是，对于会释放 GIL 的扩展模块或无此限制的替代性 Python 实现来说，`asyncio.to_thread()` 也可被用于 CPU 密集型函数。

在 Python 3.9 之后，我们可以使用 [`asyncio.to_thread()`](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.to_thread) 函数来在异步代码中调用同步函数[^2]。这会默认使用 Python 的 `ThreadPoolExecutor` 来运行函数。

[^2]: <https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.to_thread>

### 4.2 在同步代码中调用异步函数

有时，我们需要在同步代码中调用异步函数，这时我们可以使用 `asyncio.run()` 函数来运行异步函数。

@[code python](./src/asyncio_run.py)

但是，以上这种情况仅适用于代码在单个线程中运行，如果代码在多个线程中运行，我们可以使用 `asyncio.run_coroutine_threadsafe()` 函数来运行异步函数。

注意，此时协程必须运行在一个正在工作的事件循环中，否则会引发 `RuntimeError` 异常或者死锁。因此下面的代码用于在一个线程调用正在另一个线程中运行的事件循环。

@[code python](./src/coro_to_sync.py)
