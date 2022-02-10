$(function () {


    $('.lazy').lazy();

    if($(this).scrollTop() > 170) {
        $('.mob-header-bottom').css({"display" : ""});
        $('.catalog-trigger').removeClass("active");
        $('.mob-header').addClass("fixed");
        $("body").removeClass("fixed-important");
    } else {
        $("body").addClass("fixed-important");
        $('.catalog-trigger').addClass("active");
        $('.mob-header-bottom').css({"display" : "block"});
        $('.mob-header').removeClass("fixed");
    }

    $(window).scroll(function() {
        if($(this).scrollTop() > 170) {
            $('.mob-header-bottom').css({"display" : ""});
            $('.catalog-trigger').removeClass("active");
            $('.mob-header').addClass("fixed");
            $("body").removeClass("fixed-important");

        } else {
            $("body").addClass("fixed-important");
            $('.catalog-trigger').addClass("active");
            $('.mob-header-bottom').css({"display" : "block"});
            $('.mob-header').removeClass("fixed");
        }


    });

    $(".product-card .ic-fav, .product-card-2 .ic-fav").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $(".tag-list .tag").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $(".catalog-trigger").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".mob-header-bottom").hide();
            $(".mob-header-bottom").removeClass("active");

        } else {
            $(".mob-header-bottom").show();
            $(".mob-header-bottom").addClass("active");

            $(this).addClass("active");


        }
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











