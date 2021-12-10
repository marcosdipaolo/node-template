FROM node:alpine AS builder
WORKDIR /app
COPY package.json tsconfig.json ./
COPY src src/
RUN npm install
RUN npm run build

FROM node:alpine
WORKDIR /app
RUN apk update && apk add bash
COPY wait-for-it.sh ./
COPY package.json .
RUN chmod +x wait-for-it.sh
RUN npm i --production
COPY --from=builder /app/dist dist
EXPOSE 3000