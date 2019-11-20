#!/usr/bin/env sh
sed -i "s/\${PORT}/${PORT}/g" /etc/nginx/conf.d/*.conf
exec "$@"