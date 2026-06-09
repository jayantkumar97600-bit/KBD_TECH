
import asyncio
import asyncari

async def stasis_start(channel_obj, ev):
    print("NEW CALL RECEIVED")

    await channel_obj.answer()

    print("CALL ANSWERED")


async def main():

    async with asyncari.connect(
        'http://127.0.0.1:8088',
        'ai-assistant',
        'admin',
        'admin123'
    ) as client:

        print("CONNECTED TO ARI")
        print("WAITING FOR CALLS...")

        client.on_channel_event(
            'StasisStart',
            stasis_start
        )

        await asyncio.Future()


asyncio.run(main())
