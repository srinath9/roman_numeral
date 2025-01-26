FROM node:22-alpine

WORKDIR /app

COPY package*.json .
COPY tsconfig*.json .

RUN npm install --legacy-peer-deps
RUN npm install --force


COPY . . 

EXPOSE 5173

CMD ["npm", "run", "dev"]


