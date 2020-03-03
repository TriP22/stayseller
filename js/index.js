$(document).ready(function(){
    
    $('.th-slick-responsive-1').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:'<button type="button" class="slick-prev"><i class="las la-angle-left"></i></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 775,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });


    $('.th-slick-responsive-2').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });


  });
  
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});