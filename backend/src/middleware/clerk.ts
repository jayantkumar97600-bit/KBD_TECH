import { clerkMiddleware, getAuth } from '@clerk/express';
import type { RequestHandler } from 'express';

// Export a pre-configured auth middleware that validates JWT and adds user info to request
// Global Clerk parser – validates JWT and populates req.auth
export const clerkParser: RequestHandler = clerkMiddleware();

// Helper middleware that enforces authentication for API routes
export const requireAuth: RequestHandler = (req, res, next) => {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ error: 'Unauthenticated' });
  }
  // Attach userId for downstream handlers
  (req as any).userId = userId;
  next();
};
