$(document).ready(function(){

    // Scroll Up Btn
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#scrollUpBtn').fadeIn();
        } else {
            $('#scrollUpBtn').fadeOut();
        }
    });
    
    $("#scrollUpBtn").click(function() {
        $("html, body").animate({scrollTop: 0}, 500);
     });

    // Makes the social icons appear and dissappear in the Team Section

    $(".team_hover").on("mouseenter",function(){
        $(".social_media", this).addClass("visible");
    });
    
    $(".team_hover").on("mouseout",function(){
        $(".social_media", this).removeClass("visible");
    });
    
    // Carousel effects 
    $('.carousel-first').owlCarousel({
        loop:false,
        margin:5,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    
    $('.carousel-second').owlCarousel({
        autoplay:true,
        dots: true,
        loop:true,
        nav:false,
        items: 1
    });



})
     