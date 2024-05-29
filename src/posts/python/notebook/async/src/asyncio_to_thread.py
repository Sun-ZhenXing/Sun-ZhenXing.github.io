import asyncio
import time


def blocking_io():
    print(f"开始 blocking_io: {time.strftime('%X')}")
    time.sleep(1)
    print(f"blocking_io 结束: {time.strftime('%X')}")


async def main():
    print(f"开始 main: {time.strftime('%X')}")

    await asyncio.gather(
        asyncio.to_thread(blocking_io),
        asyncio.sleep(1),
    )

    print(f"结束 main: {time.strftime('%X')}")


if __name__ == "__main__":
    asyncio.run(main())
