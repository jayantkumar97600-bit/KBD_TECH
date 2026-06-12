import dgram from "dgram";

const RTP_PORT = Number(process.env.RTP_PORT) || 5004;

const udpServer = dgram.createSocket("udp4");

udpServer.on("listening", () => {
  console.log(`🎧 RTP listener started on UDP ${RTP_PORT}`);
});

udpServer.on("message", (msg, rinfo) => {
  console.log(
    `📦 RTP packet from ${rinfo.address}:${rinfo.port} size=${msg.length}`
  );
});

udpServer.on("error", (err) => {
  console.error("❌ RTP listener error:", err);
});

udpServer.bind(RTP_PORT);