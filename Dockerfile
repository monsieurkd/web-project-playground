# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

RUN npm install -g nodemon
RUN npm install mysql2
RUN npm install cors
RUN npm install sql-client
RUN npm install mysql

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

ENV PATH /usr/src/app/node_modules/.bin:$PATH


# Bind the Express app to port 3000
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
# CMD ["tail", "-f", "/dev/null"]
