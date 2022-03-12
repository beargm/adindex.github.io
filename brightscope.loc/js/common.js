$(window).on("load",function(){
    $(".nav-page-scroll a").mPageScroll2id({
        offset: 60
        //highlightClass:"highlighted-menu-item"
    });
});
$(function () {

    $(".form-registration").validate({
        rules: {

            name: {
                required: true,
                minlength: 3
            },
            lastname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 5
            },
            epassword: {
                required: true,
                minlength: 5
            },

            code: {
                required: true,
                minlength: 5
            },


        },
        messages: {

            name: {
                required: 'Enter name',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            lastname: {
                required: 'Enter last name',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

            email: {
                required: 'Enter email',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            password: {
                required: 'Enter password',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            epassword: {
                required: 'Enter password',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            code: {
                required: 'Enter code',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },

        }
    });

    $(".form-login").validate({
        rules: {


            email: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 5
            },



        },
        messages: {

            email: {
                required: 'Enter email',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            password: {
                required: 'Enter password',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },


        }
    });

    $(".select-hd").styler();
    $(".select-form").styler();
    $(".select-map").styler();

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


    $(".mobile-menu .nav-page-scroll a").click(function () {
        //e.stopPropagation();
        $(".mobile-menu").hide();
    });

    AOS.init({
        disable: 'mobile',
        startEvent: 'DOMContentLoaded',
        easing: 'ease',
        duration: 2000,
        offset: '0',
        once: true
    });

    $('#goTop').click(function() {
        $('body,html').animate({scrollTop : 0}, 800);
    });

    if($(this).scrollTop() > 250) {
        $('body').addClass("padding");
        $('header.header').addClass("fixed");
    } else {
        $('body').removeClass("padding");
        $('header.header').removeClass("fixed");
    }
    $(window).scroll(function() {
        if($(this).scrollTop() > 250) {
            $('body').addClass("padding");
            $('header.header').addClass("fixed");
            $('#goTop').fadeIn();
        } else {
            $('body').removeClass("padding");
            $('header.header').removeClass("fixed");
            $('#goTop').fadeOut();
        }
    });

});










