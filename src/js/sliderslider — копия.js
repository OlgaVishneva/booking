const sliderImages = document.querySelectorAll(".slider-item");
const sliderLine = document.querySelector(".pictures");
const sliderDots = document.querySelectorAll(".dot");

const slider = document.getElementById("slider");
  const images = slider.getElementsByTagName("img");
  const dotsContainer = document.querySelector(".dots-container");
  const dots = dotsContainer.getElementsByClassName("dot");

  let currentSlideIndex = 0;
  let slideInterval;

  function showSlide(index) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("active");
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    images[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlideIndex = index;
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % images.length;
    showSlide(currentSlideIndex);
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      showSlide(i);
    });
  }

  // Запускаем интервал для автоматической прокрутки слайдов каждые 5 секунд
  slideInterval = setInterval(nextSlide, 5000);

  // Активируем первый слайд и первую точку
  showSlide(0);