/// <reference types="Cypress" />

import BuscaElements from '../elements/buscaElements'
const buscaElements = new BuscaElements
const url = Cypress.config("baseUrl")

class HomePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url,{failOnStatusCode: false,  headers: {'Accept-Encoding': 'gzip, deflate'}})
    }

    // Clicar no input
    pesquisaPorClick() {
        cy.xpath(buscaElements.fecharPopup()).click()
        cy.xpath(buscaElements.inputSearch()).click()
            .type('TV')
        cy.xpath(buscaElements.lupa()).click()
    }

    pesquisaPorEnter() {
        cy.xpath(buscaElements.fecharPopup()).click()
        cy.xpath(buscaElements.inputSearch()).click()
            .type('Geladeira')
            .type('{enter}')
    }

    validarPopupMaisBuscados() {
        cy.xpath(buscaElements.fecharPopup()).click()
        cy.xpath(buscaElements.inputSearch()).click()
        cy.xpath(buscaElements.popupMaisBuscados()).should('contain', 'Termos mais buscados')
    }
}

export default HomePage;