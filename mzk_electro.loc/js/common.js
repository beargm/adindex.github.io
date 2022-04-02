$(function () {

    /*setTimeout(function () {
        $(".nav-sub-menu").attr("style", "");
    }, 1);*/
    $('.lazy').lazy();




    setTimeout(function () {
        $(".header .logo").addClass("active");

     }, 1000);

    $('.slider-object').slick({
        lazyLoad: 'ondemand',
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-brand').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        dots: false,
        fade: false,
        autoplay: false,
        //infinite: false
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.work-c-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: false,
        fade: false,
        autoplay: false,
        //infinite: false
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
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
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-reviews').slick({
        lazyLoad: 'ondemand',
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    //$(".product-view-qty .qty input[type='number']").styler();

    /*$(".basket-list .qty input[type='number']").styler();*/

    $(".select-calc").styler();



    $("input[type=tel], input[type=phone]").inputmask({
        mask : "+7(999) 999-99-99",
        clearMaskOnLostFocus: true
    });

    $("input[type='file']").styler({
        filePlaceholder: ' '
    });

    $(".form-callback").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },


            tel: {
                required: true,
                minlength: 10
            },
            message: {
                required: true,
                minlength: 5
            },
            code: {
                required: true,
                minlength: 3
            }

        },
        messages: {

            name: {
                required: 'Введите фио',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

            tel: {
                required: 'Введите тел',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            message: {
                required: 'Введите сообщение',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            code: {
                required: 'Введите код',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

        }
    });


    AOS.init({
        disable: 'mobile',
        startEvent: 'DOMContentLoaded',
        easing: 'ease',
        duration: 2000,
        offset: '0',
        once: true
    });

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


    if($(this).scrollTop() > 250) {
        //$('.points-list .points-block, .points-block-full').addClass("zoomIn");
    } else {
        //$('.points-list .points-block, .points-block-full').removeClass("zoomIn");
    }
    $(window).scroll(function() {
        if($(this).scrollTop() > 250) {
            //$('.points-list .points-block, .points-block-full').addClass("zoomIn");
        } else {
            //$('.points-list .points-block, .points-block-full').removeClass("zoomIn");
        }
    });

});

$( window ).resize(function() {
    if($(window).width() > 991) {

        $(".dashboard-user-mobile .arrow").removeClass("active");


        $(".dashboard-user-info").css({"display" : ""});



        //$("body").removeClass("no-scroll");


    } else {
    }
});









