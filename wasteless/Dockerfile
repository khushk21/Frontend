# Stage 1: Build React App
FROM node:16.17.1 AS build
# Set the working directory to /wasteless
WORKDIR /wasteless

# Copy the package.json and package-lock.json files into the container at /wasteless
COPY wasteless/package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application code into the container at /wasteless
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NAME Wasteless

# Run app.js when the container launches
CMD ["npm", "start"]