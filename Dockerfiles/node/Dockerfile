FROM node:alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app


RUN apk update 
RUN npm install -g npm  
RUN npm install -g @vue/cli

RUN npm install -g firebase-tools

USER node

EXPOSE 3000
