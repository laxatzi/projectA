// No JS fallback
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");
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
