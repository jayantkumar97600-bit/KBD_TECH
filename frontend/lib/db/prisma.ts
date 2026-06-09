import { PrismaClient } from '@prisma/client';

/**
 * Prisma client singleton to prevent multiple instances during hot-reloading in development.
 * In production the same instance will be reused across the server.
 */
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  // In production we instantiate a single PrismaClient.
  prisma = new PrismaClient();
} else {
  // In development we attach the client to the global object to preserve across module reloads.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globalAny: any = global;
  if (!globalAny.__prisma) {
    globalAny.__prisma = new PrismaClient();
  }
  prisma = globalAny.__prisma;
}

export default prisma;
