$(function () {

    $(".form-1").validate({
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
                required: 'Введите имя',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

            tel: {
                required: 'Введите тел',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

        }
    });

    $(".form-2").validate({
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
                required: 'Введите имя',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

            tel: {
                required: 'Введите тел',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

        }
    });

    $(".form-3").validate({
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
                required: 'Введите имя',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

            tel: {
                required: 'Введите тел',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

        }
    });

    $(".form-4").validate({
        rules: {

            name: {
                required: true,
                minlength: 3
            },

            tel: {
                required: true,
                minlength: 10
            },
            answer: {
                required: true,
                minlength: 10
            },

        },
        messages: {

            name: {
                required: 'Введите имя',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

            tel: {
                required: 'Введите тел',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            answer: {
                required: 'Введите вопрос',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

        }
    });

    $(".form-5").validate({
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
                required: 'Введите имя',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

            tel: {
                required: 'Введите тел',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

        }
    });
    $(".form-6").validate({
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
                required: 'Введите имя',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

            tel: {
                required: 'Введите тел',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

        }
    });

    $('.slider-doctors').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        fade: false,
        autoplay: false,
        //infinite: false
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-reviews').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: false,
        autoplay: false,
        //infinite: false

    });

    $('.slider-certificates').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: true,
        fade: false,
        autoplay: false,
        //infinite: false
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-video').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        fade: false,
        autoplay: false,
        //infinite: false
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


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



    $("input[type=tel], input[type=phone]").inputmask({
        mask : "+7(999) 999-99-99",
        clearMaskOnLostFocus: true
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



    AOS.init({
        disable: 'mobile',
        startEvent: 'DOMContentLoaded',
        easing: 'ease',
        duration: 2000,
        offset: '0',
        once: true
    });
});










