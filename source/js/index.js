var header = document.querySelector(".page-header");
var buttonMenu = document.querySelector(".page-header__button");
var buttonPopup = document.querySelector(".profile__button");
var popup = document.querySelector(".popup");
var closePopup = document.querySelector(".popup__button");

header.classList.remove("page-header--nojs");

header.classList.remove("page-header--opened");

header.classList.add("page-header--closed");

buttonMenu.addEventListener("click", function () {
  if (header.classList.contains("page-header--opened")) {
    header.classList.remove("page-header--opened");
    header.classList.add("page-header--closed");
  } else {
    header.classList.add("page-header--opened");
    header.classList.remove("page-header--closed");
  }
});

buttonPopup.addEventListener("click", function () {
  popup.classList.add("popup-open");
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("popup-open");
});
