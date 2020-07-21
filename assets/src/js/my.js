//Scripts

function number_to(id, from, to, duration) {
    var element = document.getElementById(id);
    var start = new Date().getTime();
    setTimeout(function () {
        var now = (new Date().getTime()) - start;
        var progress = now / duration;
        var result = Math.floor((to - from) * progress + from);
        element.innerHTML = progress < 1 ? result : to;
        if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);
}

$(document).ready(function () {

    $("#toggler").click(function(e) {
        $(".navbar-collapse").toggleClass("show");
    });

    $(".nav-link.smooth-scroll").click(function(e){
        e.preventDefault();
        $(".nav-link.smooth-scroll").removeClass("active");
        $(".navbar-collapse").removeClass("show");
        $(this).addClass("active");
    });
    $("#back-to-top, .navbar-brand").click(function(e){
        e.preventDefault();
        $(".nav-link.smooth-scroll").removeClass("active");
        $(".navbar-collapse").removeClass("show");
        $(".home").addClass("active");
    });

    number_to("year", 0, new Date().getFullYear() - 2014, 2000);
    number_to("cars", 0, 100, 2000);
    number_to("weight", 0, 250, 2000);

    $("#more").click(function (e) {
        e.preventDefault();
        $(this).hide();
        $("#read-more").css("height", "auto").fadeIn();
    });

    $(".smooth-scroll").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});

//Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $("#navbar").addClass("fixed-top").fadeIn();
    } else {
        $("#navbar").removeClass("fixed-top");
    }
    console.log($(this).scrollTop());

    if ($(this).scrollTop() > 400) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});
