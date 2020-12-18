//-----------------------------------------------------------| GENERALIDADES |-----------------------------------------------------------

const generalidades = {
    fragment: document.createDocumentFragment()
}


const templates = {
    pokeCard: document.querySelector('#template-card').content,
    searcherAdvanced: document.querySelector('#template-searcher-advanced').content
}

const pokeCard = $('.flex-poke-card');


//-----------------------------------------------------------| CONTENIDO |-----------------------------------------------------------
//-----------------------| main-content-searcher |------------------------------------------
const contentSearcher = {
    buscador: $('.main-content-searcher-default-input'),
    btnDesplegableBusquedaAvanzada: $('.main-content-searcher-advanced-desplegable-box-center-button'),
    busquedaAvanzada: $(".main-content-searcher-advanced-options"),
    checkTipo: $('.main-content-searcher-advanced-options-types-checkType')
}