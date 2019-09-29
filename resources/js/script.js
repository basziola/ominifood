$(document).ready(function () {
    // sticky navigation
    $(".js--section-features").waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'
        });
    // scroll effect on elements
    $('.js--scroll-to-plans').click(function () {
        $('html , body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-features').click(function () {
        $('html , body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    $('.js--scroll-to-steps').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section-steps').offset().top }, 1000);
    });
    $('.js--scroll-to-meals').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section-meals').offset().top }, 1000);
    });

    $('.js--scroll-to-cities').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section-cities').offset().top }, 1000);
    });

    $('.js--scroll-to-signup').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section-signup').offset().top }, 1000);
    });

    // animation scroll
    $('.js--animate-features').waypoint(function (direction) {
        $('.js--animate-features').addClass('animated fadeIn');
    }, {
            offset: '50%'
        });

    $('.js--animate-phone').waypoint(function (direction) {
        $('.js--animate-phone').addClass('animated fadeInUp');
    }, {
            offset: '50%'
        });

    $('.js--animate-city').waypoint(function (direction) {
        $('.js--animate-city').addClass('animated bounceIn');
    }, {
            offset: '50%'
        });

    $('.js--animate-plan').waypoint(function (direction) {
        $('.js--animate-plan').addClass('animated shake');
    }, {
            offset: '50%'
        });

    // responsive mobile navigation
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });
    //showing and hiding the scroll icon
    $('.js--section-testimonies').waypoint(function (direction) {
        if (direction == "down") {
            $('dfn').addClass('scroll-arrow');
        } else {
            $('dfn').removeClass('scroll-arrow');
        }
    }, {
            offset: '60px;'
        });
    //animation with the scroll icon
    $('.js--scroll-arrow').click(function () {
        $('html,body').animate({ scrollTop: $('.js--header').offset().top }, 2000);
    });
});