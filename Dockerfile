FROM node:18-alpine as base

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

RUN pnpm export -o /out

EXPOSE 3000

CMD ["pnpm", "start"]