// import fetch from 'node-fetch';

const wrapper = document.querySelector('.wrapper');

const addElement = (url) => {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const image = document.createElement('img');
  image.alt = 'cat-image';
  image.src = url;

  const loader = document.createElement('div');
  loader.classList.add('loader');

  wrapper.appendChild(imgContainer);
  imgContainer.appendChild(loader);

  let intervalID = setInterval(() => {
    if(image.complete) {
      clearInterval(intervalID);
      imgContainer.firstChild.remove();
      imgContainer.appendChild(image);
    }
  }, 100);
}

async function fetchImage() {
  const result = await fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url);
  return result;
}

// Загрузка трех первых фото

function addImage() {
  fetchImage().then(url => addElement(url));
}

addImage();
addImage();
addImage();

async function f() {

  // CB: Загрузка изображений одно за другим
  await addImagesCB(5, addElement);

  // CB: Загрузка изображений одновременно
  await addAllImmagesCB(5, addElement);

  // Promise: Отображение первого изображения

  await addFirstImmageCB(5, addElement);

  // Promise: Загрузка изображений одно за другим
  await addImagesWithPromise(5);

  // Promise: Загрузка изображений одновременно
  await Promise.all(promiseArrGenerator(5))
    .then((value) => {
    value.forEach(el => addElement(el))
  })

  // Promise: Отображение первого изображения
  await Promise.race(promiseArrGenerator(5))
    .then((result => addElement(result)));

  // Async-await: Загрузка изображений одновременно
  await addAllImmagesWithAsyncfunc(5);

  // Async-await: Отображение первого изображения
  await addFirstImageWithAsyncfunc(5);
}
f();

function addImagesCB(n, callback) {
  for (let i = 0; i < n; i++) {
    fetchImage().then((data) => callback(data));
  }
}

function addImagesWithPromise(n) {
  for (let i = n; i > 0; i--) {
    fetchImage().then(url => addElement(url));
  }
}

function addAllImmagesCB(n, callback) {
  const arr = promiseArrGenerator(n);
  arr.forEach(el => el.then(url => callback(url)))
}

async function addAllImmagesWithAsyncfunc(n) {
  const arr = await promiseArrGenerator(n);
  arr.forEach(el => el.then(url => addElement(url)));
}

function addFirstImmageCB(n, callback) {
  const arr = promiseArrGenerator(n);
  arr[0].then(url => callback(url));
}

async function addFirstImageWithAsyncfunc(n) {
  const arr = await promiseArrGenerator(n);
  arr[0].then(url => addElement(url));
}

function promiseArrGenerator(n) {
  let arr = [];
  let i = 1;
  while(i <= n) {
    arr.push(fetchImage())
    i++;
  }
  return arr;
}