FROM node:20.17.0

WORKDIR /backend

COPY package.json ./
COPY package-lock.json ./

RUN npm install

RUN npm i -g nodemon

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
