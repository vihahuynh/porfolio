const navCheckbox = document.querySelector(".navigation__checkbox");
const navLinks = document.querySelectorAll(".navigation__link");
const navList = document.querySelector(".navigation__list");
const container = document.querySelector(".container");
const load = document.querySelector(".load");
const headerTextBox = document.querySelector(".header__text-box");
const showMoreBtn = document.querySelector(".works__btn--more");
const showLessBtn = document.querySelector(".works__btn--less");
const projects = document.querySelectorAll(".works__box");

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

const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  // observer.unobserve(entry.target);
};

const sectionsObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

document.querySelectorAll(".section__container").forEach((section) => {
  section.classList.add("section--hidden");
  sectionsObserver.observe(section);
});

// project
let showedProjects = 3;

const toggleProjects = () => {
  projects.forEach((project, index) => {
    if (index >= showedProjects && index < showedProjects + 3) {
      project.classList.toggle("hidden");
    }
  });
};

const checkDisableBtn = () => {
  if (showedProjects === 3) {
    showLessBtn.classList.add("btn--disabled");
  } else if (showedProjects === 9) {
    showMoreBtn.classList.add("btn--disabled");
  } else {
    showMoreBtn.classList.remove("btn--disabled");
    showLessBtn.classList.remove("btn--disabled");
  }
};

showMoreBtn.addEventListener("click", (e) => {
  toggleProjects();
  showedProjects += 3;
  checkDisableBtn();
});

showLessBtn.addEventListener("click", (e) => {
  showedProjects -= 3;
  if (showedProjects > 0) {
    toggleProjects();
  }
  checkDisableBtn();
});

// Send Email
const sendEmail = () => {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  Email.send({
    SecureToken: "44cc85c7-d5d9-413c-82f1-2656d0bea78e",
    To: "huynhviha1703@gmail.com",
    From: "huynhviha1703@gmail.com",
    Subject: subject,
    Body: `My name is ${username}, ${email}, ${message}`,
  }).then((message) => {
    alert(message);
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  });
};
