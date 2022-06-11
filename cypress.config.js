const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    $schema: "https://on.cypress.io/cypress.schema.json",
    defaultCommandTimeout: 30000,
    

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
     
    },
  },
});
