import heroImg from "./hero.svg";

export default function loadHome() {
  const content = document.getElementById("content");

  const divElement = document.createElement("div");
  const imgElement = document.createElement("img");
  const h1Element = document.createElement("h1");
  const buttonElement = document.createElement("button");

  divElement.classList.add("hero");

  buttonElement.id = "menu";

  imgElement.src = heroImg;
  h1Element.textContent = "Jujutsu Kaisen x Akihabara Cafe Collaboration";
  buttonElement.textContent = "Explore Cursed Delicacies";

  divElement.appendChild(imgElement);
  divElement.appendChild(h1Element);
  divElement.appendChild(buttonElement);

  content.appendChild(divElement);
}
