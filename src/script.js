const hamburgerButton = document.getElementById("hamburger-btn");
const nav = document.getElementById("dropdown");
const svgLines = hamburgerButton.querySelector("svg:nth-child(1)");
const svgCross = hamburgerButton.querySelector("svg:nth-child(2)");

hamburgerButton.addEventListener("click", function () {
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "flex";
    svgLines.style.display = "none";
    svgCross.style.display = "block";
  } else {
    nav.style.display = "none";
    svgLines.style.display = "block";
    svgCross.style.display = "none";
  }
});

window.addEventListener("resize", function () {
  nav.style.display = "none";
  svgLines.style.display = "block";
  svgCross.style.display = "none";
});
