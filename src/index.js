import "./normalize.css";
import "./style.css";
import AboutPage from "./about.js";
import MenuPage from "./menu.js";

const contentDiv = document.querySelector("#content");
const aboutNav = document.querySelector("#about");
const menuNav = document.querySelector("#menu");
const contactNav = document.querySelector("#contact");

function clearDisplay() {
  contentDiv.innerHTML = "";
};

function scrollOneDown() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  })
};

aboutNav.addEventListener("click", () => {
  clearDisplay();
  const aboutPage = new AboutPage();
  contentDiv.appendChild(aboutPage.HTMLElement);
  setTimeout(scrollOneDown, 100);
});

menuNav.addEventListener("click", () => {
  clearDisplay();
  const menuPage = new MenuPage();
  menuPage.display();
  setTimeout(scrollOneDown, 100);
});
