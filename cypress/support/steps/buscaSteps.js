/* global Given, Then, When */

import BuscaPage from '../pageobjects/buscaPage'
const buscaPage = new BuscaPage

//caso 01 
Given("que estou na home page", () => {
	buscaPage.acessarSite();
});

When("inserir o termo retrovisor", () => {
	buscaPage.typeInputItem();
});


When("clicar na lupa", () => {
	buscaPage.pesquisaPorClick();
});


Then("será exibida a página de busca com os produtos retrovisor", () => {
	buscaPage.validarBusca();

});

//caso 02

When("apertar a tecla Enter", () => {
	buscaPage.pesquisaPorEnter();
});

//caso 03

When("clico no input de busca", () => {
	buscaPage.ClickInput();
});


Then("será exibido um popup com os termos mais pesquisados no site", () => {
	buscaPage.validarPopupMaisBuscados();
});

//caso 04


Then("será listados opções relacionado ao termo digitado", () => {
	buscaPage.validarAutoCompleteItem();
});

//caso 05


When("inserir o termo feijao", () => {
	buscaPage.typeInputNoItem();
});


Then("será exibida a página com a seguinte mensagem Ops! Nenhum resultado para feijao", () => {
	buscaPage.validarSemResultado();
});

//caso 06

Given("que estou na página de busca", () => {
	buscaPage.acessarSite();
	buscaPage.typeInputItem();
	buscaPage.pesquisaPorClick();
});

When("selecionar o filtro de cor Vermelho", () => {
	buscaPage.clicarFiltroVermelho();
});

Then("a pagina deve carregar somente os itens com a cor Vermelha", () => {
	buscaPage.validarFiltroVermelhoSelect();
});

//caso 07
When("Clico na opção de Ordenar Por Menor Preço", () => {
	buscaPage.clicarOrdemMenorPreco();
});

Then("o sistema deve exibir os produtos na ordem dos preços do menor para o maior", () => {
	buscaPage.validarOrdemMenorPrecoSelect();
});
