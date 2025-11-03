# Use Node.js LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend source code
COPY . .

# Expose frontend port
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev"]
