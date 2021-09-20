FROM node:lts
RUN apt update && \
    apt upgrade -y  && \
    apt install -y zsh wget git && \
    npm install -g eslint && \
    wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true