const getHeaderMenu = document.querySelector(".header-menu");
const getMobileMenu = document.querySelector(".mobile-menu");
const getMobileMenuClose = document.querySelector(".mobile-menu__close");
const getSubMenuLink = document.querySelector(".sub-menu__link");
const getSubMenu = document.querySelector(".submenu");
const getCover = document.querySelector(".cover");

getHeaderMenu.addEventListener("click", () => {
  getCover.classList.add("cover--show");
  getMobileMenu.classList.add("mobile-menu--open");
});

getMobileMenuClose.addEventListener("click", () => {
  getCover.classList.remove("cover--show");
  getMobileMenu.classList.remove("mobile-menu--open");
});

getSubMenuLink.addEventListener("click", (e) => {
  e.preventDefault();
  getSubMenu.classList.toggle("submenu--open");
});
