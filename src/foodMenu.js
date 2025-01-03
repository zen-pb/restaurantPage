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
      id: "yuji-main",
    },
    {
      img: [megumiMainFood, megumiMainFoodName],
      id: "megumi-main",
    },
    {
      img: [nobaraMainFood, nobaraMainFoodName],
      id: "nobara-main",
    },
    {
      img: [makiMainFood, makiMainFoodName],
      id: "maki-main",
    },
    {
      img: [inumakiMainFood, inumakiMainFoodName],
      id: "toge-main",
    },
  ],
  drinks: [
    {
      img: [gojoDrink, gojoDrinkName],
      id: "gojo-drink",
    },
    {
      img: [sukunaDrink, sukunaDrinkName],
      id: "sukuna-drink",
    },
    {
      img: [mahitoDrink, mahitoDrinkName],
      id: "mahito-drink",
    },
    {
      img: [nanamiDrink, nanamiDrinkName],
      id: "nanami-drink",
    },
    {
      img: [getoDrink, getoDrinkName],
      id: "geto-drink",
    },
  ],
  desserts: [
    {
      img: [sukunaDessert, sukunaDessertName],
      id: "sukuna-dessert",
    },
    {
      img: [pandaDessert, pandaDessertName],
      id: "panda-dessert",
    },
  ],
};

export { menuFoodNames, menuItems };
