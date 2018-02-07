FROM node:6.8.0

RUN curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz \
  && tar xzvf docker-17.04.0-ce.tgz \
  && mv docker/docker /usr/local/bin \
  && rm -r docker docker-17.04.0-ce.tgz
  
# Working directory
RUN mkdir -p /srv/
WORKDIR /srv/

# Setup srv folder
ADD package.json /srv/
RUN cd /srv
ADD . /srv/

# Install and deploy
RUN npm install
RUN npm run build
# RUN npm run deploy

EXPOSE 8000

CMD ["npm", "start"]
