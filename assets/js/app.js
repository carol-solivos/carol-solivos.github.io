let enJSON;
let esJSON;
let langstart = "es";

fetch("./assets/js/translate/en.json")
  .then((res) => res.json())
  .then((data) => {
    enJSON = data;
    if (langstart === "en") {
      setLang();
    }
});
fetch("./assets/js/translate/es.json")
  .then((res) => res.json())
  .then((data) => {
    esJSON = data;
    if (langstart === "es") {
      setLang();
    }
});

function setLang() {
  let translateList = document.querySelectorAll('[data-translate]');
  for (let item of translateList) {
    langstart === "es" ? item.innerHTML = esJSON[item.dataset.translate] : item.innerHTML = enJSON[item.dataset.translate];
  }
}

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