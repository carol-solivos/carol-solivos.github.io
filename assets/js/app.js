$(document).ready(function() {
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
