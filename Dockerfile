FROM node:alpine
WORKDIR /app
ADD *.json ./
RUN npm install
ADD . .
EXPOSE 3000
CMD [ "npm", "start" ]