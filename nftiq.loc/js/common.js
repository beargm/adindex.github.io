$(function () {

    /*setTimeout(function () {
        $(".nav-sub-menu").attr("style", "");
    }, 1);*/

    //$(".select-lang").styler();

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




/*
    $("input[type=tel], input[type=phone]").inputmask({
        mask : "+7(999) 999-99-99",
        clearMaskOnLostFocus: false
    });*/
/*
    $(".form-registration").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            username: {
                required: true,
                minlength: 3
            },
            tel: {
                required: true,
                minlength: 10
            },
            password: {
                required: true,
                minlength: 5,
            },

        },
        messages: {

            name: {
                required: 'Enter name'
            },

            username: {
                required: 'Enter Username',
            },

            tel: {
                required: 'Enter phone',
            },
            password: {
                required: 'Enter password',
                minlength: "Your password must be at least 5 characters long"
            }

        }
    });*/



    // $(".select-mob-acc").styler();


    AOS.init({
        disable: 'mobile',
        startEvent: 'DOMContentLoaded',
        easing: 'ease',
        duration: 2000,
        offset: '0',
        once: true
    });



    $('.lazy').lazy();



});

$( window ).resize(function() {
    if($(window).width() > 991) {

        //$(".dashboard-user-mobile .arrow").removeClass("active");


        //$(".mobile-menu").css({"display" : ""});



        //$("body").removeClass("no-scroll");


    } else {
    }
});









