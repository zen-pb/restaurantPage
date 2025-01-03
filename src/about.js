import {
  akihabaraLogo,
  instagramIcon,
  locationIcon,
  whatsappIcon,
} from "./icons";

const LOCATIONS = [
  ["Mall of Indonesia", "10:00 - 22:00"],
  ["Boulevard Kelapa Gading", "10:00 - 21:00"],
  ["QBIG BSD City", "09:00 - 21:00"],
  ["Ciputra World Surabaya", "10:00 - 21:00"],
];

const CONTACTS = [
  ["https://goo.gl/maps/SgDzurDGCQirFmZw6", "https://wa.me/6281807059203"],
  ["https://goo.gl/maps/DnerUn1ViUNUfoEP7", "https://wa.me/6281288451452"],
];

const CAFE_DESCRIPTION = `Akihabara Cafe is a Japanese-themed establishment that brings together the best of coffee, delicacies, and immersive cultural experiences. We've created a unique space where anime culture meets culinary excellence, offering an authentic slice of Japan right here in Indonesia.\n\nKnown for our exciting collaborations with popular anime series, we offer themed menus and exclusive merchandise that resonate with both fans and newcomers alike. Each visit promises a unique blend of Japanese cafe culture and contemporary entertainment.`;

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createTextSection() {
  const textDiv = createElement("div", "text-div");
  textDiv.append(
    createElement("p", "title", "Akihabara Cafe"),
    createElement(
      "h1",
      "about-tagline",
      "Your Gateway to Japanese Pop Culture"
    ),
    createElement("p", "about-desc", CAFE_DESCRIPTION)
  );
  return textDiv;
}

function createProfileSection() {
  const profileDiv = createElement("div", "profile-div");
  const profileImg = createElement("img", "profile-img");
  profileImg.src = akihabaraLogo;
  profileDiv.appendChild(profileImg);
  return profileDiv;
}

function createContactSection() {
  const contactDiv = createElement("div", "contact-div");
  const instaIcon = createElement("img", "insta-icon");
  instaIcon.src = instagramIcon;

  const instaLink = createElement("a");
  instaLink.href = "https://www.instagram.com/akihabaracafe.id";
  instaLink.target = "_blank";
  instaLink.append(instaIcon, "@akihabaracafe.id");

  contactDiv.appendChild(instaLink);
  return contactDiv;
}

function createLocationCard(place, openingHours, index) {
  const card = createElement("div", "card-item");

  const textDiv = createElement("div", "card-text");
  textDiv.append(
    createElement("p", "place-title", place),
    createElement("p", "opening-text", `Opening Hours: ${openingHours}`)
  );

  const iconDiv = createElement("div", "card-icon-div");

  // Only create links if contacts exist for this location
  if (CONTACTS[index]) {
    const [mapsUrl, whatsappUrl] = CONTACTS[index];

    // Create GPS link
    const gpsLink = createElement("a");
    gpsLink.href = mapsUrl;
    gpsLink.target = "_blank";
    const gpsIcon = createElement("img", "card-icon");
    gpsIcon.src = locationIcon;
    gpsLink.appendChild(gpsIcon);

    // Create WhatsApp link
    const whatsappLink = createElement("a");
    whatsappLink.href = whatsappUrl;
    whatsappLink.target = "_blank";
    const messageIcon = createElement("img", "card-icon");
    messageIcon.src = whatsappIcon;
    whatsappLink.appendChild(messageIcon);

    iconDiv.append(gpsLink, whatsappLink);
  } else {
    // Fallback for locations without contact info
    const gpsIcon = createElement("img", "card-icon");
    gpsIcon.src = locationIcon;
    const messageIcon = createElement("img", "card-icon");
    messageIcon.src = whatsappIcon;
    iconDiv.append(gpsIcon, messageIcon);
  }

  card.append(textDiv, iconDiv);
  return card;
}

function createLocationSection() {
  const locationDiv = createElement("div", "location-div");
  locationDiv.appendChild(createElement("p", "title", "Our Locations"));

  const cardDiv = createElement("div", "card-div");
  LOCATIONS.forEach(([place, hours], index) => {
    cardDiv.appendChild(createLocationCard(place, hours, index));
  });

  locationDiv.appendChild(cardDiv);
  return locationDiv;
}

function createMainContainer() {
  const aboutDiv = createElement("div", "about-div");
  aboutDiv.append(
    createTextSection(),
    createProfileSection(),
    createContactSection(),
    createLocationSection()
  );
  return aboutDiv;
}

export default function loadAbout() {
  const content = document.getElementById("content");
  content.appendChild(createMainContainer());
}
