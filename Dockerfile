# Step 1: Use an official Node.js image as a base
FROM node:16-alpine AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use an official Nginx image to serve the built app
FROM nginx:alpine

# Step 8: Copy the build output to the Nginx web directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to the outside world
EXPOSE 80

# Step 10: Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
