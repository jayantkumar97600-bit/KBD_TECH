import json
import logging
from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter()
logger = logging.getLogger("ws_audio")
logger.setLevel(logging.INFO)

@router.websocket("/ws/audio")
async def websocket_audio_endpoint(websocket: WebSocket):
    await websocket.accept()
    logger.info("WebSocket client connected")
    try:
        while True:
            data = await websocket.receive_text()
            try:
                payload = json.loads(data)
                logger.info(f"WebSocket audio chunk received: {payload.get('info', 'no info')}")
            except json.JSONDecodeError:
                logger.warning("Received non‑JSON WebSocket message")
    except WebSocketDisconnect:
        logger.info("WebSocket client disconnected")