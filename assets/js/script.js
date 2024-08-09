$("#menubar").click(function () {
    $("nav").toggleClass("left");
    $("#menubar").toggleClass("fa-times")


    $("li").click(function () {
        $("nav").removeClass("left");
        $("#menubar").removeClass("fa-times");
    })

})


