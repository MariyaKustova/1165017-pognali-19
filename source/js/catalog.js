var body = document.querySelector("body");
var header = document.querySelector(".page-header");
var buttonMenu = document.querySelector(".page-header__button");
var buttonFilter = document.querySelector(".filter__button");
var filter = document.querySelector(".filter");
var closeFilter = document.querySelector(".filter__popup-button");
var choiceButton = document.querySelectorAll(".choice__button");

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

filter.classList.remove("filter--nojs");

filter.classList.remove("filter--opened");

filter.classList.add("filter--closed");

buttonFilter.addEventListener("click", function () {
  if (filter.classList.contains("filter--opened")) {
    filter.classList.remove("filter--opened");
    filter.classList.add("filter--closed");
  } else {
    filter.classList.add("filter--opened");
    filter.classList.remove("filter--closed");
  }
});


closeFilter.addEventListener("click", function () {
    filter.classList.remove("filter--opened");
    filter.classList.add("filter--closed");
  });


  choiceButton.forEach(function(item)  {
    item.addEventListener("click", function (evt) {
      evt.preventDefault();
      var choiceContainer = item.parentNode.parentNode;
      if(choiceContainer.classList.contains("choice__container--closed")) {
        choiceContainer.classList.remove("choice__container--closed")
      }else{
        choiceContainer.classList.add("choice__container--closed")
      }
    });
  });
