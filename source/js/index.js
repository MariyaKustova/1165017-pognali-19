var body = document.querySelector("body");
var header = document.querySelector(".page-header");
var buttonMenu = document.querySelector(".page-header__button");
var buttonPopup = document.querySelector(".profile__button");
var popup = document.querySelector(".popup");
var closePopup = document.querySelector(".popup__button");
var input = document.querySelector(".authorization__input");
var autorizationForm = document.querySelector(".authorization__form");

body.classList.remove("nojs");

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

autorizationForm.addEventListener("submit", function (evt) {
  console.log(input.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$/g));
  if (!input.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$/)) {
    evt.preventDefault();
    input.classList.add("authorization__input--error");
  } else {
    input.classList.remove("authorization__input--error");
  }
});
