let prewBtn = document.getElementById("prew");
let nextBtn = document.getElementById("next");
let sliderBox = document.querySelector(".slider__box");
let sliderTitle = document.querySelector(".slider__title");
let sliderSubTitle = document.querySelector(".slider__subtitle");

prewBtn.addEventListener("click", prewSlide);
nextBtn.addEventListener("click", nextSlide);

let data = [
  {
    id: 0,
    image: "./images/2.png",
    title: "Lorem, ipsum.",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, id. Rerum maiores quo nobis dolorum provident consectetur soluta fugiat tenetur quae aut!",
  },
  {
    id: 1,
    image: "./images/3.jpg",
    title: "ipsum.",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, id. Rerum maiores quo nobis dolorum provident consectetur soluta fugiat tenetur quae aut! Quidem, alias esse laboriosam eaque unde, dolorum",
  },
  {
    id: 2,
    image: "./images/4.jpg",
    title: "Lorem.",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, id. Rerum maiores quo nobis dolorum provident consectetur soluta fugiat tenetur quae aut! Quidem, alias esse laboriosam eaque unde, dolorum, ad iusto vero cumque voluptate veniam quasi nobis pariatur dolores!",
  },
  {
    id: 3,
    image: "./images/5.jpg",
    title: "Lorem, ipsum sit.",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, id. Rerum maiores quo nobis dolorum provident consectetur soluta fugiat tenetur quae aut! Quidem, alias esse laboriosam eaque unde, dolorum, ad iusto vero cumque voluptate veniam quasi nobis pariatur dolores!",
  },
];

let i = 0;

function slide(index) {
  var item = data.find((item) => item.id === index);
  sliderBox.style.backgroundImage = `url(${item.image})`;
  sliderTitle.innerHTML = `${item.title}`;
  sliderSubTitle.innerHTML = `${item.subtitle}`;
}
function nextSlide(a) {
  i++;
  if (i > data.length - 1) {
    i = 0;
  }
  slide(i);
}

function prewSlide(a) {
  slide(i);
  i--;
  if (i < 0) {
    i = data.length - 1;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 37) {
    e.keypress = "1";
    prewSlide();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 39) {
    e.keypress = "1";
    prewSlide();
  }
});
