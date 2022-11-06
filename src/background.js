const imgNum = [1,2,3,4,5,6,7,8];
const backImg = document.querySelector(".back-img");
const randomImg = Math.floor(Math.random()*imgNum.length) + 1;
const background = document.createElement("img");
const url = `/challenge/img/${randomImg}.png`
background.src = `/challenge/img/${randomImg}.png`;
backImg.appendChild(background);
background.style.backgroundImage = `url('${url}')`