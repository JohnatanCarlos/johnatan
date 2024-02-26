// Scroll Suave
$('button').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 1300);
    
});


// Typed.js
var typed3 = new Typed('#typed', {
  strings: ['Sou um <b>Desenvolvedor <b style="color: #2A7AE4">Front-End</b>.',
            'Cada projeto é uma oportunidade <br> de criar algo <b style="color: #2A7AE4">extraordinário</b>.',
            'Desenhando o <b style="color: #2A7AE4">futuro da web</b> <br> com paixão e inovação.'],
  typeSpeed: 40,
  backSpeed: 20,
  loop: true
});
