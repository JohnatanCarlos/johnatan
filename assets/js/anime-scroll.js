//Adinicionar js nas classe para efeito
$(function () {
    $('[data-toggle="popover"]').popover()
})

var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

//Animação entrando
$(document).ready(function() {
  var $target = $('.anime'),
      animationClass = 'anime-init',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 6);

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });
});


//Animação subindo
$(document).ready(function() {
  var $target = $('.animeUp'),
      animationClass = 'anime-init',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 6);

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });
});
// ----------------------------------------------