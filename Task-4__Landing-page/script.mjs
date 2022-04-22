// LAYER

const postImages = document.querySelectorAll('.post-image');
const imagesSection = document.querySelector(".images");
const pageNav = imagesSection.querySelector('.btn-set');
const currentPageWindow = imagesSection.querySelector(".current-page");
const posts = document.querySelectorAll(".post");

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

let currentPage = 1;
let pages = [];

// First page loading

(async function firstPageLoading() {
  await pageDataLoading(9);
  posts.forEach((post, i) => {
    updatePost(post, pages[0][i].origin, 
      pages[0][i].name, 
      pages[0][i].date, 
      pages[0][i].link)
  })
})()

// Next page loading

pageNav.addEventListener("click", pageRender);

async function pageRender(event) {

  // Add preloader for all posts
  posts.forEach(post => {
    post.lastElementChild.hidden = false;
  })

  // Change current page
  changeCurrentPage(event);

  // Update nav UI
  currentPageWindow.innerText = currentPage;

  // Load data for current page
  if(pages.length < currentPage) {
    await pageDataLoading(9);
  }

  // Render page
  posts.forEach((post, i) => {
    updatePost(post, pages[currentPage - 1][i].origin, 
      pages[currentPage - 1][i].name, 
      pages[currentPage - 1][i].date, 
      pages[currentPage - 1][i].link)
  })
}

// Change current page func
function changeCurrentPage(event) {
  if(event.target.id === "btn_left" || event.target.id === "icn_left") {
      currentPage = currentPage <= 1 ? 1 : currentPage - 1;
  }
  if(event.target.id === "btn_right" || event.target.id === "icn_right") {
      currentPage++;
  }
}

// Data loading
async function pageDataLoading(n) {
  let count = 0;
  let page = [];
  while(count < n) {
    await fetch("https://api.giphy.com/v1/gifs/random?api_key=zXE3BnfdrQ0rcZN30gWwwgQ3IyYNp28L&tag=dogs&rating=g")
      .then((response) => response.json())
      .then((postData) => {
        page.push({
          origin: postData.data.images.downsized_large.url,
          name: postData.data.title,
          date: postData.data.import_datetime,
          link: postData.data.embed_url
        });
      });
    count++;
  }
  pages.push(page);
}

// Post update
function updatePost(post, src, title, date, link) {
  post.firstElementChild.firstElementChild.src = src;
  post.children[1].children[0].firstElementChild.innerText = title;
  post.children[1].children[0].firstElementChild.href = link;
  post.children[1].children[1].innerText = date;
  post.firstElementChild.firstElementChild.onload = function() {
    post.lastElementChild.hidden = true;
  }
}

