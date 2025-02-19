import iFramePage from './page_objects/iframe.js';

describe('verify video is playing', () => {

  before(() => {
    // вызов функции на блокировку запросов
    cy.blockAllRequests();
  });

    it('clicks play button', () => {
      iFramePage.visit();

      iFramePage.iFramePlayButton();



    })
  })