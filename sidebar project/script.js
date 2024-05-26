const toggle_bar = document.querySelector(".nav-header");
const sidebar = document.querySelector(".sidebar");

toggle_bar.addEventListener("click", () => {
    const icon = toggle_bar.firstElementChild;
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    sidebar.classList.toggle("sidebaractive");
});
