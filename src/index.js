import "./utils.css";
import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const content = document.getElementById("content");

document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.id;
    content.innerHTML = "";

    if (id === "home") loadHome();
    if (id === "menu") loadMenu();
    if (id === "about") loadAbout();
  }
});

loadHome();
