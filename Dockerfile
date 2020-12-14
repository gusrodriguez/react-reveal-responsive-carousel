# base image
FROM node:12-alpine

WORKDIR '/app'

# Install dependencies
COPY package.json .
RUN npm install
COPY . .

# default command
CMD ["npm", "run", "start"]
