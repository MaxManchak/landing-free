//= components/jcarousel.js



$(function() {
    var jcarousel = $('.slider__wrap');

    jcarousel.on('jcarousel:reload jcarousel:create', function() {
            var carousel = $(this),
                width = carousel.innerWidth();
            var margin;

            if (width >= 999) {
                margin = width * 0.031;
                width = width / 3.62;
            } else if (width >= 600) {
                margin = width * 0.04;
                width = width / 2.38;
            } else {
                margin = 0;
                width = width;
            }

            carousel.jcarousel('items').css({
                'width': Math.ceil(width) + 'px',
                'margin': '0 ' + Math.ceil(margin) + 'px'
            });
        })
        .jcarousel({
            wrap: 'circular',
        });

    $('.slider-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.slider-next')
        .jcarouselControl({
            target: '+=1'
        });

    $('.slider__pagination')
        .on('jcarouselpagination:active', 'i', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'i', function() {
            $(this).removeClass('active');
        })
        .on('click', function(e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function(page) {
                return '<i></i>';
            }
        })
        .jcarousel({
            animation: {
                duration: 800,
                easing: 'linear',
                complete: function() {}
            }
        });
});
