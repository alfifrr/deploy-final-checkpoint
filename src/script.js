const hamburgerButton = document.getElementById("hamburger-btn");
const dropdown = document.getElementById("dropdown");
const navBar = document.getElementById("stickyNavbar");
const svgLines = hamburgerButton.querySelector("svg:nth-child(1)");
const svgCross = hamburgerButton.querySelector("svg:nth-child(2)");

const darkModeToggle = document.getElementById("darkMode");

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("darkMode");
  darkModeToggle.checked = true;
}

hamburgerButton.addEventListener("click", function () {
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "flex";
    svgLines.style.display = "none";
    svgCross.style.display = "block";
  } else {
    dropdown.style.display = "none";
    svgLines.style.display = "block";
    svgCross.style.display = "none";
  }
});

window.addEventListener("resize", function () {
  dropdown.style.display = "none";
  svgLines.style.display = "block";
  svgCross.style.display = "none";
});

darkModeToggle.addEventListener("change", function () {
  document.body.classList.toggle("darkMode");

  if (
    localStorage.getItem("darkMode") === null ||
    localStorage.getItem("darkMode") === "false"
  ) {
    localStorage.setItem("darkMode", "true");
  } else {
    localStorage.setItem("darkMode", "false");
  }
});

let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
};
