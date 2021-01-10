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


// Scroll Suave
$('button').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 1300);
    
});
//------------------------------------------------

// Typed.js
var typed3 = new Typed('#typed', {
  strings: ['Sou um <b>Desenvolvedor Front-End</b>',
            'Crio <b style="color: #2A7AE4">sites fantásticos</b>',
           ],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
});
//------------------------------------------------


// Informativo do Formulario
function enviar (){ 
    alert ("Ops!! Desculpe não conseguirei enviar esse e-mail agora, tente contato pelo WhatApp ✆");
}

function enviarInput (){ 
  alert ("Acho que algo deu errado tente contato pelo WhatApp ✆");
}
//------------------------------------------------

