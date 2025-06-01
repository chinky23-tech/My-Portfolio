// hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navlinks");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
