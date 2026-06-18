import dgram from "dgram";

const RTP_BIND_HOST = process.env.RTP_BIND_HOST || "0.0.0.0";
const RTP_PORT = Number(process.env.RTP_PORT) || 5004;

const udpServer = dgram.createSocket("udp4");

udpServer.on("listening", () => {
  const address = udpServer.address();
  console.log(`RTP listener started on UDP ${address.address}:${address.port}`);
});

udpServer.on("message", (msg, rinfo) => {
  console.log(
    `RTP packet from ${rinfo.address}:${rinfo.port} size=${msg.length}`
  );
});

udpServer.on("error", (err) => {
  console.error("RTP listener error:", err);
});

udpServer.bind(RTP_PORT, RTP_BIND_HOST);
