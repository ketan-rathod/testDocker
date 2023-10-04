FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "pacaasaskage-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "server.js"]
