# Use the official Node.js 14 image as a base
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Install MySQL client
RUN apt-get update && \
    apt-get install -y default-mysql-client && \
    rm -rf /var/lib/apt/lists/*

# Install global npm packages
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

# Set PATH environment variable
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
# CMD ["tail", "-f", "/dev/null"]