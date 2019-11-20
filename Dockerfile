FROM node:lts-alpine as builder
WORKDIR /app
ADD *.json ./
RUN npm install
ADD . .
RUN REACT_APP_URL_POST='https://mail-send-gvxzswdqqa-ew.a.run.app/mail/send' npm run build

FROM nginx:alpine
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/docker-entrypoint.sh /docker-entrypoint.sh
COPY --from=builder /app/build/. /usr/share/nginx/html/
RUN chmod +x /docker-entrypoint.sh
EXPOSE $PORT
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]