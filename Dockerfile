FROM node:6.8.0

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
