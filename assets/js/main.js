// Soft Scroll
$('button').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href');
  targetOffset = $(id).offset().top;

  $('html, body').animate({
      scrollTop: targetOffset
  }, 1300);
});

function toggleMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}

// Typed.js
new Typed('#typed', {
  strings: [
    '<b>Desenvolvedor <b style="color: #2A7AE4">Web Full-Stack</b>.',
    'Cada projeto é uma oportunidade <br> de criar algo <b style="color: #2A7AE4">extraordinário</b>.',
    'Desenhando o <b style="color: #2A7AE4">futuro da web</b> <br> com paixão e inovação.'
  ],
  typeSpeed: 40,
  backSpeed: 20,
  loop: true
});
