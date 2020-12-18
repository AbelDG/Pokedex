//-----------------------------------------------------------| GENERALIDADES |-----------------------------------------------------------

const generalidades = {
    fragment: document.createDocumentFragment()
}


const templates = {
    pokeCard: document.querySelector('#template-card').content
}

const pokeCard = $('.flex-poke-card');


//-----------------------------------------------------------| CONTENIDO |-----------------------------------------------------------
//-----------------------| main-content-searcher |------------------------------------------
const contentSearcher = {
    buscador: $('.main-content-searcher-default-input'),
    btnDesplegableBusquedaAvanzada: $('.main-content-searcher-advanced-desplegable-button'),
    busquedaAvanzada: $(".main-content-searcher-advanced-options")
}