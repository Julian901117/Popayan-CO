$(document).ready(function () {

    // Mostrar y ocultar botón "Volver arriba"
  
    var btnVolverArriba = $('#btnVolverArriba');
  
    $(window).on('scroll', function () {
  
      var historiaOffsetTop = $('#historia').offset().top;
  
      if ($(window).scrollTop() >= historiaOffsetTop) {
  
        btnVolverArriba.css('margin-right', 0);
  
      }else if ($(window).scrollTop() <= historiaOffsetTop/2) {
  
        btnVolverArriba.css('margin-right', '-60px');
  
      }
  
    })

    // Movimiento suave de scroll de "Inicio" y "Volver arriba"

  $('a.volver-arriba').on('click', function (e) {
    e.preventDefault();

    if ($(window).scrollTop() != 0) {
      $('html, body').stop().animate({scrollTop: 0}, 1000);
    }

  })

  // Movimiento suave de scroll de los demás items del menú principal
  $('a.scroll-suave').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-historia').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 122
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-equipo').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 68
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });
  
});