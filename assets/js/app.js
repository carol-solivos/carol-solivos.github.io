$(document).ready(function() {
  // inicio
  $('.carousel').carousel({
      dist:-60,
      indicators: true
    });
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
  // firstView();
  // portafolio
  $('#btn2').click(() => {
    $('#container').attr('value', 'portafolio');
    markMenu(); 
    $('#container').html(`<section id="portafolio">
      <div class="carousel">
        <a class="carousel-item" href="http://www.pamelagrant.cl/index.php/reevolution" target="_blank">
          <div class="overlay">
            <h5>Mini Sitio Reevolution</h5>
            <p>Diseño de layout, animaciones, HTML, CSS, Joomla, diseño responsivo.</p>
          </div>
          <img src="assets/img/imag-portafolio-reevolution.jpg"></a>
        <a class="carousel-item" href="http://www.millefiori.cl/" target="_blank">
          <div class="overlay">
            <h5>Sitio Web Millefiori</h5>
            <p>Diseño de layout, animaciones, HTML, CSS, Joomla, diseño responsivo.</p>
          </div>
          <img src="assets/img/imag-portafolio-millefiori.jpg"></a>
        <a class="carousel-item" href="#three!">
          <div class="overlay">
            <h5>First Panel</h5>
            <p>adsfasdf asd asd asd asd</p>
          </div>
          <img src="assets/img/imag-portafolio-pmg.jpg"></a>
        <a class="carousel-item" href="#four!">
          <div class="overlay">
            <h5>First Panel</h5>
            <p>adsfasdf asd asd asd asd</p>
          </div>
          <img src="assets/img/imag-portafolio-saysa.jpg"></a>
        <a class="carousel-item" href="#five!">
          <div class="overlay">
            <h5>First Panel</h5>
            <p>adsfasdf asd asd asd asd</p>
          </div>
          <img src="assets/img/imag-portafolio-bici.jpg"></a>
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
    $('#container').fadeIn("slow").html(`<section id="sobreMi">
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
        <svg viewBox="0 0 2000 500">
          <text text-anchor="middle" x="50%" y="50%">hablemos!</text>
        </svg>
        <div class="contactText">
          <p><a href="mailto:carol.solivos@gmail.com"><i class="fa fa-envelope"></i> carol.solivos@gmail.com</a></p>
        <p><i class="fa fa-mobile"></i> +569 767 50 110</p>
        <p><a href="https://github.com/carol-solivos"><i class="fab fa-github"></i> github.com/carol-solivos</a></p>
        <p><a href="https://cl.linkedin.com/in/carol-sepulveda-olivos"><i class="fab fa-linkedin"></i> cl.linkedin.com/in/carol-sepulveda-olivos</a></p> 
        </div>             
      </div>   
    </section>`);
  });

});

// cambia los estilos del menú
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