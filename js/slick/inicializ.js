// $('.domeny').slick({
//   autoplay: true,
//   autoplaySpeed: 3000,
//   arrows: false,
// });
//
// $('.opisanka').slick({
//   autoplay: true,
//   autoplaySpeed: 15000,
//   arrows: false,
//   dots: true,
//   appendDots:$(".Slick-Navigation")
// });
//
// $('.center').slick({
//   autoplay: true,
//   autoplaySpeed: 10000,
//   slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: true,
//     mobileFirst: true,
//     prevArrow: $(".pp2"),
//     nextArrow: $(".nn2"),
//     responsive: [{
//         breakpoint: 500,
//         settings: {
//             slidesToShow: 3,
//         }
//     }]
// });
$('.center').slick({
  infinite: true,
  autoplay: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: false,
  centerMode: true,
  variableWidth: true,
  dots: false,
  focusOnSelect: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',

});



  $(function() {
    $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
  });

  (function($) {
    $(function() {

      $('ul').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div#portfolio').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

    });
  })(jQuery);
