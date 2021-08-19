FROM node:alpine 
WORKDIR /app


COPY package.json .
RUN npm update
RUN npm install


COPY . .

CMD [ "npm", "start" ]