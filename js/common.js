$(function () {
    $('.lazy').lazy(); 

    $(".form-feedback").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },

            zodiac: {
                required: true,
                minlength: 3
            },

            tel: {
                required: true,
                minlength: 10
            },
            birthday: {
                required: true,
                minlength: 6,
            },
            message: {
                required: true,
                minlength: 10,
            }
        },
        messages: {
            name: {
                required: 'Введите имя'
            },

            zodiac: {
                required: 'Введите свой зодиак'
            },

            tel: {
                required: 'Введите телефон',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            birthday: {
                required: 'Введите дату рождения',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            message: {
                required: 'Введите свой вопрос',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
        }
    });

    $(".form-profile").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },

            age: {
                required: true,
                minlength: 1
            },

            number: {
                required: true,
                minlength: 1
            },
            color: {
                required: true,
                minlength: 3,
            },
            characteristic: {
                required: true,
                minlength: 3,
            },
            characteristic2: {
                required: true,
                minlength: 3,
            }
        },
        messages: {
            name: {
                required: 'Введите имя'
            },

            age: {
                required: 'Введите возраст'
            },

            number: {
                required: 'Введите число',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            color: {
                required: 'Введите цвет',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            characteristic: {
                required: 'Охарактеризуйте одним прилагательным',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            characteristic2: {
                required: 'Охарактеризуйте одним глаголом',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
        }
    });





    setTimeout(function () {
        $(".header .logo").addClass("active");
     }, 1000);

    $(".form-feedback .birthday").inputmask(
        "99/99/9999",
        {
            alias: "datetime",
            inputFormat: "dd/mm/yyyy",
            placeholder: "__/__/____"
        }
    );

    $("input[type=tel]").inputmask({
        mask : "+7(999) 999-99-99",
        clearMaskOnLostFocus: true
    });

    $(".field-number").inputmask( "decimal", {
        rightAlign: false,
        mask: "999"
    });
    $(".field-number2").inputmask( "decimal", {
        rightAlign: false,
        mask: "9"
    });

    var profileBlock = $(".profile-block");

    $(".link-profile-block").click(function() {
        $('html, body').animate({scrollTop : profileBlock.offset().top}, 1000);
    });

    //$(".product-view-qty .qty input[type='number']").styler();

    /*$(".basket-list .qty input[type='number']").styler();
    $(".form-profile-data input[type='file']").styler({
        filePlaceholder: 'Загрузить документы'
    });*/

    $(".select-styler").styler();



    AOS.init({
        disable: 'mobile',
        startEvent: 'DOMContentLoaded',
        easing: 'ease',
        duration: 2000,
        offset: '0',
        once: true
    });








    $(".banner-main").parallaxmouse({
        elms: [
            {el: $('.planet-2'), rate: 0.2},
            {el: $('.planet-3'), rate: 0.1},
            {el: $('.cometa'), rate: 0.2}

        ]
    });

});











