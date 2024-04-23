# Stage 1: Build React App
FROM node:16.17.1 AS build

# Set the working directory to /wasteless
WORKDIR /wasteless

# Copy the package.json and package-lock.json files into the container at /wasteless
COPY wasteless/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container at /wasteless
COPY wasteless/ ./

# Run the build process
RUN npm run build

# Stage 2: Serve React App
FROM node:16.17.1

WORKDIR /wasteless

# Copy the built app from the previous stage
COPY --from=build /wasteless/build /wasteless/build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Install serve to serve the static React app
RUN npm install -g serve

# Run the built React app using serve
CMD ["serve", "-s", "build", "-l", "3000"]
