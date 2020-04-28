// ==== Fixed Navbar ==== //
$(window).scroll(function() {
    var sticky = $('.header_area'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});



// ==== Best Sellers Carousel ====//

$(function() {

    const owlSettings = {
        items: 4,
        margin: 10,
        loop: true,
        nav: true,
        dots: false
    };

    $("#bestSellerCarousel").owlCarousel(owlSettings);
})

$(".hero-carousel").owlCarousel({
    items: 3,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        810: {
            items: 3
        }
    }
});



// ==== Active Nice Select ==== //
$('select').niceSelect();




// ==== Price Range slider =====//
if (document.getElementById("price-range")) {

    var nonLinearSlider = document.getElementById('price-range');

    noUiSlider.create(nonLinearSlider, {
        connect: true,
        behaviour: 'tap',
        start: [500, 4000],
        range: {
            // Starting at 500, step the value by 500,
            // until 4000 is reached. From there, step by 1000.
            'min': [0],
            '10%': [500, 500],
            '50%': [4000, 1000],
            'max': [10000]
        }
    });


    var nodes = [
        document.getElementById('lower-value'), // 0
        document.getElementById('upper-value') // 1
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    nonLinearSlider.noUiSlider.on('update', function(values, handle, unencoded, isTap, positions) {
        nodes[handle].innerHTML = values[handle];
    });
}