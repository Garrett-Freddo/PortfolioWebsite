$(document).ready(function(){
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

        $('.top-nav .nav-link').on('click', function(){
            $('.menu-toggler').removeClass('open');
            $('.top-nav').removeClass('open');
        });

            $('nav a[href*="#"]').on('click', function(){
                $('html, body').animate(/*keyframes:*/{
                    scrollTop: $($(this).attr('href')).offset().top - 100
                }, 2000);
            });

            $('#up').on('click', function(){
                $('html, body').animate(/*keyframes:*/{
                    scrollTop: 0
                    }, 2000);
            });



            /*if you only want it once*/
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true 
    });



});