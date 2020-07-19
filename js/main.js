$(function(){

  var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});

    $('.service__slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: false,
        responsive: [
            {
              breakpoint: 2000,
                // settings: 'unslick',
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
            },
            {
              breakpoint: 901,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
      });

      $('.portfolio__slider').slick({
        infinite: true,
        dots: true,
        arrows: true,
        // nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/right-arrow.svg" alt="">',
        // prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/left-arrow.svg" alt="">',
        responsive: [
            {
              breakpoint: 2000,        
                // settings: 'unslick',
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
            },
            {
              breakpoint: 901,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
      });

      $('.hamburger').on('click', function(){
        $('.menu__list').slideToggle();
    });

    new WOW().init();

    });

    