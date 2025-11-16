FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm prune --omit=dev  # remove dev deps for production

EXPOSE 4000
CMD ["node", "src/server.js"]
