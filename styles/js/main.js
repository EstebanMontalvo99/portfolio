const menuHTML = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger-menu");
function animateText() {
  const texts = ["an IT Engineer", "a Front end developer"];
  new Typed(text, {
    strings: texts,
    typeSpeed: 50, // The speed of typing in milliseconds
    backSpeed: 100, // The speed of deleting in milliseconds
    loop: true, // Whether to loop through the texts
    loopCount: Infinity, // The number of loops, Infinity for infinite loop
    showCursor: false,
  });
}

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
const text = document.querySelector("#myText");
animateText();
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
