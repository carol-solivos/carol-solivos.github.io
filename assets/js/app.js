let enJSON;
let esJSON;
let currentLang = "es";
let enBtn = document.getElementById("csoEn");
let esBtn = document.getElementById("csoEs");
let enIcon = document.getElementsByClassName("cso-en");
let esIcon = document.getElementsByClassName("cso-es");
// modals
let modalTriggers = document.querySelectorAll('[data-modal]');
let modalProject = document.getElementById("modalProject");
let modalProjectContent = document.getElementsByClassName("cso_modal__body__preview__project");

// language
esBtn.addEventListener("click", function(){changeLang("es")}, false);
enBtn.addEventListener("click", function(){changeLang("en")}, false);

fetch("./assets/js/translate/en.json")
  .then((res) => res.json())
  .then((data) => {
    enJSON = data;
    if (currentLang === "en") {
      setLang();
    }
});
fetch("./assets/js/translate/es.json")
  .then((res) => res.json())
  .then((data) => {
    esJSON = data;
    if (currentLang === "es") {
      setLang();
    }
});

function setLang() {
  let translateList = document.querySelectorAll('[data-translate]');
  let showIcon = currentLang === "es" ? esIcon : enIcon;
  let hideIcon = currentLang === "es" ? enIcon : esIcon;
  
  showIcon[0].classList.add('cso_show');
  showIcon[1].classList.add('cso_show');
  hideIcon[0].classList.remove('cso_show');
  hideIcon[1].classList.remove('cso_show');

  for (let item of translateList) {
    let arrayDataset = item.dataset.translate.split(".");
    let string = currentLang === "es" ? esJSON : enJSON;
    arrayDataset.forEach(el => {
      string = string[el]
    });
    item.innerHTML = string;
  }
}

function changeLang(lang) {
  currentLang = lang;
  setLang();
}

// animation icons
let initAnimationIcons = document.getElementsByClassName("init-animation");
const elementsArray = Array.from(initAnimationIcons);
function removeClass() {
  elementsArray.forEach((element) => {
    element.classList.remove("init-animation");
  });
}
setTimeout(removeClass, 2000);

// modals
for (let item of modalTriggers) {
  item.addEventListener("click", function(){showModal(item.dataset.modal)}, false);
}

function showModal(modalId) {
  document.getElementById(modalId).classList.add("cso_show")
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("cso_show")
}

let sliderProject = document.getElementsByClassName("cso_slider--project");

if (sliderProject) {
  for (let item of sliderProject) {
    new Splide(`#${item.id}`, {
      perPage: 3,
      perMove: 1,
      breakpoints: {
        768: {
          perPage: 2,
          padding: {
            right: "2rem",
          },
        },
      },
      gap: 5,
      drag: true,
      arrows: true,
      autoplay: false,
      pagination: true,
      type: "loop",
    }).mount();
  }
}

function showProject(modalId) {
  for (let item of modalProjectContent) {
    item.classList.remove("cso_show");
  }
  document.getElementById(modalId).classList.add("cso_show");
  setTimeout(() => {    

  }, 1000);

}

// const sections = document.getElementsByClassName("panel");

// const animation = (entries, observador) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log(entry.target, entry.target.dataset.active);
//       markMenu(entry.target.dataset.active);
//     }
//   });
// };

// const observador = new IntersectionObserver(animation, {
//   root: null,
//   rootMargin: "50px",
//   threshold: 0.3,
// });

// for (let section of sections) {
//   observador.observe(section);
// }