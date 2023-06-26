
FROM node:current-alpine
LABEL authors="joachimwalther"

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
