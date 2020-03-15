$(document).ready(function(){
    
    $('.mob-scroll-bar').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




    $(".home-slider").slick({
dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,

    //autoplay: true,
    //dots: true
    customPaging : function(slider, i) {
        var title = $(slider.$slides[i]).data('title');
        var subtitle = $(slider.$slides[i]).data('subtitle');
        return '<div><div><a class="pager__item"> '+title+' </a><div><div> '+subtitle+' </div><div>';
    },

    //responsive: [{ 
    //    breakpoint: 200,
    //    settings: {
    ///        d
    //    } 
    //}]
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



