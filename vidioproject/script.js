const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});


const preloader = document.querySelector(".preloader");


function hidePreloader() {
  setTimeout(function() {
    preloader.classList.add("hide-preloader");
  }, 1000); 
}


window.addEventListener("load", hidePreloader);