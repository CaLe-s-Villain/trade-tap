# server/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy the full monorepo to install shared + workspace dependencies
COPY . .

# Install only the server workspace dependencies
RUN npm ci --workspace server

# Set working directory to server workspace
WORKDIR /app/server

EXPOSE 5001

CMD ["npm", "run", "dev"]
