FROM node:8.11.2-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
RUN apk add --no-cache bash
COPY --from=node /usr/src/app/dist/OmniaFrontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf