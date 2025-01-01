import "./utils.css";
import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const content = document.getElementById("content");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.id;
    content.innerHTML = "";

    if (id === "home") loadHome();
    if (id === "menu") loadMenu();
    if (id === "about") loadAbout();
  });
});

loadHome();
