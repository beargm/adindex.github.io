$(function () {

    /*setTimeout(function () {
        $(".nav-sub-menu").attr("style", "");
    }, 1);*/

    $(".section-text .btn-read-more").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(".section-text .text-box").addClass("active");
            $(this).removeClass("active");
            $(this).html("Развернуть ↓");
        } else {
            $(".section-text .text-box").removeClass("active");
            $(this).addClass("active");
            $(this).html("Cвернуть ↑");
        }
    });

    $('.slider-speakers').slick({
        //lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        fade: false,
        autoplay: false,
        //infinite: false
        /*responsive: [
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
        ]*/
    });

    $(".accordion-conference .accordion-item:first-child .accordion-menu-title").addClass("active");
    $(".accordion-conference .accordion-item:first-child .accordion-sub-block").show();
    $(".accordion-conference .accordion-menu-title").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).next().slideUp();
        } else {
            $(".accordion-conference .accordion-menu-title").removeClass("active");
            $(".accordion-conference .accordion-sub-block").slideUp();

            $(this).addClass("active");
            $(this).next().slideDown();
        }
    });


    $(window).on("load",function(){
        $(".nav-page-scroll a").mPageScroll2id({
            offset: 0,
            //highlightClass:"highlighted-menu-item"
        });
    });

    $(".form-broadcast .checkbox-1 label").click(function(){
        //e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(this).addClass("active");
            $(this).parent().addClass("active");
        }
    });

    $(".form-broadcast .checkbox-2 label").click(function(){
        //e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(this).addClass("active");
            $(this).parent().addClass("active");
        }
    });

    $(".menu-fixed-block .ic-close").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".banner-link-box").removeClass("active");
        } else {
            $(this).addClass("active");
            $(".banner-link-box").addClass("active");
        }
    });
    $(".menu-fixed-block .link a").click(function(e){
        $(".banner-link-box").removeClass("active");
        $(".menu-fixed-block .ic-close").removeClass("active");
    });
    $(".card-speaker .link-mob").click(function(){
        //e.stopPropagation();
        $(this).addClass("active");
        $(this).parent().find(".card-content").addClass("active");

    });
    $(".card-speaker .card-content").click(function(){
        $(this).removeClass("active");
        $(this).parent().find(".link-mob").removeClass("active");
    });
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




    //start mob menu
    $(".mobile-menu-trigger").click(function(){
        //e.stopPropagation();

        if($(this).hasClass("active")){
            $(".mobile-menu").hide();
            $(this).removeClass("active");
            $(".banner-link-box").removeClass("active");
        } else {
            $(".mobile-menu").show();
            $(this).addClass("active");
            $(".banner-link-box").addClass("active");
        }
    });


    //end mob menu





    $("input[type=tel], input[type=phone]").inputmask({
        mask : "+7(999) 999-99-99",
        clearMaskOnLostFocus: false
    });

    $(".form-broadcast").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            fio: {
                required: true,
                minlength: 3
            },
            company: {
                required: true,
                minlength: 5,
            },
            tel: {
                required: true,
                minlength: 10
            },
            position: {
                required: true,
                minlength: 5,
            },
            email: {
                required: true,
                minlength: 5,
            },
            company: {
                required: true,
                minlength: 5,
            },
            agree: {
                required: true,

            },
            agree2: {
                required: true,

            },

        },
        messages: {

            name: {
                required: 'Введите имя'
            },

            fio: {
                required: 'Введите фио',
            },

            tel: {
                required: 'Введите тел',
            },
            position: {
                required: 'Введите должность',
            },
            company: {
                required: 'Введите название',
            },
            email: {
                required: 'Введите email',
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



    $('.lazy').lazy();


});










