FROM node:12

WORKDIR /usr/app

RUN apt-get update
RUN apt-get install -y vim
RUN apt-get install -y inotify-tools

RUN npm install g  nodemon
RUN npm install g  @nestjs/cli

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x start.sh

EXPOSE 8080

ENTRYPOINT ["/bin/bash", "start.sh"]