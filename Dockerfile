# Builder
FROM node:18.16.0-bullseye-slim as builder

WORKDIR /app

COPY . ./

ENV NODE_OPTIONS=--max-old-space-size=4096

RUN npm -v \
    && npm config set registry https://registry.npmmirror.com/ \
    && npm install -g pnpm \
    && pnpm -v \
    && pnpm config set registry https://registry.npmmirror.com/ \
    && pnpm install \
    && pnpm build

# Nginx Server
FROM nginx:1.24.0-alpine3.17-slim

WORKDIR /usr/share/nginx/html/

COPY --from=builder /app/src/.vuepress/dist/ ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
