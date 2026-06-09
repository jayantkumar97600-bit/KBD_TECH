import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkParser, requireAuth } from './middleware/clerk';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// Global Clerk JWT parser – makes req.userId available
app.use(clerkParser);

// Health check (public)
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Protected dashboard endpoint (requires authentication)
app.get('/dashboard', requireAuth, (req, res) => {
  const userId = (req as any).userId; // set by requireAuth middleware
  res.json({ message: `Hello user ${userId}, welcome to your dashboard` });
});

let PORT = Number(process.env.PORT) || 4000;
const MAX_PORT_TRIES = 5;
let attempts = 0;
function startServer() {
  const server = app.listen(PORT, () => {
    // Export the actual bound port for external scripts
    process.env.BACKEND_PORT = `${PORT}`;
    console.log(`🚀 Backend listening on http://localhost:${PORT}`);
    console.log(`🖥️ Frontend should be available at http://localhost:3000`);
  });
  server.on('error', (err: any) => {
    if (err.code === 'EADDRINUSE' && attempts < MAX_PORT_TRIES) {
      console.warn(`⚠️ Port ${PORT} in use, trying next port...`);
      PORT += 1;
      attempts += 1;
      startServer();
    } else {
      console.error('❌ Failed to start server:', err);
      process.exit(1);
    }
  });
}

startServer();
