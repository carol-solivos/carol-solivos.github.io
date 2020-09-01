$(document).ready(function() {
  $('.modal').modal();

  // smooth scroll
  $("#menu a, #seeMore a").on('click', function(event) {
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
      padding: 80,
      indicators: true
    });

  $('.btnM').click(x => {
    markMenu(x.target.id);
  })


});

$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
      markMenu($(this).data('active'));
    }
  });    
  
}).scroll();

// cambia los estilos del menú
function markMenu(btn) {
  $('.btnM').removeClass('active');
  $('#' + btn).addClass('active');

}
