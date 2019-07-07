FROM node:alpine as builder
WORKDIR /app
ADD *.json ./
RUN npm install
ADD . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build/. /usr/share/nginx/html/
ADD https://storage.googleapis.com/assets-build-docker-portfolio/nginx-conf/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD echo -e "Portfolio is viewable at: http://localhost"; exec nginx -g 'daemon off;'