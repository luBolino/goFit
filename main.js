document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".nav").classList.toggle("active");
  });
});
