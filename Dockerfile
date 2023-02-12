FROM node:14.17-alpine AS builder

ENV NODE_ENV=production  
# set environment variable for Node production

WORKDIR /app
# set the working directory inside the container

COPY ["package.json", "./"]
# copy the package.json file into the working directory

RUN npm install
# run npm install to install the necessary packages specified in the package.json

COPY . .  
# copy all files from the build context into the working directory

CMD ["yarn", "start"]
# command to start the application