// tooltip js start
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// tooltip js end

// banner slick js start

$(function () {
  'use strict';
  $('.banner_slider').slick({
      arrows: false,
      dots: true,
      dotsClass:'slider_dots',
      autoplay: true,
      autoplaySpeed: 2000
    
  })
})

// banner slick js end

//new arrivals slick js start
$(function () {
  'use strict';
  $('.new_prdct_slider').slick({
    slidesToShow:4,
    prevArrow:'<i class="fa-solid fa-chevron-left product_slider_icon"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right product_slider_icon"></i>'
  });
})
//new arrivals slick js end

// getoff slick js start
$(function () {
  'use strict';
  $('.getoff_slider').slick({
    arrows:'false',
    dots:true,
    dotsClass:'slider_dots',
    slidesToShow:2,
    autoplay: true,
    autoplaySpeed: 2000,
    
  })
})
// getoff slick js end

// venobox js start
new VenoBox();
// venobox js end

// blog slick js start
$(function () {
  'use strict';
  $('.common_slider').slick({
    arrows:'false',
    dots:true,
    dotsClass:'slider_dots',
    slidesToShow:4,
    autoplay: true,
    autoplaySpeed: 1500,
    
  })
})
// blog slick js end

// instagram js start
$(function () {
  'use strict';
  $('.instagram_slider').slick({
    arrows:'false',
    dots:true,
    dotsClass:'slider_dots',
    slidesToShow:5,
    autoplay: true,
    autoplaySpeed: 1500,
    
  })
})
// instagram js end

// countdown js start
$('#deals_countdown').countdown('2027/12/31', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="cuntdown_item"><h3>%d</h3><p>Days</p></div> '
      + ' <span>:</span> '
      + ' <div class="cuntdown_item"><h3>%H</h3><p>Hour</p></div> '
      + ' <span>:</span> '
      + '<div class="cuntdown_item"><h3>%M</h3><p>Minute</p></div> '
      + ' <span>:</span> '
      + ' <div class="cuntdown_item"><h3>%S</h3><p>Sec</p></div>'));
  });
//   countdown js end

 //  back to top js start

 $(function () {
  $(window).on('scroll',function () {
    var scrollsize= $(window).scrollTop()

    if (scrollsize > 200) {
      $('#backtotop').show();
       }
    else
    $('#backtotop').hide();
     })

     $('#backtotop').on('click', function () {
      $('html,body').animate({
        scrollTop:0,
      },1000)
     })
     
})

// back to top js end

// archivement js start
$(function () {
  $('.achivement_counterup').counterUp({
    delay: 10,
    time: 1000
});
})
// archivement js end
