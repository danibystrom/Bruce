export interface Drink {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  image: string;
  price: number;
  isBestSeller?: boolean;
}

export const drinks: Drink[] = [
  {
    id: 1,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/drink.jpeg",
    price: 3.5,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/drink.jpeg",
    price: 3.5,
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/drink.jpeg",
    price: 3.5,
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/drink.jpeg",
    price: 3.5,
    isBestSeller: true,
  },
  {
    id: 5,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/drink.jpeg",
    price: 3.5,
    isBestSeller: true,
  },
];
