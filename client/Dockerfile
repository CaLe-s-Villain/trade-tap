FROM node:20-alpine

WORKDIR /app

# 👇 Add curl for healthcheck
RUN apk add --no-cache curl

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
