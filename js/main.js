let video = document.querySelector(".media-intro-video");
let interval = 5100;
let body = document.querySelector("body");
let optionOne = document.getElementById("option-one");
let optionTwo = document.getElementById("option-two");
let optionThree = document.getElementById("option-three");
let optionFour = document.getElementById("option-four");
let bodyElement = document.getElementById("main-body");
let img1 = document.querySelector(".phone-img");
let img2 = document.querySelector(".camera-img");
let img3 = document.querySelector(".chip-img");
let img4 = document.querySelector(".always-img");
let img5 = document.querySelector(".ceramic-img");
let img6 = document.querySelector(".selfie-img");
let img7 = document.querySelector(".water-img");
let img8 = document.querySelector(".crash-img");
let img9 = document.querySelector(".sizes-img");
const sections = document.querySelectorAll(".section");

function mudalVideo() {
  video.style.display = "none";
}

setInterval(function () {
  mudalVideo();
}, interval);

// features section

optionOne.onclick = function () {
  body.classList.add("slide1");
  body.classList.remove("slide2");
  body.classList.remove("slide3");
  body.classList.remove("slide4");
  img1.src = "./assets/images/island.jpg";
  img2.src = "./assets/images/camera-section.jpg";
  img3.src = "./assets/images/deep-purple/purple-chip.jpg";
  img4.src = "./assets/images/deep-purple/always1.jpg";
  img5.src = "./assets/images/deep-purple/ceramic.jpg";
  img6.src = "./assets/images/deep-purple/selfie.jpg";
  img7.src = "./assets/images/deep-purple/water.png";
  img8.src = "./assets/images/crash-detection.png";
  img9.src = "/assets/images/sizes-section.png";
};

optionTwo.onclick = function () {
  body.classList.add("slide2");
  body.classList.remove("slide1");
  body.classList.remove("slide3");
  body.classList.remove("slide4");
  img1.src = "./assets/images/island-gold.jpg";
  img2.src = "./assets/images/gold/camera-section.jpg";
  img3.src = "./assets/images/gold/gold-chip.jpg";
  img4.src = "./assets/images/gold/always2.jpg";
  img5.src = "./assets/images/gold/ceramic.jpg";
  img6.src = "./assets/images/gold/selfie.jpg";
  img7.src = "./assets/images/gold/water.png";
  img8.src = "./assets/images/gold/crash-detection.png";
  img9.src = "/assets/images/gold/sizes-section.png";
};

optionThree.onclick = function () {
  body.classList.add("slide3");
  body.classList.remove("slide1");
  body.classList.remove("slide2");
  body.classList.remove("slide4");
  img1.src = "./assets/images/island-silver.jpg";
  img2.src = "./assets/images/silver/camera-section.jpg";
  img3.src = "./assets/images/silver/silver-chip.jpg";
  img4.src = "./assets/images/silver/always3.jpg";
  img5.src = "./assets/images/silver/ceramic.jpg";
  img6.src = "./assets/images/silver/selfie.jpg";
  img7.src = "./assets/images/silver/water.png";
  img8.src = "./assets/images/silver/crash-detection.png";
  img9.src = "/assets/images/silver/sizes-section.png";
};

optionFour.onclick = function () {
  body.classList.add("slide4");
  body.classList.remove("slide1");
  body.classList.remove("slide2");
  body.classList.remove("slide3");
  img1.src = "./assets/images/island-space-black.jpg";
  img2.src = "./assets/images/space-black/camera-section.jpg";
  img3.src = "./assets/images/space-black/black-chip.jpg";
  img4.src = "./assets/images/space-black/always4.jpg";
  img5.src = "./assets/images/space-black/ceramic.jpg";
  img6.src = "./assets/images/space-black/selfie.jpg";
  img7.src = "./assets/images/space-black/water.png";
  img8.src = "./assets/images/space-black/crash-detection.png";
  img9.src = "/assets/images/space-black/sizes-section.png";
};

// for sticky navbars
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
      bodyElement.classList.add("sticky");
    } else {
      bodyElement.classList.remove("sticky");
    }

    if (window.scrollY > 110) {
      bodyElement.classList.add("sticky2");
    } else {
      bodyElement.classList.remove("sticky2");
    }

    if (window.scrollY > 4100) {
      bodyElement.classList.add("sticky3");
    } else {
      bodyElement.classList.remove("sticky3");
    }
  });
});

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";
const animationClass2 = "animate2";

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
function animeScroll2() {
  const windowTop = window.pageYOffset + 100; //((window.innerHeight * 3) / 4)
  target.forEach(function (element) {
    if (windowTop <= element.offsetTop) {
      element.classList.add(animationClass2);
    } else {
      element.classList.remove(animationClass2);
    }
  });
}

function animeScroll() {
  const windowTop = window.pageYOffset + 500; //((window.innerHeight * 3) / 4)
  target.forEach(function (element) {
    if (windowTop >= element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();
animeScroll2();

if (target.length) {
  window.addEventListener("scroll", function () {
    animeScroll();
    animeScroll2();
  });
}

const minOpacity = 0.3;

// reduce opacity function/animation when gets close to screen end

function updateOpacity() {
  const threshold = 0.7;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const topDistance = rect.top;
    const bottomDistance = window.innerHeight - rect.bottom;

    const sectionHeight = rect.height;
    const triggerDistance = window.innerHeight * threshold;

    let opacity = 1;

    if (topDistance > triggerDistance || bottomDistance > triggerDistance) {
      const distanceToTrigger =
        Math.min(topDistance, bottomDistance) - triggerDistance;
      opacity =
        1 - Math.abs(distanceToTrigger) / (sectionHeight * (1 - threshold));
    }

    opacity = Math.max(opacity, minOpacity);
    section.style.opacity = opacity.toFixed(2);
  });
}

window.addEventListener("load", updateOpacity);
window.addEventListener("resize", updateOpacity);

window.addEventListener("scroll", updateOpacity);
