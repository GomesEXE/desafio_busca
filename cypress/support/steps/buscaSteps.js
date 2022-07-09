/* global Given, Then, When */

import HomePage from '../pageobjects/homePage'
const homePage = new HomePage

Given("que estou na home Page", () => {
	homePage.acessarSite();
});

When("inserir o termo TV", () => {
	homePage.pesquisaPorClick();
});


When("clicar na lupa", () => {
	return true;
});


Then("será exibida a página de busca com os produtos TV", () => {
	return true;

});

//caso 02

Given("que estou na home page", () => {
	homePage.acessarSite()
});


When("inserir o termo Geladeira", () => {
	homePage.pesquisaPorEnter()
});


When("apertar a tecla Enter", () => {
	return true;
});


Then("será exibida a página de busca com os produtos Geladeira", () => {
	return true;
});

//caso 03
Given("que estou na home page", () => {
	homePage.acessarSite()
});


When("clico no input de busca", () => {
	return true;	
});


When("clico no primeiro item da lista", () => {
	return true;
});


Then("será exibida a página de busca com os produtos do primeiro item", () => {
	homePage.validarPopupMaisBuscados()
});
