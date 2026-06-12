# ---------------------------------------------------
# Backend Dockerfile – Express (production)
# ---------------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app

# Install build‑time dependencies
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install --legacy-peer-deps
# Compile TypeScript
RUN npx tsc -p tsconfig.json

# Runtime stage – minimal image
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

# Copy compiled output and production deps
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
RUN npm install --production --legacy-peer-deps

EXPOSE 4000
CMD ["node", "dist/index.js"]