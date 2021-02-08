$(document).ready(function(){
  $('.carousel-slick').slick({
        slidesToShow: 3,
         slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows : false
  });
});
function topFunction() {
    $("html, body").animate({
        scrollTop: 0
    }, 2000);
}
