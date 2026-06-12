import ari from "ari-client";

const ARI_URL = "http://asterisk:8088";
const ARI_USER = "admin";
const ARI_PASS = "admin123";

async function startAri() {
  try {
    const client = await ari.connect(
      ARI_URL,
      ARI_USER,
      ARI_PASS
    );

    console.log("✅ Connected to ARI");

    client.on("StasisStart", async (event: any, channel: any) => {
      console.log("📞 Incoming Call:", channel.name);

      try {
        await channel.answer();

        console.log("✅ Call answered");

        await channel.play({
          media: "sound:hello-world",
        });

      } catch (err) {
        console.error("Playback error:", err);
      }
    });

    client.start("ai-assistant");

    console.log("🚀 ARI app started");

  } catch (err) {
    console.error("ARI connection failed:", err);
  }
}

startAri();