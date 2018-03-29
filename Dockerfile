FROM node:9.10.0

WORKDIR /usr/app

RUN apk update

COPY package.json .
RUN npm install --quiet

COPY . .
