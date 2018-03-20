$(document).ready(function() {
  // inicio
  
  $('#btn1').click(firstView);
  function firstView() {
    $('#container').attr('value', 'inicio');
    markMenu();
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
  };
  firstView();
  // portafolio
  $('#btn2').click(() => {
    $('#container').attr('value', 'portafolio');
    markMenu(); 
    $('#container').html(`<section id="portafolio">
      <div class="carousel">
        <a class="carousel-item" href="#one!"><img src="assets/img/imag-portafolio-reevolution.jpg"></a>
        <a class="carousel-item" href="#two!"><img src="assets/img/imag-portafolio-millefiori.jpg"></a>
        <a class="carousel-item" href="#three!"><img src="assets/img/imag-portafolio-pmg.jpg"></a>
        <a class="carousel-item" href="#four!"><img src="assets/img/imag-portafolio-saysa.jpg"></a>
        <a class="carousel-item" href="#five!"><img src="assets/img/imag-portafolio-bici.jpg"></a>
      </div>
    </section>`);
    $('.carousel').carousel({
      dist:-60,
      indicators: true
    });
  });
  // sobremi
  $('#btn3').click(() => {
    $('#container').attr('value', 'sobreMi');
    markMenu();
    $('#container').html(`<section id="sobreMi">
      <div class="izq">
        <img src="assets/img/perfil.jpg" alt="">
        <a href="#" class="waves-effect waves-light btn">Bio</a>
        <a href="#" class="waves-effect waves-light btn">Skills</a>
        <a href="#" class="waves-effect waves-light btn">Curriculum</a>
      </div>
      <div class="der">
        <h4>Sobre mí</h4>
        <p>
          Desde que empecé a diseñar sitios web descubrí que el
          código me entretiene y me motiva a seguir
          investigando. He profundizado mis conocimientos en
          programación y desarrollo web, primero de forma
          autodidacta y luego en Laboratoria, un bootcamp
          intensivo para especializarse como Front end.
          Actualmente trabajo de forma independiente, con
          clientes propios o colaborando con otros profesionales.
        </p>
        <div class="icons">
          <a href="#"><i class="fab fa-joomla"></i></a>
          <a href="#"><i class="fab fa-js"></i></a>
          <a href="#"><i class="fab fa-sass"></i></a>
          <a href="#"><i class="fab fa-wordpress"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-html5"></i></a>
          <a href="#"><i class="fab fa-css3"></i></a>
          <a href="#"><i class="fab fa-node-js"></i></a>
          <a href="#"><i class="fab fa-trello"></i></a>
        </div>
      </div>
    </section>`);
  });
  // contacto
  $('#btn4').click(() => {
    $('#container').attr('value', 'contacto');
    markMenu();
    $('#container').html(`<section id="contacto">
      <div class="izq">
        <h4>Hablemos!</h4>
        <p><a href="mailto:carol.solivos@gmail.com"><i class="fa fa-envelope"></i> carol.solivos@gmail.com</a></p>
        <p><i class="fa fa-mobile"></i> +569 767 50 110</p>
        <p><i class="fa fa-linkedin"></i> Linkedin</p>
      </div>
      <div class="der">
        <!-- <div class="container">
          <canvas></canvas>
          <p>Click &amp; drag to rotate</p>
        </div> -->
      </div>
    </section>`);
  });

});

function markMenu() {
  if($('#container').attr('value') === 'inicio') {
    resetMenu();
    $('#btn1').css({'background-color': '#555', 'color': 'white'});
  };
  if($('#container').attr('value') === 'portafolio') {
    resetMenu();
    $('#btn2').css({'background-color': '#42C8C3', 'color': 'white'});
  };
  if($('#container').attr('value') === 'sobreMi') {
    resetMenu();
    $('#btn3').css({'background-color': '#6CAE21', 'color': 'white'});
  };
  if($('#container').attr('value') === 'contacto') {
    resetMenu();
    $('#btn4').css({'background-color': '#F74B61', 'color': 'white'});
  };
}

function resetMenu() {
  $('.btnM').css({'background-color': '', 'color': ''});
}

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






  // http://www.pamelagrant.cl/index.php/reevolution

  // http://www.pamelagrant.cl/index.php/hydra-matte-landing