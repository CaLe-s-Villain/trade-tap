FROM node:20-alpine
WORKDIR /app

# Prevent issues with host-mounted node_modules
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]
