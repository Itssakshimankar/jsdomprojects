const navToggle = document.querySelector(".bars");
const links = document.querySelector("#links");
const barsIcon = document.querySelector(".fa-bars");

navToggle.addEventListener("click", () => {
    links.classList.toggle("active");
    barsIcon.classList.toggle("rotate");
});