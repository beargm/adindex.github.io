$(function () {


    $('.lazy').lazy();

    if($(this).scrollTop() > 250) {
        $('.mob-header').addClass("fixed");
    } else {
        $('.mob-header').removeClass("fixed");
    }
    $(window).scroll(function() {
        if($(this).scrollTop() > 250) {
            $('.mob-header').addClass("fixed");
        } else {
            $('.mob-header').removeClass("fixed");
            $('.mob-header-category').css({"display" : ""});
            $('.btn-open-catalog').css({"display" : ""});
            $(".mob-header").removeClass("open");
        }


    });

    $(".btn-open-catalog").click(function () {

        $(".mob-header").addClass("open");
        $(".mob-header-category").show();
        $(".btn-open-catalog").hide();
    });


    $('.slider-product').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        autoplay: false,
        //infinite: false
    });

    $('.slider-product-2').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        autoplay: false,
        //infinite: false
    });

    $('#goTop').click(function() {
        $('body,html').animate({scrollTop : 0}, 800);
    });
});
/*
document.addEventListener( 'DOMContentLoaded', function () {
    var slider1 = new Splide('.splide-product', {
        //fixedWidth: 100,
        //height: 60,
        //gap: 10,
        //cover: true,
        isNavigation: true,
        type   : 'loop',
        arrows     : false,
        //focus: 'center',
        breakpoints: {
            '600': {
                fixedWidth: 66,
                height: 40,
            }
        },
    }).mount();

 */
    /*
    var slider2 = new Splide('.splide-product-2', {
        isNavigation: true,
        arrows     : false,

    }).mount();

    var slider3 = new Splide('.splide-product-3', {
        isNavigation: true,
        arrows     : false,

    }).mount();

    var slider4 = new Splide('.splide-product-4', {
        isNavigation: true,
        arrows     : false,

    }).mount();*/





    /*$(".footer-menu .icon-block").click(function() {
        $(".mob-modal").hide();
    });*/











