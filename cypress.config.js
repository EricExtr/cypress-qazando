const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cts9vd',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso Cypress',
      reportPageTitle: 'Relatório de Testes'
    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
