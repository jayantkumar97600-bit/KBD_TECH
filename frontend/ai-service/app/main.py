import asyncio
import logging
from fastapi import FastAPI
from .ws.audio import router as ws_audio_router

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ai_service")

app = FastAPI()
app.include_router(ws_audio_router)


@app.get("/health")
async def health():
    return {"status": "ok"}

# ---------- RTP listener ----------
RTP_HOST = "0.0.0.0"
RTP_PORT = 5004  # expose via docker-compose

class RTPAudioProtocol(asyncio.DatagramProtocol):
    def __init__(self):
        super().__init__()
        self.transport: asyncio.DatagramTransport | None = None

    def connection_made(self, transport: asyncio.DatagramTransport) -> None:
        self.transport = transport
        sock = transport.get_extra_info("socket")
        addr = sock.getsockname()
        logger.info(f"RTP listener started on {addr}")

    def datagram_received(self, data: bytes, addr):
        logger.info(f"RTP packet received from {addr[0]}:{addr[1]} – {len(data)} bytes")
        # Placeholder: forward to processing pipeline later

    def error_received(self, exc):
        logger.error(f"RTP socket error: {exc}")

    def connection_lost(self, exc):
        logger.info("RTP listener stopped")
        if exc:
            logger.error(f"RTP listener closed with error: {exc}")

async def start_rtp_listener():
    loop = asyncio.get_running_loop()
    transport, _ = await loop.create_datagram_endpoint(
        lambda: RTPAudioProtocol(),
        local_addr=(RTP_HOST, RTP_PORT),
    )
    logger.info(f"RTP listener bound to {RTP_HOST}:{RTP_PORT}")
    return transport

@app.on_event("startup")
async def on_startup():
    await start_rtp_listener()
    logger.info("AI service startup complete")
