import "./utils.css";
import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const routes = {
  home: loadHome,
  menu: loadMenu,
  about: loadAbout
};

const content = document.getElementById("content");

document.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  
  const route = routes[e.target.id];
  if (route) {
    content.innerHTML = "";
    route();
  }
});

loadHome();