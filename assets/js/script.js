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

        if ($(window).scrollTop() > 1) {
            $("nav").removeClass("left");
            $("#menubar").removeClass("fa-times");

        }

    });

});