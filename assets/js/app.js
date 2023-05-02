let enJSON;
let esJSON;

fetch("./assets/js/translate/en.json")
  .then((res) => res.json())
  .then((data) => {
    enJSON = data;
});
fetch("./assets/js/translate/es.json")
  .then((res) => res.json())
  .then((data) => {
    esJSON = data;
});

function setLang() {
  let translateList = document.getElementsByClassName("cs_translate");
  for (let item of translateList) {
    item.innerHTML = data[item.dataset.translate];
  }
}

// $(window).scroll(function() {
  
//   // selectors
//   var $window = $(window),
//       $body = $('body'),
//       $panel = $('.panel');
  
//   // Change 33% earlier than scroll position so colour is there when you arrive.
//   var scroll = $window.scrollTop() + ($window.height() / 3);
 
//   $panel.each(function () {
//     var $this = $(this);
    
//     // if position is within range of this panel.
//     // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//     // Remember we set the scroll to 33% earlier in scroll var.
//     if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
//       // Remove all classes on body with color-
//       $body.removeClass(function (index, css) {
//         return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//       });
       
//       // Add class of currently active div
//       $body.addClass('color-' + $(this).data('color'));
//       markMenu($(this).data('active'));
//     }
//   });    
  
// }).scroll();

// cambia los estilos del menú
// document.body.classList.add('color-' + $(this).data('color'))
// $body.addClass('color-' + $(this).data('color'));
//       markMenu($(this).data('active'));

function markMenu(btn) {
  let btnMenu = document.getElementsByClassName('btnMenu');
  let btnID = document.getElementById(btn);

  for (let btn of btnMenu) {
    btn.classList.remove('active');
  }
  btnID.classList.add('active');
}

const sections = document.getElementsByClassName("panel");

const animation = (entries, observador) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target, entry.target.dataset.active);
      markMenu(entry.target.dataset.active);
    }
  });
};

const observador = new IntersectionObserver(animation, {
  root: null,
  rootMargin: "50px",
  threshold: 0.3,
});

for (let section of sections) {
  observador.observe(section);
}