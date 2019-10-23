FROM node:alpine as builder
WORKDIR /app
ADD *.json ./
RUN npm install
ADD . .
RUN REACT_APP_URL_POST='https://mail-send-gvxzswdqqa-ew.a.run.app/mail/send' npm run build

FROM nginx:alpine
COPY --from=builder /app/build/. /usr/share/nginx/html/
COPY dev-docker/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD nginx -g 'daemon off;'