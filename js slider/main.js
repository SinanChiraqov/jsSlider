let images = ["./images/1.jpg", "./images/2.png", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg"];
let prewBtn = document.getElementById("prew");
let nextBtn = document.getElementById("next");
let sliderBox = document.querySelector(".slider-box");

prewBtn.addEventListener("click", prewSlide);
nextBtn.addEventListener("click", nextSlide);

let i = 1;
sliderBox.innerHTML = `<img src="${images[i]}" alt="" />`;
function nextSlide(a) {
  i++;
  sliderBox.innerHTML = `<img src="${images[i]}" alt="" />`;
  if (i==images.length-1) {
    i=0
  }
}


function prewSlide(a) {
  i--;
  sliderBox.innerHTML = `<img src="${images[i]}" alt="" />`;
  if (i==0) {
    let lastImgValue = images.length - 1;
    console.log(lastImgValue)
    i=4;
  }
}

setInterval(() => {
  i++;
  sliderBox.innerHTML = `<img src="${images[i]}" alt="" />`;
  if (i==images.length-1) {
    i=0
  }
}, 3000)