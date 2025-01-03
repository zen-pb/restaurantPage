import heroImg from "./hero.svg";

export default function loadHome() {
  const content = document.getElementById("content");

  const divElement = document.createElement("div");
  const imgElement = document.createElement("img");
  const h1Element = document.createElement("h1");
  const btnDiv = document.createElement("div");
  const buttonElement = document.createElement("button");
  const aboutBTN = document.createElement("button");

  divElement.classList.add("hero");
  btnDiv.classList.add("btn-div");
  aboutBTN.classList.add("about-us");

  buttonElement.id = "menu";
  aboutBTN.id = "about";

  imgElement.src = heroImg;
  h1Element.textContent = "Jujutsu Kaisen x Akihabara Cafe Collaboration";
  buttonElement.textContent = "Explore Cursed Delicacies";
  aboutBTN.textContent = "About the Cafe";

  divElement.appendChild(imgElement);
  divElement.appendChild(h1Element);

  btnDiv.appendChild(buttonElement);
  btnDiv.appendChild(aboutBTN);

  divElement.appendChild(btnDiv);

  content.appendChild(divElement);
}
