# server/Dockerfile

FROM node:20-alpine

# Create and set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Leave out COPY . . so mounted volume (via docker-compose) always takes precedence

# Expose internal port used by Express
EXPOSE 5000
