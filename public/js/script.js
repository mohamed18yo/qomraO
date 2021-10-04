jQuery(function ($) {

    'use strict';

    // mean menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1059"
    });
    // sticky navbar
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $('.navbar-area').addClass('is-sticky');
        } else {
            $('.navbar-area').removeClass('is-sticky');
        }
    });

    // preloader
    $('body').addClass('pre-loaded');

    // scrolltop
    $(window).on('scroll', function() {
        if( $(this).scrollTop() > 300 ) {
            $("#scrolltop").fadeIn();
        }
        else {
            $("#scrolltop").fadeOut();
        }
    });
    $("#scrolltop").on('click', function () {
        $("html").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // timer countdown
    function dealCounter1() {
        var countDate = new Date("15 October 2022 9:56:00");
        var sec = 1000;
        var min = sec * 60;
        var hr = min * 60;
        var day = hr * 24;
        var today = new Date();
        var distance = countDate - today;
        var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hr);
        var mins = Math.floor((distance % hr) / min);
        var secs = Math.floor((distance % min) / sec);
        $(".day1").html(days + "<span>Days :</span>")
        $(".hr1").html(hours + "<span>Hrs :</span>")
        $(".min1").html(mins + "<span>Mins :</span>")
        $(".sec1").html(secs + "<span>Sec</span>")
        if(distance < 0) {
            clearInterval(dealCounter1);
            $(".deal-counter-1").html("Session Expired");
        }
    }
    setInterval(function() {
        dealCounter1();
    }, 1000)

    function dealCounter2() {
        var countDate = new Date("20 October 2021 9:56:00");
        var sec = 1000;
        var min = sec * 60;
        var hr = min * 60;
        var day = hr * 24;
        var today = new Date();
        var distance = countDate - today;
        var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hr);
        var mins = Math.floor((distance % hr) / min);
        var secs = Math.floor((distance % min) / sec);
        $(".day2").html(days + "<span>Days :</span>")
        $(".hr2").html(hours + "<span>Hrs :</span>")
        $(".min2").html(mins + "<span>Mins :</span>")
        $(".sec2").html(secs + "<span>Sec</span>")
        if(distance < 0) {
            clearInterval(dealCounter1);
            $(".deal-counter-2").html("Session Expired");
        }
    }
    setInterval(function() {
        dealCounter2();
    }, 1000)

    // navbar-category-dropdown
    $(".navbar-category button").on('click', function() {
        if($(".navbar-area").hasClass("is-sticky")) {
            $(this).next(".navbar-category-dropdown").toggleClass("active");
        }
    })

    // inline popups
    $('.inline-popup-1').magnificPopup({
        delegate: 'a',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    // header-banner-carousel
    $('.header-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        rtl: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    })

    // testimonial-slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        rtl: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    })

    // partner-carousel
    var partnerOwl = $('.partner-carousel');
    partnerOwl.owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        rtl: true,
        navText: [
            "<i class='flaticon-left-arrow-1'></i>",
            "<i class='flaticon-next'></i>"
        ],
        responsive:{
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })


    var partnerOsswl = $('.pcloentr-carousel');
    partnerOsswl.owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        rtl: true,

        responsive:{
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })



    // instagram-carousel
    $('.instagram-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        rtl: true,
        responsive:{
            0:{
                items: 3
            },
            600:{
                items: 4
            },
            1000:{
                items: 7
            }
        }
    })

    // header-carousel-two
    $('.header-carousel-two').owlCarousel({
        loop: true,
        nav: false,
        dots: true,

        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        rtl: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    })

    // new js date: 03/01/2021
    // header-carousel-four
    $('.header-carousel-four').owlCarousel({
        loop: true,
        margin: 100,
        nav: false,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        rtl: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    })

    // testimonial-review-carousel
    $(".testimonial-review-carousel").owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        rtl: true,
        responsive:{
            0:{
                items: 1
            },
            992:{
                items: 2,
                // stagePadding: 125,
            }
        }
    });

    // language-switcher
    $(".language-option").each(function() {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function() {
             allOptions.removeClass('selected');
             $(this).addClass('selected');
             $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })
    // new js end

    // trending-product-carousel
    $('.trending-product-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        rtl: true,
        navText: [
            "<i class='bx bxs-left-arrow'></i>",
            "<i class='bx bxs-right-arrow'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items: 2
            },
            768: {
                items: 3
            },
            1000:{
                items: 4
            }
        }
    })

    // deal-carousel
    $('.deal-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        rtl: true,
        navText: [
            "<i class='bx bxs-left-arrow'></i>",
            "<i class='bx bxs-right-arrow'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items: 1
            },
            768: {
                items: 1
            },
            1000:{
                items: 2
            }
        }
    })

    // product-tab
    $(".product-tab-list").on('click', function() {
        var tab_modal = $(this).attr("data-product-tab-list");
        $(this).addClass("active").siblings().removeClass("active");
        $(".product-tab-details-item[data-product-tab-details=" +tab_modal+ "]").slideDown(600).siblings().slideUp(500);
    })

    // trending-bg-carousel
    $('.trending-bg-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        items: 1,
        rtl: true,
        navText: [
            "<i class='flaticon-left-arrow-1'></i>",
            "<i class='flaticon-next'></i>"
        ]
    })

    // init Isotope
    var $grid = $('.product-filter-tab-details').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
    });

    // bind filter button click
    $('.product-filter-tab').on('click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.product-filter-tab-list').on('click', function( ) {
        $(this).addClass("active").siblings().removeClass("active")
    });

    // arrival-product-carousel
    $('.arrival-product-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        rtl: true,
        navText: [
            "<i class='flaticon-left-arrow-1'></i>",
            "<i class='flaticon-next'></i>"
        ],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            768: {
                items: 2
            },
            1000:{
                items: 4
            }
        }
    })

    // testimonial-carousel-two
    $('.testimonial-carousel-two').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        items: 1,
        rtl: true
    })

    // magnific-popup
    $("#video-popup").magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // history-timeline-slider
    $('.history-timeline-for').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.history-timeline-nav',
        speed: 1200,
        rtl: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
    $('.history-timeline-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.history-timeline-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        speed: 1200,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // product +/- button
    $(".qu-btn").on('click', function(e) {
    var btn = $(this),
        inp = btn.siblings(".qu-input").val();
        if(btn.hasClass("inc")){
            var i = parseFloat(inp) + 1;
        }
        else {
            if (inp > 1) (i = parseFloat(inp) - 1) < 2 && $(".dec").addClass("deact");
            else i = 1;
        }
        btn.addClass("deact").siblings("input").val(i)
    })

    // faq-accordion
    $(".faq-accordion-header").on('click', function() {
        $(this).parent(".faq-accordion-item").toggleClass("faq-accordion-item-active").siblings().removeClass("faq-accordion-item-active")
    })

    // authentication-tab
    $(".authentication-tab-item").on('click', function() {
        var tab_modal = $(this).attr("data-authentcation-tab");
        $(this).addClass("authentication-tab-active").siblings().removeClass("authentication-tab-active");
        $(".authentication-tab-details-item[data-authentcation-details=" +tab_modal+ "]").addClass("authentication-tab-details-active").siblings().removeClass("authentication-tab-details-active");
    })
    
    // productCart
    $(".productCart").on('click', function(e) {
        e.preventDefault();
        $(".cart-modal-wrapper").addClass("active");
        $(".cart-modal").addClass("active");
    })
    $(".productWish").on('click', function(e) {
        e.preventDefault();
        $(".cart-modal-wrapper").addClass("active");
        $(".wish-modal").addClass("active");
    })
    $(".cart-modal-close").on('click', function () {
        $(".cart-modal-wrapper").removeClass("active");
        $(".cart-modal").removeClass("active");
        $(".wish-modal").removeClass("active");
    })

    // range-slider
    $( "#range-slider").slider({
        range: true,
        isRTL: true,
        min: 40,
        max: 400,
        values: [40, 400],
        slide: function( event, ui ) {
            $( "#price-amount" ).val( "$" + ui.values[ 0 ] + " ― $" + ui.values[ 1 ] );
        }
    });
    $( "#price-amount" ).val( "$" + $( "#range-slider" ).slider( "values", 0 ) +
    " - $" + $( "#range-slider" ).slider( "values", 1 ));

    // product-details-slider
    $('.product-details-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-details-nav',
        speed: 1200,
        rtl: true
    });
    $('.product-details-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-details-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        speed: 1200,
        margin: 30,
        rtl: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // product details tab
    $(".product-details-tab-list li").on('click', function() {
        var tab = $(this).attr('data-product-tab-list');
        $(this).addClass("active").siblings().removeClass("active");
        $(".product-tab-information-item[data-product-details-tab="+ tab +"]").addClass("active").siblings().removeClass("active");
    })

    // change password view
    $(".input-group-text").on('click', function() {
        var $password = $(this).parent().siblings(".password");
        $(this).toggleClass("active");
        if ($password.attr('type') === 'password') {
            $password.attr('type', 'text');
        } else {
            $password.attr('type', 'password');
        }
    })

    // billing-address-input
    $(".billing-title p").on('click', function() {
        $(".billing-address").addClass("none");
        $(".billing-address-input").addClass("active");
    })

    // popup gallery
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });

    // subscribe form
    $("#contactForm, .newsletter-form").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animate__animated animate__shakeX");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animate__animated animate__shakeX");
        }, 1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }

    // ajax mailchimp
    $(".newsletter-form").ajaxChimp({
        url: "https://hibootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // navbar-category-dropdown
    function resizeHandler() {
        if (($(window).width() > 1059) && ($(window).width() < 1199)) {
			$(".navbar-category button").on('click', function() {
                $(this).next(".navbar-category-dropdown").toggleClass("active");
            })
        } else {
        	$(".navbar-category-dropdown").removeClass("active");
        }
    }
    resizeHandler();
    $(window).on('resize', resizeHandler);
});