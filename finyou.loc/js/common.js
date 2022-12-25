$(window).on("load",function(){
    $(".nav-page-scroll a").mPageScroll2id({
        offset: 100
        //highlightClass:"highlighted-menu-item"
    });
});
$(function () {
    $(".mobile-menu .nav-page-scroll a").click(function () {
        
        $(".mobile-menu").hide();
        //e.stopPropagation();
    });
    /*setTimeout(function () {
        $(".nav-sub-menu").attr("style", "");
    }, 1);*/

    $('.lazy').lazy();

    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: false,
        autoplay: false,
        //infinite: false
    });

    $('.slider-specials').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: false,
        fade: false,
        autoplay: false,
        //infinite: false
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]
    });

    $('.slider-deals').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        fade: false,
        autoplay: false,
        //infinite: false
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },

            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]
    });

    setTimeout(function () {
        $(".header .logo").addClass("active");

     }, 500);


    $(".select-calculate").styler();

    //$(".product-view-qty .qty input[type='number']").styler();

    /*$(".basket-list .qty input[type='number']").styler();
    $(".form-profile-data input[type='file']").styler({
        filePlaceholder: 'Загрузить документы'
    });*/




    //start mob menu
    $(".mobile-menu-trigger").click(function (e) {
        $(".mobile-menu").fadeIn();
    });
    $(".mobile-menu-close").click(function () {

        $(".mobile-menu").fadeOut();
    });

    $(".mobile-menu .hide-menu").click(function (e) {
        e.stopPropagation();
        $(".mobile-menu").fadeOut();
    });

    //end mob menu


    /*$(".city").styler({
        selectSearch: true,
        //selectSearchLimit: 5
    });*/



    AOS.init({
        disable: 'mobile',
        startEvent: 'DOMContentLoaded',
        easing: 'ease',
        duration: 2000,
        offset: '0',
        once: true
    });



    $(".form-feedback").validate({
        messages: {
            name: {
                required: 'Введите имя'
            },

            email: {
                required: 'Введите email'
            },

            message: {
                required: 'Введите сообщение'
            }

        }
    });






    $(".mob-ic-pass").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).prev().attr({
                type: "password"
            });
            $(this).removeClass("active");
        } else {
            $(this).prev().attr({
                type: "text"
            });
            $(this).addClass("active");
        }
    });

    $(".tooltip-block .icon").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).next().fadeOut();
            $(this).removeClass("active");
        } else {
            $(this).next().fadeIn();
            $(this).addClass("active");
        }
    });

    $(".acc-title").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).next().slideUp();
            $(this).removeClass("active");
        } else {
            $(this).next().slideDown();
            $(this).addClass("active");
        }
    });

    $(".accordion-sub-block .readmore").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).prev().slideUp();
            $(this).removeClass("active");
            $(this).html("ДАЛЕЕ");
        } else {

            $(this).prev().slideDown();
            $(this).addClass("active");
            $(this).html("СКРЫТЬ");
        }
    });






    $(".accordion-menu-title").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).next().slideUp();
        } else {
            $(".accordion-card .accordion-sub-block").slideUp();
            $(".accordion-card .accordion-menu-title").removeClass("active");

            $(this).addClass("active");
            $(this).next().slideDown();
        }
    });



    if($(this).scrollTop() > 100) {

        $('header.header').addClass("fixed");
        $('body').addClass("fixed");
    } else {

        $('header.header').removeClass("fixed");
        $('body').removeClass("fixed");
    }

    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {

            $('header.header').addClass("fixed");
            $('body').addClass("fixed");
        } else {

            $('header.header').removeClass("fixed");
            $('body').removeClass("fixed");
        }
    });
    $('#goTop').click(function() {
        $('body,html').animate({scrollTop : 0}, 800);
    });

    if($(this).scrollTop() > 250) {
        $('#goTop').fadeIn();
    } else {
        $('#goTop').fadeOut();
    }
    $(window).scroll(function() {
        if($(this).scrollTop() > 250) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').fadeOut();
        }
    });

});

$( window ).resize(function() {
    if($(window).width() > 991) {

        $(".dashboard-user-mobile .arrow").removeClass("active");


        $(".mobile-menu").css({"display" : ""});



        //$("body").removeClass("no-scroll");


    } else {
    }
});









