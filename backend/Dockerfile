# ---------------------------------------------------
# Backend Dockerfile – Express (production)
# ---------------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app
# Copy monorepo package files
COPY package.json package-lock.json ./
COPY apps/backend/package.json ./apps/backend/package.json
COPY packages/shared/package.json ./packages/shared/package.json
RUN npm ci --ignore-scripts
# Copy source
COPY apps/backend ./apps/backend
COPY packages/shared ./packages/shared
# Build TypeScript
RUN npx tsc -p apps/backend/tsconfig.json
# Runtime stage
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/apps/backend/dist ./dist
COPY --from=builder /app/apps/backend/package.json ./
RUN npm ci --omit=dev && npm prune --production
EXPOSE 4000
CMD ["node", "dist/index.js"]
