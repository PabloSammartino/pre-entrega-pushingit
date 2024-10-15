const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pushing-it.vercel.app",
    defaultCommandTimeout: 10000
  },
  env: {
    username: "pushingit",
    password: "123456!",
    baseApiUrl: "https://pushing-it-3.onrender.com",
    token: null
  }
});