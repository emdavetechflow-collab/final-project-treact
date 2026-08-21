function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

// Close menu when clicking any link or button inside menu
const menuLinks = document.querySelectorAll(
  ".menu__links a, .menu__links button",
);

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
