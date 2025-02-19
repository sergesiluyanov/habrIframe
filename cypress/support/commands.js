import 'cypress-iframe';

// блокировка всех запросов, кроме запросов к указанным доменам
Cypress.Commands.add('blockAllRequests', () => {
    cy.intercept('*', (req) => {
      const allowedDomains = ['https://sergesiluyanov.github.io/embedHabrTest/', 'rutube'];
  
      if (!allowedDomains.some(domain => req.url.includes(domain))) {
        req.destroy();
      }
    });
  });