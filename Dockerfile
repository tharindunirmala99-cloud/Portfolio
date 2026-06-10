# Step 1: Build Stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package configurations to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the production-ready static assets
RUN npm run build

# Step 2: Runtime Stage
FROM nginx:alpine

# Copy the custom nginx configuration for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 3000 matching Nginx configuration
EXPOSE 3000

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
