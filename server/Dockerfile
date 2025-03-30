FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci
EXPOSE 5001
CMD ["npm", "run", "dev"]
