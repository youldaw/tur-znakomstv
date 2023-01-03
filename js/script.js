$(function (){
    
    $('input[name=phone]').mask('+7 (999) 999-99-99');


    $('.menu-opener, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('header .navbar').toggleClass('active');
        $('header').toggleClass('active');
    });

    $('.more-video').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $('.comment-video-col.hide').slideToggle("slow");
    });

    $('.card-link a').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $('.card-text .hide').slideToggle("slow");
    });

    $('.place-slide').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        // center: false,
        smartSpeed:900,
        navText: ['<img src="images/slide-arrow-left.png">','<img src="images/slide-arrow-right.png">'],
        items:1,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

    $('.comment-more-slide').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        // center: false,
        smartSpeed:900,
        navText: ['<img src="images/slide-arrow-left.png">','<img src="images/slide-arrow-right.png">'],
        items:1,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

    $('.live-slide').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        // center: false,
        smartSpeed:900,
        navText: ['<img src="images/slide-arrow-left.png">','<img src="images/slide-arrow-right.png">'],
        items:1,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

});

