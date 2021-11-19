$(function () {

   

   

    $(".accordion-programs .read-more-acc").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).parent().next().slideUp();
            $(this).html("<span>Подробнее</span>");
        } else {
            $(".accordion-programs .accordion-menu-title").removeClass("active");
            $(".accordion-programs .accordion-sub-block").slideUp();

            $(this).addClass("active");
            $(this).parent().next().slideDown();
            $(this).html("<span>Скрыть</span>");
        }
    });

    

    $(".about-event .btn-outline").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).prev().slideUp();
            $(this).removeClass("active");
            $(this).html("Читать дальше");
        } else {
            $(this).prev().slideDown();
            $(this).addClass("active");
            $(this).html("Скрыть");
        }
    });

    // modal b 
    setTimeout(function () {
        $("body").addClass("no-scroll");
        $(".modal-banner").addClass("open");

    },5000);


    $(".modal-custom-close").click(function(){
        $("body").removeClass("no-scroll");
        $(".modal-custom").removeClass("open");
    });
    $(".modal-custom-backdrop").click(function(){
        $("body").removeClass("no-scroll");
        $(".modal-custom").removeClass("open");
    });
    // modal b


});










