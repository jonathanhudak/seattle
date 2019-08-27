// jest-puppeteer.config.js
module.exports = {
  server: {
    command: "npm run build && npm run start",
    port: 3000,
    launchTimeout: 10000,
    debug: true
  }
};
