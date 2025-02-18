class iFramePage {
    visit() {
        cy.visit('https://sergesiluyanov.github.io/embedHabrTest/');
    }

    getIframe() {
        cy.get('iframe');
    }
}

export default new iFramePage();