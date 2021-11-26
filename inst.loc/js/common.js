$(function () {

    $('.lazy').lazy();
    const slider = $(".slider-longrid");
    slider
    $('.slider-longrid').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: false,
        autoplay: false,
        infinite: false

    });
    slider.on('wheel', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');

        } else {
            $(this).slick('slickNext');
        }
    }));



    //$("#player2").mediaelementplayer();





});










