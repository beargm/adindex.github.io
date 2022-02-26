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
            email: {
                required: true,
                minlength: 5
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
            email: {
                required: 'Введите email',
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
            email: {
                required: true,
                minlength: 5
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
            email: {
                required: 'Введите email',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

        }
    });







    //$(".accordion-block .accordion-item:first-child .accordion-menu-title").addClass("active");
    //$(".accordion-block .accordion-item:first-child .accordion-sub-block").show();
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
        mask : "+38(999) 999-99-99",
        clearMaskOnLostFocus: false 
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










