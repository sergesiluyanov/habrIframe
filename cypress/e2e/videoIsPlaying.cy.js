import iFramePage from './page_objects/iframe.js';

describe('template spec', () => {
    it('passes', () => {
      cy.iFramePage.visit();
    })
  })