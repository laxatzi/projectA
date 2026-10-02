const hamburger = document.getElementById("js--toggle-icon");
const navLinks = document.getElementById("js--nav-list");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
