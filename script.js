const hamburger = document.getElementById("js--toggle-icon");
const navLinks = document.getElementById("js--nav-list");

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";

  navLinks.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", String(!isOpen));
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu",
  );
});
