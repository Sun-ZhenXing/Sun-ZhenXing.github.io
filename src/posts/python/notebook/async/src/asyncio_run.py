import asyncio


async def async_task():
    print("Start task")
    await asyncio.sleep(1)
    print("End task")


if __name__ == "__main__":
    asyncio.run(async_task())
