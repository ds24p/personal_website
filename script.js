
//obsluga menu mobilnego
var hamburgerButton = document.querySelector(".openMenu");
var closeButton = document.querySelector(".closeMenu");
var mobileMenu = document.querySelector(".mobileMenu");
var overlay = document.querySelector(".overlay");

hamburgerButton.addEventListener("click", function () {
  mobileMenu.classList.add("activeMobileMenu");
  overlay.classList.add("activeOverlay");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("activeMobileMenu");
  overlay.classList.remove("activeOverlay");
});