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