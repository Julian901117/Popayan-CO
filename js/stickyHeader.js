$(document).ready(function () {

    var fixedHeader = $('#fixedHeader');
  
    $(window).on('scroll', function () {
  
      var historiaOffsetTop = $('#historia').offset().top;
  
      if ($(window).scrollTop() >= historiaOffsetTop) {
  
        fixedHeader.css('margin-top', 0);
  
      }else if ($(window).scrollTop() <= historiaOffsetTop/2) {
  
        fixedHeader.css('margin-top', '-68px');
  
      }
  
    })
  
  
  });