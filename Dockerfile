FROM node:18-alpine

WORKDIR /blgrv_frontend

# COPY package*.json .

# RUN npm install

COPY . .

# RUN npm run build
