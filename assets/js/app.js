$(document).ready(function() {
    // smooth scroll
    $("#menu a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  // carrusel del portafolio
  $('.carousel').carousel({
      dist:-60,
      indicators: true
    });

  $('.btnM').click(x => {
    markMenu(x.target.id);
  })

});

// cambia los estilos del menú
function markMenu(btn) {
  $('.btnM').removeClass('active');
  $('#' + btn).addClass('active');

}
