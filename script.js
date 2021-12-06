const navCheckbox = document.querySelector(".navigation__checkbox");
const navLinks = document.querySelectorAll(".navigation__link");
const navList = document.querySelector(".navigation__list");
const container = document.querySelector(".container");
const load = document.querySelector(".load");
const headerTextBox = document.querySelector(".header__text-box");

document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "interactive") {
    load.classList.add("hidden");
  } else if (state == "complete") {
    setTimeout(function () {
      load.classList.add("hidden");
      container.classList.remove("hidden");
      headerTextBox.classList.add("animate");
    }, 400);
  }
};

navList.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("navigation__link")) {
    navCheckbox.checked = false;
    const id = e.target.getAttribute("href");
    setTimeout(() => {
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  }
});
