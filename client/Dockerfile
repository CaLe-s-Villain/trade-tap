# client/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Prevent issues with host-mounted node_modules
ENV PATH /app/node_modules/.bin:$PATH

# Copy full monorepo to install all workspace deps
COPY . .

# Install only the client workspace dependencies
RUN npm ci --workspace client

# Set working directory to client workspace
WORKDIR /app/client

EXPOSE 5173

CMD ["npm", "run", "dev"]
