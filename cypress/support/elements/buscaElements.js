class BuscaElements {
    fecharPopup = () => { return '//*[@id="new-LTBOXC"]/div/div[2]/span'} 

    inputSearch = () => { return '//*[@id="neemu-input"]'}
    lupa = () => {return '//*[@class="btn-buscar"]'}
    resultadoBusca = () => {return '//*[@id="titulo-container"]/h1'}
    semResultadoBusca = () => {return '//*[@id="alerta-sem-resultado"]'}
    popupMaisBuscados = () => {return '//*[@class="ac-container"]/div/div[3]'}
    autoCompleteItem = () => {return '//*[@class="ac-terms-container"]/li/span'}
    filtroCorVermelha = () => {return '//*[@id="neemu-search-filters"]/li[3]/ul/li[8]/a'} 
    filtroCorVermelhaSelect = () => {return '//*[@id="neemu-search-filters"]/li[3]/ul/li[1]'}
    itemOrdemMenorPreco = () => {return '/html/body/main/div[2]/div[5]/div[3]/ul/li[2]/a'}
    itemOrdemMenorPrecoSelect = () => {return '/html/body/main/div[2]/div[5]/div[3]/ul/li[2]'}
}

export default BuscaElements;