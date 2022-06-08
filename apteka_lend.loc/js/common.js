$(function () {

    /*setTimeout(function () {
        $(".nav-sub-menu").attr("style", "");
    }, 1);*/
    $('.lazy').lazy();




    setTimeout(function () {
        $(".header .logo").addClass("active");

     }, 1000);

    $('.slider-gallery').slick({
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

    $('.slider-for-events').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav-events',
        dots: true,
        //infinite: false
    });
    $('.slider-nav-events').slick({
        vertical: true,
        slidesToShow: 8,
        slidesToScroll: 3,
        asNavFor: '.slider-for-events',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            },
        ]

    });

    //$(".product-view-qty .qty input[type='number']").styler();

    /*$(".basket-list .qty input[type='number']").styler();*/

    $(".select-mob-acc").styler();

    $(".form-anketa .birthday").inputmask(
        "99/99/9999",
        {
            alias: "datetime",
            inputFormat: "dd/mm/yyyy",
            placeholder: "__/__/____"
        }
    );

    $("input[type=tel], input[type=phone]").inputmask({
        mask : "+7(999) 999-99-99",
        clearMaskOnLostFocus: true
    });
    $("input[type='file']").styler({
        filePlaceholder: ' '
    });
    $(".form-anketa").validate({
        rules: {
            city: {
                required: true,
                minlength: 3
            },
            vacancy: {
                required: true,
                minlength: 3
            },
            fio: {
                required: true,
                minlength: 3
            },

            birthday: {
                required: true,
                minlength: 6
            },

            tel: {
                required: true,
                minlength: 10
            },
            mail: {
                required: true,
                minlength: 6,
            },
            dopinfo: {
                required: true,
                minlength: 10,
            },
            checkboxagree: {
                required: true
            }
        },
        messages: {
            checkboxagree: {
                required: ''
            },
            city: {
                required: 'Введите город'
            },

            vacancy: {
                required: 'Введите вакансию'
            },

            fio: {
                required: 'Введите фио',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            birthday: {
                required: 'Введите дату рождения',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            tel: {
                required: 'Введите тел',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            mail: {
                required: 'Введите email',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            dopinfo: {
                required: 'Введите текст',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            }
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









