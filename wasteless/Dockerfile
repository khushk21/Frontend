# Stage 1: Build React App
FROM node:16.17.1 AS build
WORKDIR /wasteless
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve React App
FROM node:16.17.1
WORKDIR /wasteless
COPY --from=build /wasteless/build /wasteless/build

EXPOSE 3000

CMD ["npm", "start"]