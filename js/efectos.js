//-----------------------------------------------------------| CONTENIDO |-----------------------------------------------------------
//-----------------------| Buscador |------------------------------------------
contentSearcher.btnDesplegableBusquedaAvanzada.click(function() {
    contentSearcher.busquedaAvanzada.toggle("blind", 500);
    if ($(this).hasClass('fa-chevron-circle-down')) {
        $(this).switchClass('fa-chevron-circle-down', 'fa-chevron-circle-up');
    } else if ($(this).hasClass('fa-chevron-circle-up')) {
        $(this).switchClass('fa-chevron-circle-up', 'fa-chevron-circle-down');
    }
})