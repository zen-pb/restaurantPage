import yujiMainFood from "./yuji-food.svg";
import yujiMainFoodName from "./yuji-food-name.svg";
import megumiMainFood from "./megumi-food.svg";
import megumiMainFoodName from "./megumi-food-name.svg";
import nobaraMainFood from "./nobara-food.svg";
import nobaraMainFoodName from "./nobara-food-name.svg";
import makiMainFood from "./maki-food.svg";
import makiMainFoodName from "./maki-food-name.svg";
import inumakiMainFood from "./inumaki-food.svg";
import inumakiMainFoodName from "./inumaki-food-name.svg";

import gojoDrink from "./gojo-drink.svg";
import gojoDrinkName from "./gojo-drink-name.svg";
import sukunaDrink from "./sukuna-drink.svg";
import sukunaDrinkName from "./sukuna-drink-name.svg";
import mahitoDrink from "./mahito-drink.svg";
import mahitoDrinkName from "./mahito-drink-name.svg";
import nanamiDrink from "./nanami-drink.svg";
import nanamiDrinkName from "./nanami-drink-name.svg";
import getoDrink from "./geto-drink.svg";
import getoDrinkName from "./geto-drink-name.svg";

import sukunaDessert from "./sukuna-dessert.svg";
import sukunaDessertName from "./sukuna-dessert-name.svg";
import pandaDessert from "./panda-dessert.svg";
import pandaDessertName from "./panda-dessert-name.svg";

// Menu food names
const menuFoodNames = {
  MAIN: [
    "YUJI ITADORI\nKATSU CURRY",
    "MEGUMI FUSHIGURO\nKANGO AN'EITEI BURGER",
    "NOBARA KUGISAKI\nAGLIO OLIO",
    "MAKI ZEN'IN\nAYAM PENYET SAMBAL IJO",
    "TOGE INUMAKI\nONIGIRI SET",
  ],
  DRINKS: [
    "SATORU GOJO\nKYOSHIKI 'MURASAKI'",
    "RYOMEN SUKUNA\nBERRY BOOZE",
    "MAHITO\nBLUE OCEAN",
    "NANAMI KENTO\nBLACK SHAKE",
    "SUGURU GETO\n'UZUMAKI'",
  ],
  DESSERTS: ["RYOMEN SUKUNA\nFINGER PARFAIT", "PANDA TOAST"],
};

// Menu items
const menuItems = {
  main: [
    {
      img: [yujiMainFood, yujiMainFoodName],
      desc: "Special chicken katsu curry rice with potato, carrot and extra cocktail sausages shaped like Sukuna's fingers.",
      price: "75",
      currency: "K",
      id: "yuji-main",
    },
    {
      img: [megumiMainFood, megumiMainFoodName],
      desc: "Black burger bun filled with beef, egg, lettuce, tomato, pickles and Akihabara special sauce. Served with french fries.",
      price: "85",
      currency: "K",
      id: "megumi-main",
    },
    {
      img: [nobaraMainFood, nobaraMainFoodName],
      desc: "Aglio Olio spaghetti with smoked beef, Shimeji mushroom and paprika.",
      price: "65",
      currency: "K",
      id: "nobara-main",
    },
    {
      img: [makiMainFood, makiMainFoodName],
      desc: "Authentic Indonesian style ayam penyet sambal ijo with rice, fried eggplant and purple cabbage.",
      price: "75",
      currency: "K",
      id: "maki-main",
    },
    {
      img: [inumakiMainFood, inumakiMainFoodName],
      desc: "Onigiri set consist of tuna, chicken teriyaki and salmon.",
      price: "65",
      currency: "K",
      id: "toge-main",
    },
  ],
  drinks: [
    {
      img: [gojoDrink, gojoDrinkName],
      price: "50",
      currency: "K",
      id: "satoru-drink",
    },
    {
      img: [sukunaDrink, sukunaDrinkName],
      price: "50",
      currency: "K",
      id: "ryomen-drink",
    },
    {
      img: [mahitoDrink, mahitoDrinkName],
      price: "50",
      currency: "K",
      id: "mahito-drink",
    },
    {
      img: [nanamiDrink, nanamiDrinkName],
      price: "60",
      currency: "K",
      id: "nanami-drink",
    },
    {
      img: [getoDrink, getoDrinkName],
      price: "60",
      currency: "K",
      id: "suguru-drink",
    },
  ],
  desserts: [
    {
      img: [sukunaDessert, sukunaDessertName],
      desc: "Dessert parfait of strawberry ice cream served with strawberryjam, whipped cream & Sukuna Finger Cookie.",
      price: "70",
      currency: "K",
      id: "ryomen-dessert",
    },
    {
      img: [pandaDessert, pandaDessertName],
      desc: "Dessert plate of homemade toast with topping of vanilla ice cream.",
      price: "55",
      currency: "K",
      id: "panda-dessert",
    },
  ],
};

export { menuFoodNames, menuItems };
