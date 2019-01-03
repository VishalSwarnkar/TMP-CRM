# base image
FROM node

RUN apt-get update && \
DEBIAN_FRONTEND="noninteractive" \
apt-get install -y --no-install-recommends \
chromium \
libgconf-2-4 \
openjdk-8-jre-headless \
&& rm -rf /var/lib/apt/lists/*

# Need to be root user for installing node-sass dependencies
# USER node

ENV CHROME_BIN /usr/bin/chromium

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# add app
COPY . /home/node/app

# set working directory

# WORKDIR /usr/src/app/ClientApp
WORKDIR /home/node/app/ClientApp

# add `/home/node/app/ClientApp/node_modules/.bin` to $PATH
ENV PATH /home/node/app/ClientApp/node_modules/.bin:$PATH


RUN npm rebuild node-sass

# start app
CMD ng serve --host 0.0.0.0
