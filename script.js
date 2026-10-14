// /js/index.js (or /JS/index.js)

document.addEventListener("DOMContentLoaded", () => {
  // No JS fallback
  document.documentElement.classList.add("js");
  document.documentElement.classList.remove("no-js");

  // Toggle hamburger menu when responsive
  {
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
  }

  // Open sub menu
  {
    const menuButton = document.querySelector(".js--menu-button");
    //Starting from the button, .closest(".caret") travels upward through its parent elements until it finds the nearest element with the .caret class.
    const caretMenu = menuButton.closest(".caret");

    menuButton.addEventListener("click", () => {
      // toggle .is-open class (set to visible in css)
      const isOpen = caretMenu.classList.toggle("is-open");
      //Updates the button’s accessibility state
      menuButton.setAttribute("aria-expanded", isOpen);
    });
  }

  // Date
  {
    var date = new Date().getFullYear();

    document.getElementById("js--year").innerHTML = date;
  }

  // Back to top

  const backToTop = document.getElementById("top-button");
  if (!backToTop) return;

  const toggleBackToTop = () => {
    const shouldShow = window.scrollY > window.innerHeight;
    backToTop.hidden = !shouldShow;
    backToTop.setAttribute("aria-hidden", shouldShow ? "false" : "true");
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTop.addEventListener("click", (e) => {
    e.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });

  // end of DOM load
});
