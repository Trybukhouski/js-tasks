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

// Загрузка трех первых фото

function addImage() {
  fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(url => addElement(url));
}

addImage();
addImage();
addImage();



// PROMISE

async function f() {

  // Загрузка изображений одно за другим

  await new Promise((res, rej) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(result => res(result));
  })
    .then((result) => {
      addElement(result);
      return new Promise((res, rej) => {
        fetch("https://api.thecatapi.com/v1/images/search")
          .then(res => res.json())
          .then(data => data[0].url)
          .then(result => res(result));
      })
    })
    .then((result) => {
      addElement(result);
      return new Promise((res, rej) => {
        fetch("https://api.thecatapi.com/v1/images/search")
          .then(res => res.json())
          .then(data => data[0].url)
          .then(result => res(result));
      })
    })
    .then((result) => {
      addElement(result);
      return new Promise((res, rej) => {
        fetch("https://api.thecatapi.com/v1/images/search")
          .then(res => res.json())
          .then(data => data[0].url)
          .then(result => res(result));
      })
    })
    .then((result) => {
      addElement(result);
      return new Promise((res, rej) => {
        fetch("https://api.thecatapi.com/v1/images/search")
          .then(res => res.json())
          .then(data => data[0].url)
          .then(result => res(result));
      })
    })
    .then((result) => {
      addElement(result);
    })

  // Загрузка изображений одновременно

  const firstImage = new Promise((res, rej) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(result => res(result));
  })

  const secondImage = new Promise((res, rej) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(result => res(result));
  })

  const thirdImage = new Promise((res, rej) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(result => res(result));
  })

  const fourthImage = new Promise((res, rej) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(result => res(result));
  })

  const fifthImage = new Promise((res, rej) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(result => res(result));
  })

  await Promise.all([firstImage, secondImage, thirdImage, fourthImage, fifthImage])
    .then((value) => {
      value.forEach(el => addElement(el))
    })

  // Загрузка первого изображения

  const firstRaceImage = new Promise((res, rej) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(result => res(result));
  })

  const secondRaceImage = new Promise((res, rej) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(result => res(result));
  })

  const thirdRaceImage = new Promise((res, rej) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(result => res(result));
  })

  const fourthRaceImage = new Promise((res, rej) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(result => res(result));
  })

  const fifthRaceImage = new Promise((res, rej) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => data[0].url)
      .then(result => res(result));
  })

  await Promise.race([firstRaceImage, secondRaceImage, thirdRaceImage, fourthRaceImage, fifthRaceImage])
    .then((result => addElement(result)));
}

f();
