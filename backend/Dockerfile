FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose backend port
EXPOSE 4000

# Start the server
#CMD ["node", "server.js"]

CMD ["node", "src/server.js"]
