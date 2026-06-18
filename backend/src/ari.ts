import ari from "ari-client";
import "./rtpListener";

const ARI_URL = "http://asterisk:8088";
const ARI_USER = "admin";
const ARI_PASS = "admin123";

const RTP_HOST = process.env.RTP_HOST || "backend";
const RTP_PORT = Number(process.env.RTP_PORT) || 5004;

async function startAri() {

  try {

    const client = await ari.connect(
      ARI_URL,
      ARI_USER,
      ARI_PASS
    );

    console.log("✅ Connected to ARI");

    client.on(
      "StasisStart",
      async (_event: any, channel: any) => {

        console.log(
          "📞 Incoming Call:",
          channel.name
        );

        // Ignore helper RTP channels
        if (
          channel.name &&
          channel.name.startsWith("UnicastRTP")
        ) {
          console.log(
            "⏭️ Ignoring RTP helper channel"
          );
          return;
        }

        try {

          // ANSWER CALL
          await channel.answer();

          console.log("✅ Call answered");

          // CREATE EXTERNAL MEDIA CHANNEL
          const external =
            await client.channels.externalMedia({
              app: "ai-assistant",
              external_host: `${RTP_HOST}:${RTP_PORT}`,
              format: "ulaw",
              direction: "both",
            });

          console.log(
            "🟢 ExternalMedia channel created:",
            external.id
          );

          // CREATE BRIDGE
          const bridge =
            await client.bridges.create({
              type:
                "mixing,proxy_media,dtmf_events",
            });

          console.log(
            "🔀 Bridge created:",
            bridge.id
          );

          // ADD REAL CALLER
          await bridge.addChannel({
            channel: channel.id,
          });

          // ADD EXTERNAL MEDIA CHANNEL
          await bridge.addChannel({
            channel: external.id,
          });

          console.log(
            "🔗 Channels added to bridge"
          );

          // DEBUG BRIDGE
          const bridgeInfo =
            await client.bridges.get({
              bridgeId: bridge.id,
            });

          console.log(
            "📡 Active bridge channels:",
            bridgeInfo.channels
          );

          // KEEP REFERENCES
          (channel as any)._bridge = bridge;
          (channel as any)._external = external;

          channel.on(
            "StasisEnd",
            async () => {

              console.log("📴 Call ended");

              try {

                await bridge.destroy();

              } catch {}

              try {

                await external.hangup();

              } catch {}

            }
          );

          console.log(
            "🎙️ Waiting for RTP audio..."
          );

          // KEEP SESSION ALIVE
          await new Promise(() => {});

        } catch (err) {

          console.error(
            "🚨 Call handling error:",
            err
          );

        }

      }
    );

    client.on(
      "ChannelDestroyed",
      (event: any) => {

        console.log(
          "💥 Channel destroyed:",
          event.channel?.name
        );

      }
    );

    client.start("ai-assistant");

    console.log("🚀 ARI app started");

  } catch (err) {

    console.error(
      "❌ ARI connection failed:",
      err
    );

  }

}

startAri();
