$(document).ready(function() {
  
  $('#btn1').click(() => {
    $('#container').html(`<section id="inicio">
      <div class="foto">
        <img src="assets/img/perfil.jpg" alt="">
      </div>
      <div class="intro">
        <h1>Carol Sepúlveda Olivos</h1>
        <h4>Desarrolladora Front-end & Diseñadora Gráfica</h4>
        <br>
        <a href="#"><i class="fa fa-arrow-right"></i> Aquí puedes ver mi trabajo</a>
      </div>
    </section>`);
  });
  $('#btn2').click(() => {    
    $('#container').html(`<section id="portafolio">
      <div class="carousel">
        <a class="carousel-item" href="#one!"><img src="assets/img/3.jpg"></a>
        <a class="carousel-item" href="#two!"><img src="assets/img/3.jpg"></a>
        <a class="carousel-item" href="#three!"><img src="assets/img/3.jpg"></a>
        <a class="carousel-item" href="#four!"><img src="assets/img/3.jpg"></a>
        <a class="carousel-item" href="#five!"><img src="assets/img/3.jpg"></a>
      </div>
    </section>`);
    $('.carousel').carousel({
      dist:-30,
      padding: 60
    });
  });
  $('#btn3').click(() => {
    $('#container').html(`asd`);
  });
  $('#btn4').click(() => {
    $('#container').html('cotacto');
  });

});

function hover() {
  $('#images img').hover(function() {
    $(this).css('opacity', '0.5');
  }, function() {
    $(this).css('opacity', '1');
  });
};

function showOverlay() {
$(this).find('.text').show();
// estilos de los textos de figcaption
$(this).find('.text').css({'position': 'absolute',
  'top': '50%',
  'left': '50%',
  'transform': 'translateX(-50%) translateY(-50%)',
  'margin': '0',
  'width': '100%',
  'text-align': 'center',
  'font-size': '1.5em',
  'transition': 'all 1s ease-in-out'
});
// estilos de las imagenes
$(this).find('img').css({'filter': 'brightness(10%)', 
  '-webkit-filter': 'brightness(30%)',
  '-moz-filter': 'brightness(30%)', 
  '-o-filter': 'brightness(30%)',
  '-ms-filter': 'brightness(30%)',
  'filter': 'grayscale(30%)',
  // 'border': '5px solid green',
  'transition': 'all 1s ease-in-out'
});

// estilo del contenedor padre, div de columnas
$(this).parent().css({
  'position': 'relative',
  'z-index': '1',
  '-webkit-transition': 'all 1s ease; /* Safari and Chrome */',
  '-moz-transition': 'all 1s ease; /* Firefox */',
  '-ms-transition': 'all 1s ease; /* IE 9 */',
  '-o-transition': 'all 1s ease; /* Opera */',
  'transition': 'all 1s ease',
  '-webkit-transform': 'scale(1.2)',
  '-moz-transform': 'scale(1.2)',
  '-ms-transform': 'scale(1.2)',
  '-o-transform': 'scale(1.2)',
  'transform': 'scale(1.2)',
  'transition': 'all 1s ease'
});
};

function hideOverlay(event) {
  // esconder el texto
  $(this).find('.text').hide();
  // delvolver el contenedor a su estado inicial
  $(this).parent().css({'position': 'relative',
    'z-index': '0',
    '-moz-transform': 'scale(1.0)',
    '-ms-transform': 'scale(1.0)',
    '-o-transform': 'scale(1.0)',
    'transform': 'scale(1.0)',
    '-webkit-transition': 'all 1s ease; /* Safari and Chrome */',
    '-moz-transition': 'all 1s ease; /* Firefox */',
    '-ms-transition': 'all 1s ease; /* IE 9 */',
    '-o-transition': 'all 1s ease; /* Opera */',
    'transition': 'all 1s ease'
  });
  $(this).find('figure').css({'display': 'none', 
    'background-color': 'transparent'
  });
  $(this).find('img').css({'filter': 'brightness(100%)', 
    '-webkit-filter': 'brightness(100%)'
  });
};


  //empieza codigo foodmap
  // $(function todos() {
  //   $('#images').text('');
  //   var cafes1;
  //   var comidaRapida1;
  //   var restaurantes1;
  //   for (var i = 0; i < data.cafes.length; i++) {
  //     cafes1 = data.cafes[i];
  //     comidaRapida1 = data.comidaRapida[i];
  //     restaurantes1 = data.restaurantes[i];
  //     $('#images').append('<img class="imgs" data-type="restaurant" src="assets/images/' + cafes1 + '">');
  //     $('#images').append('<img class="imgs" data-type="restaurant" src="assets/images/' + comidaRapida1 + '">');
  //     $('#images').append('<img class="imgs" data-type="restaurant" src="assets/images/' + restaurantes1 + '">');
  //   }
  //   $('#todos').click(todos);
  //   hover();
  //   click();
  // });  
  // $('#cafe').click(function() {
  //   $('#images').text('');
  //   var cafes;
  //   for (var i = 0; i < data.cafes.length; i++) {
  //     cafes = data.cafes[i];
  //     $('#images').append('<img class="imgs" data-type="cafe" src="assets/images/' + cafes + '">');
  //   }
  //   hover();
  //   click();
  // });
  // $('#restaurante').click(function() {
  //   $('#images').text('');
  //   var restaurante;
  //   for (var i = 0; i < data.restaurantes.length; i++) {
  //     restaurante = data.restaurantes[i];
  //     $('#images').append('<img class="imgs" data-type="restaurant" src="assets/images/' + restaurante + '">');
  //   }
  //   hover();
  //   click();
  // });
  // $('#rapida').click(function() {
  //   $('#images').text('');
  //   var comidaRapida;
  //   for (var i = 0; i < data.comidaRapida.length; i++) {
  //     comidaRapida = data.comidaRapida[i];
  //     $('#images').append('<img class="imgs" data-type="bakery" src="assets/images/' + comidaRapida + '">');
  //   }
  //   hover();
  //   click();
  // });
  // function hover() {
  //   $('#images img').hover(function() {
  //     $(this).css('opacity', '0.5');
  //   }, function() {
  //     $(this).css('opacity', '1');
  //   });
  // };
  // function click() {
  //   $('#images img').click(function() {
  //     $(this).attr('data-toggle', 'modal');
  //     $(this).attr('data-target', '#myModal');
  //   });
  // };
  //termina codigo foodmap

  //empieza codigo cardify
  // $(function cardify() {
  //   let imgs = $('#portafolio').find('img');
  //   imgs.wrap('<figure></figure>');
  //   let figure = $('#portafolio').find('figure');
  //   figure.css({
  //     'width': '100%',
  //     'display': 'inline-block', 
  //     'text-align': 'center',
  //     'margin-top': '3em',
  //     'color': 'white'
  //   });  
  //   imgs.css({
  //     'width': '100%',
  //     'object-fit': 'cover', 
  //     'height': '12em',
  //     'margin': '1em 0'    
  //   });
  //   $('#portafolio').find('img').each(function(index, element) {
  //     var text = $(element).attr('alt');
  //     $(element).after('<figcaption class="text">' + text + '</figcaption>');
  //   });
  //   let figCaption = $('#portafolio').find('.text');
  //   figCaption.css({'position': 'absolute',
  //     'top': '50%',
  //     'left': '50%',
  //     'display': 'none',
  //     'transform': 'translateX(-50%) translateY(-50%)',
  //     'margin': '0',
  //     'width': '100%',
  //     'text-align': 'center',
  //     'font-size': '1.5em',
  //     'transition': 'all 1s ease-in-out'
  //   });
  //   figure.parent().css({'position': 'relative',
  //     'z-index': '1', 
  //     '-webkit-transition': 'all 1s ease; /* Safari and Chrome */',
  //     '-moz-transition': 'all 1s ease; /* Firefox */',
  //     '-ms-transition': 'all 1s ease; /* IE 9 */',
  //     '-o-transition': 'all 1s ease; /* Opera */',
  //     'transition': 'all 1s ease'
  //   });
  //   figure.mouseover(showOverlay);
  //   figure.mouseleave(hideOverlay);
  // }); 
      
  //termina codigo cardify