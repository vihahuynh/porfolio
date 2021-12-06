const navCheckbox = document.querySelector(".navigation__checkbox");
const navLinks = document.querySelectorAll(".navigation__link");
const navList = document.querySelector(".navigation__list");

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
