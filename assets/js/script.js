$("#menubar").click(function () {
    $("nav").toggleClass("left");
    $("#menubar").toggleClass("fa-times")


    $("li").click(function () {
        $("nav").removeClass("left");
        $("#menubar").removeClass("fa-times");
    })

})





$(document).ready(function () {
    $(window).on('scroll load', function () {


        if ($(window).scrollTop() > 0) {
            $(".nav-heading").addClass("scrolled");
            $("#menu").addClass("scroll");
            $(".logo").addClass("scroll");
            $(".topup").css("display", "block");
        }
        else {
            $(".nav-heading").removeClass("scrolled");
            $("#menu").removeClass("scroll");
            $(".topup").css("display", "none");

        }

    });


    $(window).on('scroll load', function () {

        if ($(window).scrollTop() > 1) {
            $(".nav-header").removeClass("left");
            $("#menu").removeClass("fa-times");
        }

    });

});