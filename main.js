const selfName = document.getElementById("self-name");

selfName.onmouseout = function () {
  this.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const university = document.getElementById("university");
const univElement = document.getElementById("univ-element");
const univMap = document.getElementById("univ-map");
const major = document.getElementById("major");
const majorElement = document.getElementById("major-element");
const born = document.getElementById("born");
const bornElement = document.getElementById("born-element");
const hobby = document.getElementById("hobby");
const hobbyElement = document.getElementById("hobby-element");
const main = document.getElementById("main");

university.onclick = function () {
  univElement.classList.toggle("univ-element");
};
major.onclick = function () {
  majorElement.classList.toggle("major-element");
};
born.onclick = function () {
  bornElement.classList.toggle("born-element");
};
hobby.onclick = function () {
  hobbyElement.classList.toggle("hobby-element");
};

const hobbyPhoto = document.getElementById("hobby-photo");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const slideText = document.getElementById("slide-text");

let photos = [
  { Image: "lotte.jpg", text: "野球観戦(今年は5試合観に行って5敗でした...)" },
  { Image: "kinggnu.jpg", text: "フェス観戦(KingGnuのライブによく行きます!)" },
];

let i = 1;
hobbyPhoto.src = photos[0].Image;
slideText.textContent = photos[0].text;

leftArrow.onclick = function () {
  if (i === 0) {
    slideText.textContent = photos[1].text;
    hobbyPhoto.src = photos[1].Image;
    i = 0;
  } else {
    slideText.textContent = photos[0].text;
    hobbyPhoto.src = photos[0].Image;
    i = 1;
  }
};

rightArrow.onclick = function () {
  if (i === 0) {
    slideText.textContent = photos[1].text;
    hobbyPhoto.src = photos[1].Image;
    i = 1;
  } else {
    slideText.textContent = photos[0].text;
    hobbyPhoto.src = photos[0].Image;
    i = 0;
  }
};
