# Use the official Node.js image as the base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight web server for serving the static content
FROM node:18-alpine AS runner

WORKDIR /app

# Copy the built Next.js app from the builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Expose the port the app will run on
EXPOSE 8080

# Command to run the app
CMD ["npm", "run", "start", "-p", "$PORT"]
