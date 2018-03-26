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
        <div class="animationInit">
          <svg viewBox="75 -45 502 102">
          <text text-anchor="middle" x="50%" y="50%">Carol</text>
        </svg>
        </div>
        <div class="apellido">
          <svg viewBox="0 -20 530 70">
          <text text-anchor="middle" x="50%" y="50%">Sepúlveda Olivos</text>
        </svg>
        </div>
        <h5> Desarrolladora Front-end <span>&</span> Diseñadora Gráfica</h5>
        <br>
        <div id="seeMore"><i class="fa fa-arrow-right"></i> Aquí puedes ver mi trabajo</div>           
      </div>
    </section>`);
    $('#seeMore').click(portfolio); 
  };
  firstView();
  // portafolio
  $('#btn2').click(portfolio); 
  function portfolio() {
    $('#container').attr('value', 'portafolio');
    markMenu(); 
    $('#container').html(`<section id="portafolio">
      <div class="carousel">            
        <a class="carousel-item" href="http://www.saysa.cl/" target="_blank">
          <div class="overlay">
            <h5>Sitio Saysa</h5>
            <p>Wordpress, diseño y desarrollo, animaciones, HTML, CSS y responsive. <span>Ver más ></span></p>
          </div>
          <img src="assets/img/imag-portafolio-saysa.jpg">
        </a>
        <a class="carousel-item" href="http://www.pamelagrant.cl/index.php/hydra-matte-landing" target="_blank">
          <div class="overlay">
            <h5>Landing Pamela Grant</h5>
            <p>Joomla, diseño layout y desarrollo. <span>Ver más ></span></p>
          </div>
          <img src="assets/img/imag-portafolio-pmg.jpg">
        </a>     
        <a class="carousel-item" href="http://www.millefiori.cl/" target="_blank">
          <div class="overlay">
            <h5>Sitio Web Millefiori</h5>
            <p>Diseño de layout, animaciones, HTML, CSS, Joomla, diseño responsivo. <span>Ver más ></span></p>
          </div>
          <img src="assets/img/imag-portafolio-millefiori.jpg">
        </a>
        <a class="carousel-item" href="https://github.com/carol-solivos/nasa-share" target="_blank">
          <div class="overlay">
            <h5>Nasa Share</h5>
            <p>Aquí puedes ver las imágenes que entrega la NASA diariamente. <span>Ver más ></span></p>
          </div>
          <img src="assets/img/imag-portafolio-nasa.jpg">
        </a>
        <a class="carousel-item" href="https://github.com/carol-solivos/cardify" target="_blank">
          <div class="overlay">
            <h5>Cardify</h5>
            <p>Librería npmjs para agregar automáticamente efecto hover con Jquery <span>Ver más ></span></p>
          </div>
          <img src="assets/img/imag-portafolio-cardify.jpg">
        </a>        
        <a class="carousel-item" href="http://www.pamelagrant.cl/index.php/reevolution" target="_blank">
          <div class="overlay">
            <h5>Mini Sitio Reevolution</h5>
            <p>Diseño de layout, animaciones, HTML, CSS, Joomla, diseño responsivo. <span>Ver más ></span></p>
          </div>
          <img src="assets/img/imag-portafolio-reevolution.jpg">
        </a>
        <a class="carousel-item" href="https://github.com/carol-solivos/EASY-VRECO" target="_blank">
          <div class="overlay">
            <h5>Geolocation</h5>
            <p>Ejercicio Geolocation utilizando API de Google Maps, Javascript, CSS y HTML. <span>Ver más ></span></p>
          </div>
          <img src="assets/img/imag-portafolio-bici.jpg">
        </a>
      </div>
    </section>`);
    $('.carousel').carousel({
      dist:-60,
      indicators: true
    });
  };
  // sobremi
  $('#btn3').click(() => {
    $('#container').attr('value', 'sobreMi');
    markMenu();
    $('#container').fadeIn("slow").html(`<section id="sobreMi">      
      <div class="der">
        <h4>Creatividad y persistencia</h4>
        <p>
          Desde que empecé a diseñar sitios web descubrí que el
          código me entretiene y me motiva a seguir
          investigando. He profundizado mis conocimientos en
          programación y desarrollo web, primero de forma
          autodidacta y luego un 
          intensivo para especializarme como Front end.
          Actualmente trabajo de forma independiente, con
          clientes propios y colaborando con otros profesionales.
        </p>
        <br>
        <h5>Skills</h5>
        <div class="icons">
          <a href="#"><i class="fab fa-js"></i></a>
          <a href="#"><i class="fab fa-html5"></i></a>
          <a href="#"><i class="fab fa-css3"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-joomla"></i></a>
          <a href="#"><i class="fab fa-wordpress"></i></a>        
          <a href="#"><i class="fab fa-sass"></i></a>          
          <a href="#"><i class="fab fa-node-js"></i></a>
          <a href="#"><i class="fab fa-trello"></i></a>
        </div>
        <br>
        <div id="pdf">
          <a href="assets/cvitae_4_18.pdf" target="_blank">Si quieres saber mas detalles de mis estudios y trabajos puedes ver mi CV aquí  <i class="fas fa-file-alt"></i></a>
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
    $('body').css('background-image', 'url("./assets/img/fondo-portafolio.jpg")');
  };
  if($('#container').attr('value') === 'portafolio') {
    resetMenu();
    $('#btn2').css({'background-color': '#42C8C3', 'color': 'white'});
    $('body').css('background-image', 'url("./assets/img/fondo-portafolio-azul.jpg")');
  };
  if($('#container').attr('value') === 'sobreMi') {
    resetMenu();
    $('#btn3').css({'background-color': '#6CAE21', 'color': 'white'});
    $('body').css('background-image', 'url("./assets/img/fondo-portafolio-verde.jpg")');
  };
  if($('#container').attr('value') === 'contacto') {
    resetMenu();
    $('#btn4').css({'background-color': '#F74B61', 'color': 'white'});
    $('body').css('background-image', "url('./assets/img/fondo-portafolio-rosa.jpg')");
  };
}

function resetMenu() {
  $('.btnM').css({'background-color': '', 'color': ''});
}
