$( document ).ready(function() {
    
    $('.services__slideshow').hide();
    $('div[data-slide="1"]').show();

    $('.icon-next, .icon-previous').click(function() {
        let slide = $(this).data('slide');
        $('.services__slideshow').hide();
        $(`div[data-slide="${slide}"]`).show();
    })
    
    $('.menu-icon').click(function() {
        
        if($(this).attr('src') === 'images/mobile/icon-hamburger.svg') {
            $(this).attr('src', 'images/mobile/icon-cross.svg');
        } else {
            $(this).attr('src', 'images/mobile/icon-hamburger.svg');
        }

        $('.navigation__links-mobile').slideToggle('slow');
    })

    $(window).resize(function() {
        if ($(window).width() > 1000) {
            $('.navigation__links-mobile').hide();
        }
    });
    
})