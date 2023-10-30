const menuHTML = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger-menu");
const text = document.querySelector("#myText");

const text1 = document.querySelector("#myText1");
function animateText() {
  console.log("Animating text 1");
  const texts = ["an IT Engineer", "a Fullstack developer"];
  new Typed(text, {
    strings: texts,
    typeSpeed: 50, // The speed of typing in milliseconds
    backSpeed: 100, // The speed of deleting in milliseconds
    loop: true, // Whether to loop through the texts
    loopCount: Infinity, // The number of loops, Infinity for infinite loop
    showCursor: false,
  });
}
function animateText1() {
  const texts1 = [
    "Ingeniero en Tecnologías de la Información",
    "Fullstack developer",
  ];
  new Typed(text1, {
    strings: texts1,
    typeSpeed: 50, // The speed of typing in milliseconds
    backSpeed: 100, // The speed of deleting in milliseconds
    loop: true, // Whether to loop through the texts
    loopCount: Infinity, // The number of loops, Infinity for infinite loop
    showCursor: false,
  });
}
const sunIcon = document.querySelector(".bx-sun");
const moonIcon = document.querySelector(".bx-moon");
const root = document.documentElement;

sunIcon.addEventListener("click", function () {
  root.classList.toggle("dark-mode");

  sunIcon.style.visibility = "hidden";
  sunIcon.style.display = "none";
  moonIcon.style.visibility = "visible";
  moonIcon.style.display = "block";
});
moonIcon.addEventListener("click", function () {
  root.classList.toggle("dark-mode");
  moonIcon.style.visibility = "hidden";
  moonIcon.style.display = "none";
  sunIcon.style.visibility = "visible";
  sunIcon.style.display = "block";
});

function handleScroll() {
  const nav = document.querySelector("nav");
  const windowHeight = window.innerHeight;
  const halfWindowHeight = windowHeight / 2;
  const scrollY = window.scrollY;

  if (scrollY > halfWindowHeight) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menuHTML.classList.toggle("hidden");
});

window.addEventListener("scroll", handleScroll);

if (window.location.pathname.includes("index.html")) {
  animateText();
} else if (window.location.pathname.includes("indexes.html")) {
  animateText1();
}

window.addEventListener("click", (event) => {
  if (
    !menuHTML.contains(event.target) &&
    event.target !== hamburger &&
    !hamburger.contains(event.target)
  ) {
    menuHTML.classList.add("hidden");
    hamburger.classList.remove("open");
  }
});
