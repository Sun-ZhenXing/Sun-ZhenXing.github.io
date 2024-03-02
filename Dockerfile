ARG NODE_VERSION=20.11.0
ARG NPM_REGISTER=https://registry.npmmirror.com/

# Builder
FROM node:$NODE_VERSION-bookworm as builder
WORKDIR /app
ARG NPM_REGISTER
COPY . ./
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npm -v \
    && npm config set registry $NPM_REGISTER \
    && npm install -g pnpm \
    && pnpm -v \
    && pnpm config set registry $NPM_REGISTER \
    && pnpm install \
    && pnpm build

# Nginx Server
FROM nginx:1.25.3-alpine3.18-slim
WORKDIR /usr/share/nginx/html/
COPY --from=builder /app/src/.vuepress/dist/ ./
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
