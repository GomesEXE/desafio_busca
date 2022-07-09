class BuscaElements {

    fecharPopup = () => { return '//*[@id="new-LTBOXC"]/div/div[2]/span'} 

    inputSearch = () => { return '//*[@id="neemu-input"]'}
    lupa = () => {return '//*[@id="header-search"]/div/fieldset/input[2]'}
    resultadoBusca = () => {return '//*[@id="titulo-container"]/h1'}
    semResultadoBusca = () => {return '//*[@id="alerta-sem-resultado"]'}
    popupMaisBuscados = () => {return '/html/body/div[7]/div/div[3]'}
    autoCompleteItem = () => {return '/html/body/div[7]/ul[1]/li[1]/span'}
    filtroCorVermelha = () => {return '//*[@id="neemu-search-filters"]/li[3]/ul/li[8]/a'} 
    filtroCorVermelhaSelect = () => {return '//*[@id="neemu-search-filters"]/li[3]/ul/li[1]'}
    itemOrdemMenorPreco = () => {return '/html/body/main/div[2]/div[5]/div[3]/ul/li[2]/a'}
    itemOrdemMenorPrecoSelect = () => {return '/html/body/main/div[2]/div[5]/div[3]/ul/li[2]'}
}

export default BuscaElements;