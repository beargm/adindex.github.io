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


        //new Splide( '.splide' ).mount();
        //new Splide( '.splide' ).mount();



    /*new Splide( '#splide', {
        type   : 'loop',
        perPage: 3,
    } ); */

});

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
        /*breakpoints: {
            '600': {
                fixedWidth: 66,
                height: 40,
            }
        },*/
    }).mount();

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

    }).mount();

    $('#goTop').click(function() {
        $('body,html').animate({scrollTop : 0}, 800);
    });

    $(".footer-icon-cart").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-cart").hide();
        } else {
            $(".modal-shops").hide();
            $(".modal-sort").hide();
            // $(".footer-icon-view").removeClass("active");
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".footer-menu .icon-block").removeClass("active");

            $(this).addClass("active");
            $(".modal-cart").show();
        }
    });

    $(".footer-icon-fav").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-fav").hide();
        } else {
            $(".modal-shops").hide();
            $(".modal-sort").hide();
            // $(".footer-icon-view").removeClass("active");
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".footer-menu .icon-block").removeClass("active");

            $(this).addClass("active");
            $(".modal-fav").show();
        }
    });




    $(".mob-modal .modal-bg").click(function() {
        $(".footer-menu .icon-block").removeClass("active");
        $(".mob-modal").hide();

    });



    $(".footer-icon-view").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".mob-modal-view").hide();
        } else {
            $(".modal-shops").hide();
            $(".modal-sort").hide();
            $(".mob-modal").hide();
            $(".footer-menu .icon-block").removeClass("active");
            $(this).addClass("active");

            $(".mob-modal-view").show();
        }
    });

    $(".footer-icon-sort").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-sort").hide();
        } else {
            $(".modal-shops").hide();
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".footer-menu .icon-block").removeClass("active");
            $(this).addClass("active");

            $(".modal-sort").show();
        }
    });

    $(".footer-icon-shops").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-shops").hide();
        } else {

            $(".modal-sort").hide();
            $(".footer-icon-view").removeClass("active");
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".footer-menu .icon-block").removeClass("active");

            $(this).addClass("active");
            $(".modal-shops").show();
        }
    });

    $(".footer-icon-filter").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-filter").hide();
        } else {

            $(".modal-sort").hide();
            $(".footer-icon-view").removeClass("active");
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".footer-menu .icon-block").removeClass("active");

            $(this).addClass("active");
            $(".modal-filter").show();
        }
    });

    $(".mob-filter-title").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).next().slideUp();
        } else {
            $(".mob-filter-title").removeClass("active");
            $(".mob-filter-sub").slideUp();

            $(this).addClass("active");
            $(this).next().slideDown();
        }
    });

    /*$(".footer-menu .icon-block").click(function() {
        $(".mob-modal").hide();
    });*/

});









