FROM node:alpine-3.18

WORKDIR /app

COPY . .

RUN rm -rf node_modules
RUN npm i 

CMD ["npm", "start"]

EXPOSE 3000
