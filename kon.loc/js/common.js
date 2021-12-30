$(function () {
    $(".accordion-block .accordion-item:first-child .accordion-menu-title").addClass("active");
    $(".accordion-block .accordion-item:first-child .accordion-sub-block").show();
    $(".accordion-block .accordion-menu-title").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).next().slideUp();
            $(this).removeClass("active");

        } else {

            $(".accordion-block .accordion-menu-title").removeClass("active");
            $(".accordion-sub-block").slideUp();

            $(this).next().slideDown();
            $(this).addClass("active");
        }
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

    $(".select-form-order").styler();

    $("input[type=tel], input[type=phone]").inputmask({
        mask : "+7(999) 999-99-99",
        clearMaskOnLostFocus: true
    });


    $(".form-order-scr-1").validate({
        rules: {

            name: {
                required: true,
                minlength: 3
            },

            tel: {
                required: true,
                minlength: 10
            },

        },
        messages: {

            name: {
                required: 'Enter name',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

            tel: {
                required: 'Enter phone',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

        }
    });
    $(".form-order-scr-2").validate({
        rules: {

            name: {
                required: true,
                minlength: 3
            },

            tel: {
                required: true,
                minlength: 10
            },

        },
        messages: {

            name: {
                required: 'Enter name',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

            tel: {
                required: 'Enter phone',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

        }
    });

    $(".form-zip").validate({
        rules: {

            zip: {
                required: true,
                minlength: 3
            }

        },
        messages: {

            zip: {
                required: 'Enter zip code',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            }

        }
    });

    $('.slider-product').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        dots: false,
        fade: false,
        autoplay: false,
        //infinite: false
        responsive: [
            {
                breakpoint: 711,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 710,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    AOS.init({
        disable: 'mobile',
        startEvent: 'DOMContentLoaded',
        easing: 'ease',
        duration: 2000,
        offset: '0',
        once: true
    });
});










