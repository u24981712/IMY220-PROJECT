# Single stage build
FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Move to the directory where server.js is located
WORKDIR /app/BackEnd/dist

EXPOSE 8000

CMD ["node", "server.js"]