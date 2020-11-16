FROM node:alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app


RUN apk update 
RUN npm install npm  
RUN npm install @vue/cli

RUN npm install firebase-tools

USER node

EXPOSE 3000
