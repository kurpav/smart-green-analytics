FROM node:9.10.0

WORKDIR /usr/app

RUN node -v

COPY package.json .
RUN npm install --quiet

COPY . .
