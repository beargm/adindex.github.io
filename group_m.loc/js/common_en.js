$(function () {

    $(".accordion-programs .read-more-acc").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).parent().next().slideUp();
            $(this).html("<span>More</span>");
        } else {
            $(".accordion-programs .accordion-menu-title").removeClass("active");
            $(".accordion-programs .accordion-sub-block").slideUp();

            $(this).addClass("active");
            $(this).parent().next().slideDown();
            $(this).html("<span>Hide</span>");
        }
    });

    

    $(".about-event .btn-outline").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).prev().slideUp();
            $(this).removeClass("active");
            $(this).html("read more");
        } else {
            $(this).prev().slideDown();
            $(this).addClass("active");
            $(this).html("hide");
        }
    }); 


});










