Feature: Busca

Scenario: Realizar busca clicando na lupa
Given que estou na home page
When inserir o termo retrovisor
    And clicar na lupa
Then será exibida a página de busca com os produtos retrovisor

Scenario: Realizar busca clicando enter
Given que estou na home page
When inserir o termo retrovisor
   And apertar a tecla Enter
Then será exibida a página de busca com os produtos retrovisor

Scenario: Realizar busca nos termos mais pesquisados
Given que estou na home page
When clico no input de busca
Then será exibido um popup com os termos mais pesquisados no site

@focus
Scenario: Validar autocomplete da barra de busca
Given que estou na home page
When inserir o termo retrovisor
Then será listados opções relacionado ao termo digitado

Scenario: Pesquisar produto não existente
Given que estou na home page
When inserir o termo feijao
   And clicar na lupa
Then será exibida a página com a seguinte mensagem Ops! Nenhum resultado para feijao

Scenario: Filtrar um item por cor
Given que estou na página de busca
When selecionar o filtro de cor Vermelho
Then a pagina deve carregar somente os itens com a cor Vermelha

Scenario: Ordenar itens exibidos por menor preço
Given que estou na página de busca
When Clico na opção de Ordenar Por Menor Preço
Then o sistema deve exibir os produtos na ordem dos preços do menor para o maior