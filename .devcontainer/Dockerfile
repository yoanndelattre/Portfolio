FROM node:lts-alpine
RUN apk update && \
    apk upgrade && \
    apk add zsh wget git && \
    npm install -g eslint && \
    wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true