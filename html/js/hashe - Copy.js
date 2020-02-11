function akmalMenu() {

    $(".main-menu-nav").on("click", ".menu-toggler", function() {
        console.log("yellow");
        $(this).addClass("close");
        $(".main-menu-div").addClass("mobiel-menu"); /*.css({ "left": "0" });*/
        $(".body-overlay").css({ "display": "block", "z-index": "1" });
    });
    $(".main-menu-nav").on("click", ".body-overlay, .close-icon, .menu-toggler.close", function() {
        console.log("dark");
        $(".menu-toggler").removeClass("close");
        $(".main-menu-div").removeClass("mobiel-menu");
        $(".body-overlay").css({ "display": "none", "z-index": "-1" });
    });

    /* adding span with arrow and .has-sub class */
    var menuID = $(".main-menu-nav");
    var downArrows = "<span class='down-arrow'></span>";
    var catchSubs = menuID.find('li ul');
    //$(".main-menu-nav li").has("ul").addClass('has-sub');
    catchSubs.parent().addClass('has-sub');
    catchSubs.parent().append(downArrows);

    /* submenu accordian */


    menuID.find('.down-arrow').on('click', function() {
        if ($(this).siblings('ul').hasClass('open')) {
            /*$(this).siblings('ul').removeClass('open');*/
            $(this).siblings('ul').slideUp(500, function() {
                jQuery(this).removeClass("open");
            });
            $(this).removeClass('submenu-opened');
        } else {
            /*$(".down-arrow").siblings('ul').removeClass('open');*/
            /*$(".down-arrow").removeClass('submenu-opened');*/
            // $(this).siblings('ul').addClass('open');
            $(this).siblings('ul').slideDown(500, function() {
                jQuery(this).addClass("open");
            });;
            $(this).addClass('submenu-opened');
        }
    });
    $(".main-menu-nav ul").unbind('mouseenter mouseleave');

    resizeFix = function() {
        var mediasize = 991;
        if ($(window).width() > mediasize) {
            //menuID.find('ul').show();
            /* Adding class on hover */
            menuID.on("mouseenter", ".has-sub", function() {
                /*$(".has-sub").removeClass("hovered");*/
                $(this).addClass("hovered");
            }).on("mouseleave", ".has-sub", function() {
                $(this).removeClass("hovered");
            })
        }
        if ($(window).width() <= mediasize) {
            //menuID.find('ul').hide().removeClass('open');

            $(".main-menu-nav").on("mouseenter", ".has-sub", function() {
                $(".has-sub").removeClass("hovered");

            }).on("mouseleave", ".has-sub", function() {
                $(this).removeClass("hovered");
            })
        }
    };
    resizeFix();
    return $(window).on('resize', resizeFix);
}


// =============
jQuery(document).ready(function() {
    //sticky header
    var header = jQuery(".main-menu-nav");
    var hheight = header.outerHeight();
    // console.log(hheight);
    var coverUp = jQuery(".top-bar");
    var hcoverUp = coverUp.outerHeight();
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        var device = jQuery(window).width();
        // if (scroll > 200) {
        //     header.removeClass('positioning').addClass("fixedUp");

        // } else {
        //     header.removeClass("fixedUp").addClass('positioning');

        // }
        if (scroll > hcoverUp) {

            header.removeClass('clearHeader').addClass("darkHeader");
            coverUp.removeClass('noCoverUp').addClass("coverUp").css({ "margin-bottom": hheight + "px" });
            if (device > 991) {
                coverUp.css({ "margin-bottom": hheight + "px" });
            }
        } else {
            header.removeClass("darkHeader").addClass('clearHeader');
            coverUp.removeClass('coverUp').addClass("noCoverUp").css({ "margin-bottom": 0 });
            if (device > 991) {
                coverUp.css({ "margin-bottom": 0 });
            }
        }
        if (scroll > 950) {
            header.removeClass('oldColor').addClass("diffColor");
        } else {
            header.removeClass("diffColor").addClass('oldColor');
        }

        var resizeFixed = function() {
            var mediasize = 991;
            if ($(window).width() > mediasize) {
                header.removeClass("yes-mobile");
                header.addClass("not-mobile");
                coverUp.removeClass("yes-mobile");
                coverUp.addClass("not-mobile");
            }
            if ($(window).width() <= mediasize) {
                header.removeClass("not-mobile")
                header.addClass("yes-mobile");
                coverUp.removeClass("not-mobile");
                coverUp.addClass("yes-mobile").css({ "margin-bottom": 0 });
            }
        };
        resizeFixed();
        return $(window).on('resize', resizeFixed);

    });

    /*sideMenu();*/
    akmalMenu();

    jQuery('.ourClients').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: false,
        variableWidth: false,
        fade: false,
        cssEase: 'linear'
    });
    // =======================

    $('.fade_element').slick({
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        speed: 1500,
        responsive: [{
                breakpoint: 992,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
    // ===============
    jQuery('.news_section').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });
    $('.logos').slick({
        arrows: false,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        autoplay: true,
        slidesToScroll: 1,
        speed: 1500,
        responsive: [{
                breakpoint: 992,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
            
        ]

    }); 

    // ======
    // jQuery('.match-height').matchHeight();

    jQuery('#go-to-top').click(function(){
        jQuery('html, body').animate({scrollTop:0}, 'slow');
      });

    // ===================
    // $(".huntScrollr").mCustomScrollbar({
    //     axis: "x",
    //     theme: "light-3",
    //     advanced: {
    //         autoExpandHorizontalScroll: true
    //     }
    // });

/* full page menu */
    var isLateralNavAnimating = false;

    //open/close lateral navigation
    $('.cd-nav-trigger').on('click', function(event){
        event.preventDefault();
        //stop if nav animation is running
        if( !isLateralNavAnimating ) {
            if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                //animation is over
                isLateralNavAnimating = false;
            });
        }
    });
});/* document ready */