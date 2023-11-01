// Image slider

const sliderImages = document.querySelector(".slider-images");
const textSlider = document.querySelector(".text-slider")
const prevButton = document.querySelector(".btn-left");
const nextButton = document.querySelector(".btn-right");

let imageIndex = 0;

function slideTo(index) {
  sliderImages.style.transform = `translateX(-${index * 100}%)`;
  textSlider.style.transform = `translateX(-${index * 100}%)`;
  imageIndex = index;
}

prevButton.addEventListener("click", () => {
  if (imageIndex > 0) {
    slideTo(imageIndex - 1);
  } else {
    slideTo(sliderImages.children.length - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (imageIndex < sliderImages.children.length - 1) {
    slideTo(imageIndex + 1);
  } else {
    slideTo(0);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft" || event.code === "KeyA") {
    if (imageIndex > 0) {
      slideTo(imageIndex - 1);
    } else {
      slideTo(sliderImages.children.length - 1);
    }
  } else if (event.code === "ArrowRight" || event.code === "KeyD") {
    if (imageIndex < sliderImages.children.length - 1) {
      slideTo(imageIndex + 1);
    } else {
      slideTo(0);
    }
  }
});

// Header while scrolling

const header = document.querySelector(".header");
const backgroundTrigger = 50;
let isBackgroundAdded = false;

window.addEventListener("scroll", () => {
  const shouldAddBackground = window.scrollY >= backgroundTrigger;

  if (shouldAddBackground && !isBackgroundAdded) {
    header.classList.add("header-background");
    isBackgroundAdded = true;
  } else if (!shouldAddBackground && isBackgroundAdded) {
    header.classList.add("header-background-removed");
    setTimeout(() => {
      header.classList.remove("header-background");
      header.classList.remove("header-background-removed");
      isBackgroundAdded = false;
    }, 200); // wait for 0.5 seconds before removing classes
  }
});

// Current year

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;