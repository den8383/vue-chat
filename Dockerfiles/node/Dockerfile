FROM node:alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app


RUN apk update 
RUN npm install -g npm  
RUN npm install -g @vue/cli

USER node

EXPOSE 3000
