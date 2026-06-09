FROM node:20-alpine

WORKDIR /app

# Copy package files

COPY package.json ./

# Install dependencies

RUN npm install
COPY prisma ./prisma
RUN npx prisma generate

# Copy project files

COPY app ./app
COPY components ./components
COPY lib ./lib

COPY types ./types

# Copy config files

COPY tsconfig.json ./
COPY next.config.js ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY next-env.d.ts ./

EXPOSE 3000

# Build app

RUN npm run build

CMD ["npm", "start"]
