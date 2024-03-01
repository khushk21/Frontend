# Stage 1: Build React App
FROM node:16.17.1 AS build
# Set the working directory to /wasteless
WORKDIR /wasteless

# Copy the package.json and package-lock.json files into the container at /wasteless
COPY wasteless/package*.json ./

COPY wasteless/ /wasteless/
# Install any needed packages specified in package.json
RUN npm install
RUN npm run build

# Copy the rest of the application code into the container at /wasteless


FROM node:16.17.1

WORKDIR /wasteless

COPY  --from=build /wasteless/build /wasteless/build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.js when the container launches
CMD ["npm", "start"]