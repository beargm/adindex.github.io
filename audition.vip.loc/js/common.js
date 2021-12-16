$(function () {

    /*setTimeout(function () {
        $(".nav-sub-menu").attr("style", "");
    }, 1);*/
    $('.lazy').lazy();


    $(".select-country").styler();

    $(".birthday").inputmask(
        "99/99/9999",
        {
            alias: "datetime",
            inputFormat: "dd/mm/yyyy",
            placeholder: "__/__/____"
        }
    );

    /*$("input[type=tel], input[type=phone]").inputmask({
        mask : "+7(999) 999-99-99",
        clearMaskOnLostFocus: true
    });*/
    /*$("input[type='file']").styler({
        filePlaceholder: ' '
    });*/

    $(".form-register").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            lastname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                minlength: 6,
            },
            confemail: {
                required: true,
                minlength: 6,
            },
            tel: {
                required: true,
                minlength: 10
            },

            birthday: {
                required: true,
                minlength: 6
            },

            zip: {
                required: true,
                minlength: 10,
            },
            pname: {
                required: true,
                minlength: 2,
            },
            plname: {
                required: true,
                minlength: 2,
            },
            /*checkboxagree: {
                required: true
            }*/
        },
        messages: {
            /*checkboxagree: {
                required: ''
            },*/
            name: {
                required: 'Enter name'
            },
            lastname: {
                required: 'Enter last name'
            },
            email: {
                required: 'Enter email',
                // minlength: "Ваш пароль должен состоять не менее чем из 10 символов"
            },
            confemail: {
                required: 'Enter email'
            },
            tel: {
                required: 'Enter tell'
            },
            birthday: {
                required: 'Enter birthday'
            },
            zip: {
                required: 'Enter zip'
            },
            pname: {
                required: 'Enter parent name'
            },
            plname: {
                required: 'Enter parent last name'
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




});

$( window ).resize(function() {
    if($(window).width() > 991) {

        //$(".dashboard-user-mobile .arrow").removeClass("active");


        //$(".dashboard-user-info").css({"display" : ""});



        //$("body").removeClass("no-scroll");


    } else {
    }
});









