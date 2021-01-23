FROM alpine:3.13

# File Author / Maintainer
LABEL authors="Chetan Raj <chetan.narian@gmail.com>"

# Update & install required packages
RUN apk add --update nodejs bash

# Install app dependencies
COPY package.json /www/package.json
RUN cd /www; npm install

# Copy app source
COPY . /www

# Set work directory to /www
WORKDIR /www

# set your port
ENV PORT 4000

# expose the port to outside world
EXPOSE  4000

# start command as per package.json
CMD ["npm", "start"]
