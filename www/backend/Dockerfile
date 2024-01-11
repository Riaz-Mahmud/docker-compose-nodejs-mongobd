FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY ./config.js ./
CMD ["npm", "run", "dev"]