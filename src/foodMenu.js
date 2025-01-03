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

const menuItems = {
  main: [
    {
      food: "./yuji-food.svg",
      name: "./yuji-food-name.svg",
      id: "yuji",
    },
    {
      food: "./megumi-food.svg",
      name: "./megumi-food-name.svg",
      id: "megumi",
    },
    {
      food: "./nobara-food.svg",
      name: "./nobara-food-name.svg",
      id: "nobara",
    },
    {
      food: "./maki-food.svg",
      name: "./maki-food-name.svg",
      id: "maki",
    },
    {
      food: "./inumaki-food.svg",
      name: "./inumaki-food-name.svg",
      id: "inumaki",
    },
  ],
  drinks: [
    {
      food: "./gojo-drink.svg",
      name: "./gojo-drink-name.svg",
      id: "gojo",
    },
    {
      food: "./sukuna-drink.svg",
      name: "./sukuna-drink-name.svg",
      id: "sukuna",
    },
    {
      food: "./mahito-drink.svg",
      name: "./mahito-drink-name.svg",
      id: "mahito",
    },
    {
      food: "./nanami-drink.svg",
      name: "./nanami-drink-name.svg",
      id: "nanami",
    },
    {
      food: "./geto-drink.svg",
      name: "./geto-drink-name.svg",
      id: "geto",
    },
  ],
  desserts: [
    {
      food: "./sukuna-dessert.svg",
      name: "./sukuna-dessert-name.svg",
      id: "sukuna",
    },
    {
      food: "./panda-dessert.svg",
      name: "./panda-dessert-name.svg",
      id: "panda",
    },
  ],
};

export { menuFoodNames, menuItems };
