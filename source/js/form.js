var body = document.querySelector("body");
var header = document.querySelector(".page-header");
var buttonMenu = document.querySelector(".page-header__button");
var buttonChoice = document.querySelector(".country-selection__button-choice");
var buttonChoiceClose = document.querySelector(
  ".country-selection__button-choice--close"
);
var countrySelectionPopup = document.querySelector(
  ".country-selection__wrapper-popup"
);
var countryLabel = document.querySelectorAll(".country__label");
var textareaFirst = document.getElementById("plan-first");
var textareaSecond = document.getElementById("plan-second");
var form = document.querySelector(".page-main__form");
var companions = document.getElementById("companions");
var duration = document.getElementById("duration");

var isStorageSupport = true;
var storageCompanions = "";
var storageDuration = "";

try {
  storageCompanions = localStorage.getItem("companions");
  companions.value = storageCompanions;
  storageDuration = localStorage.getItem("duration");
  duration.value = storageDuration;
} catch (err) {
  isStorageSupport = false;
}

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

buttonChoice.addEventListener("click", function () {
  countrySelectionPopup.classList.add(
    "country-selection__wrapper-popup--opend"
  );
});

buttonChoiceClose.addEventListener("click", function () {
  countrySelectionPopup.classList.remove(
    "country-selection__wrapper-popup--opend"
  );
});

countryLabel.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    var selected = document.querySelector(".country__selected");
    if (selected !== null) {
      selected.classList.remove("country__selected");
    }
    item.classList.add("country__selected");
  });
});

form.addEventListener("submit", function (evt) {
  if (!textareaFirst.value) {
    evt.preventDefault();
    textareaFirst.classList.add("entertainment__textarea--error");
  } else {
    textareaFirst.classList.remove("entertainment__textarea--error");
  }

  if (!textareaSecond.value) {
    evt.preventDefault();
    textareaSecond.classList.add("entertainment__textarea--error");
  } else {
    textareaSecond.classList.remove("entertainment__textarea--error");
  }

  if (textareaFirst.value && textareaSecond.value) {
    if (isStorageSupport) {
      localStorage.setItem("companions", Companions.value);
      localStorage.setItem("duration", Duration.value);
    }
  }
});
