FROM node:14.17 AS builder
WORKDIR /app
COPY . .
RUN ls -l
RUN npm install && \
    npm install -g retire && \
    retire
RUN ["chmod", "+x", "wait-for-it.sh"]
EXPOSE 3000