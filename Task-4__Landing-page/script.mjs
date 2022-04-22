// LAYER

const postImages = document.querySelectorAll('.post-image');
const imagesSection = document.querySelector(".images");
const pageNav = imagesSection.querySelector('.btn-set');
const currentPageWindow = imagesSection.querySelector(".current-page");
const posts = document.querySelectorAll(".post");
let currentPage = 1;
let loadedPages = 1;
let pages = [];

postImages.forEach((el) => {
  el.addEventListener("mouseenter", addLayer);
  el.addEventListener("mouseleave", deleteLayer);
})

function addLayer(e) {
  const layer = document.createElement("div");
  layer.classList.add('layer');
  const btn = document.createElement("div");
  const btnIcn = document.createElement("a");
  btnIcn.setAttribute("href", pages[currentPage - 1][this.id - 1].link);
  btnIcn.setAttribute("target", "_blank");
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

// ------TASK 5------------

// firstLoading

updatePosts(0);

// Change pages
pageNav.addEventListener("click", changeCurrentPage);

async function changeCurrentPage(event) {
    if(event.target.id === "btn_left" || event.target.id === "icn_left") {
        currentPage = currentPage === 1 ? 1 : currentPage - 1;
        updatePosts(currentPage);
    }
    if(event.target.id === "btn_right" || event.target.id === "icn_right") {
        currentPage++;
        updatePosts(currentPage);
        if(currentPage > loadedPages) {
            loadedPages++;
            updatePosts(currentPage);
        } 
    }
    currentPageWindow.innerText = currentPage;
}

// Data loader
async function cardsDataArrayLoader() {
    let count = 0;
    let cards = [];
    while(count < 9) {
        await fetch("https://api.giphy.com/v1/gifs/random?api_key=zXE3BnfdrQ0rcZN30gWwwgQ3IyYNp28L&tag=dogs&rating=g")
            .then((resp) => resp.json())
            .then((data) => cards.push({
                origin: data.data.images.downsized_large.url,
                name: data.data.title,
                date: data.data.import_datetime,
                link: data.data.embed_url
        }));
        count++;
    }
    pages.push(cards);
    count = 0;
    return pages;
}

function addContentToPosts(i, src, title, date, link) {
    posts[i].firstElementChild.firstElementChild.src = src;
    posts[i].children[1].children[0].firstElementChild.innerText = title;
    posts[i].children[1].children[0].firstElementChild.href = link;
    posts[i].children[1].children[1].innerText = date;
}

async function updatePosts(pageNum) {
  posts.forEach(el => el.children[2].hidden = false);
  await cardsDataArrayLoader();

  for(let i = 0; i < 9; i++) {
      addContentToPosts(i, pages[pageNum][i].origin, pages[pageNum][i].name, pages[pageNum][i].date, pages[pageNum][i].link);
      posts[i].firstElementChild.firstElementChild.onload = function() {
        posts[i].children[2].hidden = true;
      }
  }
};