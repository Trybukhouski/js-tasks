// LAYER

const postImages = document.querySelectorAll('.post-image');

postImages.forEach((el) => {
  el.addEventListener("mouseenter", addLayer);
  el.addEventListener("mouseleave", deleteLayer);
})

function addLayer() {
  const layer = document.createElement("div");
  layer.classList.add('layer');

  const btn = document.createElement("div");
  const btnIcn = document.createElement("a");
  btn.append(btnIcn);
  btn.classList.add("btn");
  btnIcn.classList.add("btn-icn", "fas", "fa-link");

  this.append(layer);
  this.append(btn);
}

function deleteLayer(event) {
  const childs = event.target.children;
  childs[2].remove();
  childs[1].remove();
}

// SUBMENU

const navMenu = document.querySelector(".nav-menu");
const subNavs = navMenu.querySelectorAll(".sub-nav")

subNavs.forEach(el => {
  el.hidden = true;
})

navMenu.addEventListener("click", openSubmenu);

function openSubmenu(event) {
  if(event.target.nextElementSibling === null) return;
  if(event.target.nextElementSibling.hidden === true) {
    subNavs.forEach(el => {
      el.hidden = true;
    })
    event.target.nextElementSibling.hidden = false;
  } else {
    event.target.nextElementSibling.hidden = true
  }
}

// BURGER

const burger = document.querySelector(".btn_burger");
const menu = document.querySelector(".nav-menu");

burger.addEventListener("click", showHideMenu);

function showHideMenu() {
  menu.classList.toggle("switcher");
  menu.classList.toggle("nav-menu");
  menu.classList.toggle("nav-menu_burger")
}