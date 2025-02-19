class iFramePage {
    visit() {
        cy.visit('https://sergesiluyanov.github.io/embedHabrTest/');
    }

    iFramePlayButton() {
        cy.get('iframe[src="https://rutube.ru/play/embed/bed49f6658d1b7755b08ae45b5e7d002"]') // Здесь указываем селектор iframe
        .its('0.contentDocument.body') // Получаем доступ к содержимому iframe
        .should('not.be.empty') // Проверяем, что содержимое не пустое
        .then(cy.wrap) // Оборачиваем содержимое, чтобы использовать Cypress команды
        .find('[data-testid="ui-play"]') // Находим кнопку по атрибуту data-testid
        .click(); // Кликаем по кнопке
      
    }
}

export default new iFramePage();