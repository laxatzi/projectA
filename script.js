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
  const menuButton = document.querySelector(".menu-button");
  const caretMenu = menuButton.closest(".caret");

  menuButton.addEventListener("click", () => {
    const isOpen = caretMenu.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", isOpen);
  });
}
