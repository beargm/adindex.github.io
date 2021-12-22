$(function () {

    $('.lazy').lazy();

    $(".video-interview .read-more-full").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).prev().slideUp();
            $(this).html("<span>Развернуть</span>");
        } else {
            $(this).addClass("active");
            $(this).prev().slideDown();
            $(this).html("<span>Скрыть</span>");
        }
    });

    $(".menu-fixed-block .ic-menu").click(function(e){
        e.stopPropagation();
        $(".menu-fixed").fadeIn();
    });

    $(".menu-fixed-block .ic-close").click(function(e){
        e.stopPropagation();
        $(".menu-fixed").fadeOut();
    });
    $(".menu-fixed .link a").click(function(){
        $(".menu-fixed").fadeOut();
    });

    $(window).on("load",function(){
        $(".nav-page-scroll a").mPageScroll2id({
            offset: 0,
            //highlightClass:"highlighted-menu-item"
        });
    });

    $('.slider-speaker').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        fade: false,
        autoplay: false,
        //infinite: false
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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

    $(".questions-answered .qa-open").click(function(e){
        e.stopPropagation();
        $(this).hide();
        $(".questions-answered-menu").fadeIn();
    });

    $(".questions-answered .close-menu").click(function(e){
        e.stopPropagation();
        $(".questions-answered-menu").fadeOut();
        $(".questions-answered .qa-open").show();
    });

    // $(".accordion-questions .accordion-item:first-child .accordion-menu-title").addClass("active");
    // $(".accordion-questions .accordion-item:first-child .accordion-menu-title .arrow").addClass("active");
    // $(".accordion-questions .accordion-item:first-child .accordion-sub-block").show();
    $(".accordion-questions .accordion-menu-title .arrow").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).parent().next().slideUp();
            $(this).parent().removeClass("active");
        } else {
            $(".accordion-questions .accordion-menu-title .arrow").removeClass("active");
            $(".accordion-questions .accordion-menu-title").removeClass("active");
            $(".accordion-sub-block").slideUp();
            $(this).addClass("active");
            $(this).parent().next().slideDown();
            $(this).parent().addClass("active");
        }
    });

    $(".card-speaker").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).find(".hide-box.mob").hide();

        } else {
            $(this).addClass("active");
            $(this).find(".hide-box.mob").show();

        }
    });

});










