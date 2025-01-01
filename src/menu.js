export default function loadMenu() {
  const content = document.getElementById("content");
  
  const menuSections = ['MAIN', 'DRINKS', 'DESSERTS'];
  
  const elements = {
    carouselDiv: document.createElement("div"),
    leftButton: document.createElement("button"),
    trackContainer: document.createElement("div"),
    carouselList: document.createElement("ul"),
    rightButton: document.createElement("button")
  };
  
  menuSections.forEach(sectionTitle => {
    const li = document.createElement("li");
    const fieldset = createFieldset(sectionTitle);
    li.appendChild(fieldset);
    elements.carouselList.appendChild(li);
  });

  elements.trackContainer.appendChild(elements.carouselList);
  elements.carouselDiv.append(
    elements.leftButton,
    elements.trackContainer,
    elements.rightButton
  );
  
  content.appendChild(elements.carouselDiv);
}

function createFieldset(title) {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = title;
  fieldset.appendChild(legend);
  return fieldset;
}