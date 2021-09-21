$(function () {
    $('.lazy').lazy();
    AOS.init({
        disable: 'mobile',
        startEvent: 'DOMContentLoaded',
        easing: 'ease',
        duration: 2000,
        offset: '0',
        once: true
    });



    $(window).on("load",function(){
        $(".itg-video-scroll .itg-video-item a").mPageScroll2id({
            //offset: 170,
            //highlightClass:"highlighted-menu-item"
        });
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').fadeOut();
        }
    });
    $('#goTop').click(function() {
        $('body,html').animate({scrollTop : 0}, 800);
    });


});










