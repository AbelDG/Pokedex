//-----------------------------------------------------------| CONTENIDO |-----------------------------------------------------------
//-----------------------| Buscador |------------------------------------------
contentSearcher.btnDesplegableBusquedaAvanzada.on('click', function() {
    contentSearcher.busquedaAvanzada.toggle("blind", 400);
    if ($(this).hasClass('fa-chevron-circle-down')) {
        $(this).switchClass('fa-chevron-circle-down', 'fa-chevron-circle-up');
        contentSearcher.busquedaAvanzada.html('');
        drawAdvancedSearcher();
    } else if ($(this).hasClass('fa-chevron-circle-up')) {
        $(this).switchClass('fa-chevron-circle-up', 'fa-chevron-circle-down');
    }
})

contentSearcher.busquedaAvanzada.on('click', contentSearcher.checkTipo, function() {
    console.log('hola');
    if ($(contentSearcher.checkTipo).hasClass('fas')) {
        $(contentSearcher.checkTipo).switchClass('fas', 'far');
    } else if ($(contentSearcher.checkTipo).hasClass('far')) {
        $(contentSearcher.checkTipo).switchClass('far', 'fas');
    }
})