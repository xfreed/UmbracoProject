$(document).ready(function(){
  $('.carousel-slick').slick({
            infinite: true,
            speed: 1000,
            adaptiveHeight: true,
            variableWidth: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
  });
});
function topFunction() {
    $("html, body").animate({
        scrollTop: 0
    }, 2000);
}
