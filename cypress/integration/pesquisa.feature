Feature: Pesquisa

Scenario: Realizar busca clicando na lupa
    Given que estou na home Page
    When inserir o termo TV
       And clicar na lupa
    Then será exibida a página de busca com os produtos TV

Scenario: Realizar busca clicando enter
Given que estou na home page
When inserir o termo Geladeira
   And apertar a tecla Enter
Then será exibida a página de busca com os produtos Geladeira

Scenario: Realizar busca nos termos mais pesquisados
Given que estou na home page
When clico no input de busca
   And clico no primeiro item da lista
Then será exibida a página de busca com os produtos do primeiro item