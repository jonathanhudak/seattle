FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install PM2 globally
# RUN npm install --global pm2

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package-lock.json ./
COPY ./package.json ./

RUN npm install
# RUN npm install --production

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

CMD ["npm", "run", "dev"]

# Launch app with PM2
# CMD [ "pm2-runtime", "start", "npm", "--", "start" ]