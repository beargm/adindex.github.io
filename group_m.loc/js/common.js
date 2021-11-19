$(function () {

    $('.lazy').lazy();

    $(".accordion-programs .accordion-menu-title .arrow").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).parent().next().slideUp();
        } else {
            $(".accordion-programs .accordion-menu-title").removeClass("active");
            $(".accordion-programs .accordion-sub-block").slideUp();

            $(this).addClass("active");
            $(this).parent().next().slideDown();
        }
    });

    $('.slider-speaker').slick({
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

    $(".select-player").styler();



    $(window).on("load",function(){
        $(".nav-page-scroll a").mPageScroll2id({
            offset: 0,
            //highlightClass:"highlighted-menu-item"
        });
    });


    //start mob menu
    $(".mobile-menu-trigger").click(function(){
        $(".header").addClass("z-index");
        //e.stopPropagation();
        $(".mobile-menu").show();

    });

    $(".mobile-menu-close").click(function(){
        $(".header").removeClass("z-index");
        $(".mobile-menu").hide();
    });

    $(".mobile-menu .link").click(function(){
        $(".header").removeClass("z-index");
        $(".mobile-menu").hide();
    });

    //end mob menu




});










