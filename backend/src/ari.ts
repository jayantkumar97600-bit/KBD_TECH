import ari from "ari-client";
import "./rtpListener";

const ARI_URL = "http://asterisk:8088";
const ARI_USER = "admin";
const ARI_PASS = "admin123";

const RTP_PORT = Number(process.env.RTP_PORT) || 5004;

async function startAri() {
  try {
    const client = await ari.connect(
      ARI_URL,
      ARI_USER,
      ARI_PASS
    );

    console.log("✅ Connected to ARI");

    client.on("StasisStart", async (_event: any, channel: any) => {

      console.log("📞 Incoming Call:", channel.name);

      // Prevent infinite recursion from ExternalMedia channels
      if (
        channel.name &&
        channel.name.startsWith("UnicastRTP")
      ) {
        console.log("⏭️ Ignoring RTP helper channel");
        return;
      }

      try {
        // Answer caller
        await channel.answer();

        console.log("✅ Call answered");

        // Create ExternalMedia RTP channel
        const external = await client.channels.externalMedia({
          app: "ai-assistant",
          external_host: "172.18.0.4:5004",
          format: "ulaw",
        });

        console.log(
          "🟢 ExternalMedia channel created:",
          external.id
        );

        // Create bridge
        const bridge = await client.bridges.create({
          type: "mixing",
        });

        console.log("🔀 Bridge created:", bridge.id);

        // Add real caller
        await bridge.addChannel({
          channel: channel.id,
        });

        // Add RTP external media channel
        await bridge.addChannel({
          channel: external.id,
        });

        console.log("🔗 Channels added to bridge");
        channel.on("StasisEnd", () => {
          console.log("📴 Call ended");
        });

        console.log("🎙️ Waiting for RTP audio...");
      } catch (err) {
        console.error("🚨 Call handling error:", err);
      }
    });
    client.on("ChannelDestroyed", (event: any) => {
      console.log("💥 Channel destroyed:", event.channel?.name);
    });

    // Start ARI app
    client.start("ai-assistant");

    console.log("🚀 ARI app started");

  } catch (err) {
    console.error("❌ ARI connection failed:", err);
  }
}

startAri();