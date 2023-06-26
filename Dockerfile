
FROM node:current-alpine
LABEL authors="joachimwalther"

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
#
# docker comands in the projects directory
# with cli
# -------------
# docker build -t endpoint-test .
# docker run -p 3000:3000 endpoint-test