# Build:
# docker build -t meanjs/mean .
#
# Run:
# docker run -it meanjs/mean
#
# Compose:
# docker-compose up -d

FROM node:7

# 80 = HTTP, 443 = HTTPS, 3000 = MEAN.JS server, 35729 = livereload, 8080 = node-inspector
EXPOSE 80 443 3000 35729 8080

# Set development environment as default
ENV NODE_ENV development

RUN apt-get update && \
      apt-get -y install sudo

RUN mkdir -p /opt/hello-mean
WORKDIR /opt/hello-mean

# Copies the local package.json file to the container
# and utilities docker container cache to not needing to rebuild
# and install node_modules/ everytime we build the docker, but only
# when the local package.json file changes.
# Install npm packages
COPY package.json /opt/hello-mean
RUN sudo npm install --production

RUN npm install @angular/cli@1.0.0-rc.1
RUN npm install typescript

COPY . /opt/hello-mean

# Set the Mongo Environment variable
ENV MEAN_MONGO_BASE_URI mongodb://db_1:27017/ 

# Run MEAN.JS server
CMD npm run start:prod
