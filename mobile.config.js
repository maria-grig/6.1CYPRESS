const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 1,
    viewportHeight: 800,
    viewportWidth: 360,
  },
});