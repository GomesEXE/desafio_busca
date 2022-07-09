/// <reference types="Cypress" />

import BuscaElements from '../elements/buscaElements'
const buscaElements = new BuscaElements
const url = Cypress.config("baseUrl")

class BuscaPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url,{failOnStatusCode: false,  headers: {'Accept-Encoding': 'gzip, deflate'}})
        cy.xpath(buscaElements.fecharPopup()).click()
    }

    ClickInput() {
        cy.xpath(buscaElements.inputSearch()).click()
    }

    typeInputItem() {
        cy.xpath(buscaElements.inputSearch()).click()
            .type('Retrovisor')
    }

    typeInputNoItem() {
        cy.xpath(buscaElements.inputSearch()).click()
            .type('feijao')
    }

    pesquisaPorClick() {
        cy.xpath(buscaElements.lupa()).click()
    }

    pesquisaPorEnter() {
        cy.xpath(buscaElements.inputSearch())
            .type('{enter}')
    }

    validarBusca() {
        cy.xpath(buscaElements.resultadoBusca()).should('contain', 'Resultado da Busca:')
    }

    validarPopupMaisBuscados() {
        cy.xpath(buscaElements.popupMaisBuscados()).should('contain', 'Termos mais buscados')
    }

    validarAutoCompleteItem() {
        cy.xpath(buscaElements.autoCompleteItem()).should('contain', 'retrovisor')
    }

    validarSemResultado() {
        cy.xpath(buscaElements.semResultadoBusca()).should('contain', 'Ops! Nenhum resultado para "feijao"')
    }

    clicarFiltroVermelho() {
        cy.xpath(buscaElements.filtroCorVermelha()).click();
    }

    validarFiltroVermelhoSelect() {
        cy.xpath(buscaElements.filtroCorVermelhaSelect()).should('have.class', 'selected')
    }

    clicarOrdemMenorPreco() {
        cy.xpath(buscaElements.itemOrdemMenorPreco()).click();
    }

    validarOrdemMenorPrecoSelect() {
        cy.xpath(buscaElements.itemOrdemMenorPrecoSelect()).should('have.class', 'ascprice OrderByPriceASC selected')
    }
}

export default BuscaPage;