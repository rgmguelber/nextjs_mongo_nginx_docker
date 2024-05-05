FROM node:current-alpine3.18

WORKDIR /app

COPY . .

RUN rm -rf node_modules
RUN npm i 
RUN npm build 

CMD ["npm", "start"]

EXPOSE 3000
