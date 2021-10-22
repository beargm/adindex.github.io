$(function () {

    $(".footer-icon-cart").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-cart").hide();
        } else {
            $(".modal-size").hide();
            $(".modal-shops").hide();
            $(".modal-sort").hide();
            // $(".footer-icon-view").removeClass("active");
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".modal-icon-block").removeClass("active");

            $(this).addClass("active");
            $(".modal-cart").show();
        }
    });

    $(".footer-icon-fav").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-fav").hide();
        } else {
            $(".modal-size").hide();
            $(".modal-shops").hide();
            $(".modal-sort").hide();
            // $(".footer-icon-view").removeClass("active");
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".modal-icon-block").removeClass("active");

            $(this).addClass("active");
            $(".modal-fav").show();
        }
    });

    $(".mob-modal .modal-bg").click(function() {
        $(".modal-icon-block").removeClass("active");
        $(".mob-modal").hide();

    });

    $(".footer-icon-view").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".mob-modal-view").hide();
        } else {
            $(".modal-size").hide();
            $(".modal-shops").hide();
            $(".modal-sort").hide();
            $(".mob-modal").hide();
            $(".modal-icon-block").removeClass("active");
            $(this).addClass("active");

            $(".mob-modal-view").show();
        }
    });

    $(".footer-icon-sort").click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-sort").hide();
        } else {
            $(".modal-size").hide();
            $(".modal-shops").hide();
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".modal-icon-block").removeClass("active");
            $(this).addClass("active");

            $(".modal-sort").show();
        }
    });

    $(".footer-icon-shops").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-shops").hide();
        } else {
            $(".modal-size").hide();
            $(".modal-sort").hide();
            $(".footer-icon-view").removeClass("active");
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".modal-icon-block").removeClass("active");

            $(this).addClass("active");
            $(".modal-shops").show();
        }
    });

    $(".footer-icon-filter").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-filter").hide();
        } else {
            $(".modal-size").hide();
            $(".modal-sort").hide();
            $(".footer-icon-view").removeClass("active");
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".modal-icon-block").removeClass("active");

            $(this).addClass("active");
            $(".modal-filter").show();
        }
    });

    $(".modal-size-trigger").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-size").hide();
        } else {

            $(".modal-sort").hide();
            $(".footer-icon-view").removeClass("active");
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".modal-icon-block").removeClass("active");

            $(this).addClass("active");
            $(".modal-size").show();
        }
    });

    $(".mob-filter-title").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).next().slideUp();
        } else {
            $(".mob-filter-title").removeClass("active");
            $(".mob-filter-sub").slideUp();

            $(this).addClass("active");
            $(this).next().slideDown();
        }
    });

    $(".mob-filter-item.selected").click(function(e){
        e.stopPropagation();
        $(this).removeClass("selected");

    });




});
