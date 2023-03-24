# Node server
FROM node:12-alpine
WORKDIR /usr/src/app
COPY ["package.json", "./"]
RUN npm install --production --silent
COPY . /usr/src/app

# Runserver command
CMD ["npm", "start"]
EXPOSE 3000