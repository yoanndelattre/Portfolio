FROM node:alpine as builder
WORKDIR /app
ADD *.json ./
RUN npm install
ADD . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build/. /usr/share/nginx/html/
COPY docker/nginx-conf/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD nginx -g 'daemon off;'