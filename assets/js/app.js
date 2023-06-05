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
  for (let item of translateList) {
    if (currentLang === "en") {
      item.innerHTML = enJSON[item.dataset.translate];
      enIcon[0].classList.add('cso_show');
      enIcon[1].classList.add('cso_show');
      esIcon[0].classList.remove('cso_show');
      esIcon[1].classList.remove('cso_show');
    } else {
      item.innerHTML = esJSON[item.dataset.translate];
      esIcon[0].classList.add('cso_show');
      esIcon[1].classList.add('cso_show');
      enIcon[0].classList.remove('cso_show');
      enIcon[1].classList.remove('cso_show');
    }
  }
}

function changeLang(lang) {
  currentLang = lang;
  setLang();
}

for (let item of modalTriggers) {
  item.addEventListener("click", function(){showModal(item.dataset.modal)}, false);
}

function showModal(modalId) {
  document.getElementById(modalId).classList.add("cso_show")
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("cso_show")
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