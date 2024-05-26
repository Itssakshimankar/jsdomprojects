const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const navbar = document.getElementById("nav");

navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
});

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
