FROM klakegg/hugo:ext-alpine as builder
WORKDIR /app
COPY . .
RUN git submodule init && \
    git submodule update && \
    hugo --minify

FROM nginx:alpine
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/docker-entrypoint.sh /docker-entrypoint.sh
COPY docker/nginx/robots.txt /usr/share/nginx/html/robots.txt
COPY docker/nginx/sitemap.xml /usr/share/nginx/html/sitemap.xml
COPY --from=builder /app/public /usr/share/nginx/html
RUN chmod +x /docker-entrypoint.sh
EXPOSE $PORT
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
