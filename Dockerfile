FROM node:18-alpine

WORKDIR /blgrv_frontend

COPY package*.json .
COPY yarn.lock .
RUN yarn install

COPY . .

RUN npm run build
