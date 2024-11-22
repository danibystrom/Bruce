export interface Product {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  image: string;
  price: number;
  isBestSeller?: boolean;
  slug: string;
  category?: string;
}

export const product: Product[] = [
  {
    id: 1,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-1",
    category: "cocktail",
  },
  {
    id: 2,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-2",
    category: "cocktail",
  },
  {
    id: 3,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-3",
    category: "cocktail",
  },
  {
    id: 4,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-4",
    category: "cocktail",
  },
  {
    id: 5,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-5",
    category: "cocktail",
  },
  {
    id: 6,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-6",
    category: "cocktail",
  },
  {
    id: 7,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-7",
    category: "cocktail",
  },
  {
    id: 8,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-8",
    category: "cocktail",
  },
  {
    id: 9,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-9",
    category: "cocktail",
  },
  {
    id: 10,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-10",
    category: "cocktail",
  },
  {
    id: 11,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-11",
    category: "cocktail",
  },
  {
    id: 12,
    name: "Margarita",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/bruce-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-12",
    category: "cocktail",
  },
  {
    id: 13,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-refill-1",
    category: "refill",
  },
  {
    id: 14,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-refill-2",
    category: "refill",
  },
  {
    id: 15,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-refill-3",
    category: "refill",
  },
  {
    id: 16,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-refill-4",
    category: "refill",
  },
  {
    id: 17,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-refill-5",
    category: "refill",
  },
  {
    id: 18,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-refill-6",
    category: "refill",
  },
  {
    id: 19,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-refill-7",
    category: "refill",
  },
  {
    id: 20,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-refill-8",
    category: "refill",
  },
  {
    id: 21,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-refill-9",
    category: "refill",
  },
  {
    id: 22,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-refill-10",
    category: "refill",
  },
  {
    id: 23,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: true,
    slug: "margarita-refill-11",
    category: "refill",
  },
  {
    id: 24,
    name: "Margarita Refill",
    description:
      "A timeless classic with a twist. This vibrant cocktail blends the zesty freshness of lime, the smooth richness of tequila, and a touch of orange liqueur, all balanced by a salted rim. Perfectly refreshing, effortlessly chic, and always a crowd-pleaser. The Margarita Refill is your go-to for sun-kissed moments and unforgettable nights.",
    ingredients: ["Tequila", "Fresh Lime Juice", "Agave Syrup", "Salt"],
    image: "/refill-case.png",
    price: 35,
    isBestSeller: false,
    slug: "margarita-refill-12",
    category: "refill",
  },
];
