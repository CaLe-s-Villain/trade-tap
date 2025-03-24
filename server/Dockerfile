# server/Dockerfile

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# 👇 ADD THIS to copy your app code into the container
COPY . .

EXPOSE 5001

CMD ["npm", "run", "dev"]
