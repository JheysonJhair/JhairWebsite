$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });


    let sobremi = $('#sobremi').offset().top,
        skills = $('#skills').offset().top,
        servicios = $('#servicios').offset().top,
        portafolios = $('#portafolios').offset().top,
        contacto = $('#contacto').offset().top;


    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-sobremi').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: sobremi -84
        },600);
    });

    $('#enlace-skills').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: skills-85
        },600);
    });

    $('#enlace-servicios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios-84
        },600);
    });

    $('#enlace-portafolios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: portafolios-84
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -84
        },600);
    });
    $('#enlace-arriba').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });
    $('#mitrabajo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: portafolios-84
        },600);
    });

});