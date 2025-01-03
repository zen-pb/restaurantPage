import akihabaraLogo from "./akihabara-logo.svg";

export default function loadAbout() {
  const content = document.getElementById("content");

  function createElement(tag, className, text = "") {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (text) element.textContent = text;
    return element;
  }

  const aboutDiv = createElement("div", "about-div");

  const textDiv = createElement("div", "text-div");
  const description = `Akihabara Cafe is a Japanese-themed establishment that brings together the best of coffee, delicacies, and immersive cultural experiences. We've created a unique space where anime culture meets culinary excellence, offering an authentic slice of Japan right here in Indonesia.
Known for our exciting collaborations with popular anime series, we offer themed menus and exclusive merchandise that resonate with both fans and newcomers alike. Each visit promises a unique blend of Japanese cafe culture and contemporary entertainment.`;

  textDiv.append(
    createElement("p", "about-title", "Akihabara Cafe"),
    createElement(
      "h1",
      "about-tagline",
      "Your Gateway to Japanese Pop Culture"
    ),
    createElement("p", "about-desc", description)
  );

  const profileDiv = createElement("div", "profile-div");
  const profileImg = createElement("img", "profile-img");
  profileImg.src = akihabaraLogo;
  profileDiv.appendChild(profileImg);

  const contactDiv = createElement("div", "contact-div");
  contactDiv.appendChild(
    createElement("p", "contact-title", "Connect With Us")
  );

  function createSocialLink(text, href, linkText) {
    const div = createElement("div", text.toLowerCase().split(" ")[0] + "-div");
    const p = createElement("p", null, text);
    const link = createElement("a", null, linkText);
    link.href = href;
    link.target = "_blank";
    p.appendChild(link);
    div.appendChild(p);
    return div;
  }

  contactDiv.append(
    createSocialLink(
      "Follow us on instagram:\n",
      "https://www.instagram.com/akihabaracafe.id",
      "@akihabaracafe.id"
    ),
    createSocialLink(
      "Find more about us:\n",
      "https://linktr.ee/AkihabaraCafe",
      "Linktree"
    )
  );

  const locationDiv = createElement("div", "location-div");
  locationDiv.appendChild(
    createElement("p", "location-title", "Our Locations")
  );

  function createLocationCard(place, openingHours) {
    const div = createElement("div", "card-div");
    div.append(
      createElement("p", "location-title", place),
      createElement("p", "opening-text", "Opening Hours: " + openingHours)
    );
    return div;
  }

  const locations = [
    ["Mall of Indonesia", "10:00 - 22:00"],
    ["Boulevard Kelapa", "10:00 - 21:00"],
    ["QBIG BSD City", "09:00 - 21:00"],
    ["Ciputra World Surabaya", "10:00 - 21:00"],
  ];

  locationDiv.append(
    ...locations.map(([place, hours]) => createLocationCard(place, hours))
  );

  aboutDiv.append(textDiv, profileDiv, contactDiv, locationDiv);
  content.appendChild(aboutDiv);
}
