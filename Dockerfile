# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install --production

# Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]

