# syntax=docker/dockerfile:1

FROM node:22-bookworm-slim AS build
WORKDIR /app

ARG VITE_PUBLIC_URL=http://localhost:3000
ARG VITE_LOBBY_URL=http://localhost:3000
ENV VITE_PUBLIC_URL=${VITE_PUBLIC_URL}
ENV VITE_LOBBY_URL=${VITE_LOBBY_URL}

# Enable pnpm via corepack
RUN corepack enable

# Install deps first for better layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Build the Nitro server + client assets
COPY . .
RUN pnpm build

FROM node:22-bookworm-slim AS runtime
WORKDIR /app

ARG VITE_PUBLIC_URL=http://localhost:3000
ARG VITE_LOBBY_URL=http://localhost:3000

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV VITE_PUBLIC_URL=${VITE_PUBLIC_URL}
ENV VITE_LOBBY_URL=${VITE_LOBBY_URL}

# Nitro output is self-contained and includes traced runtime deps
COPY --from=build /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
