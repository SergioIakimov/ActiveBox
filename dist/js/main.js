const menuBtn = document.querySelector(".header__btn");
const hamburger = document.querySelector(".header__btn__burger");
const nav = document.querySelector(".header__nav");
const menuNav = document.querySelector(".header__nav__menu");
const navItems = document.querySelectorAll(".header__nav__menu__items");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
