import { PrismaClient } from "@prisma/client";

export async function seedProducts(db: PrismaClient) {
  const cocktailCategory = await db.category.upsert({
    where: { name: "Cocktails" },
    update: {},
    create: {
      name: "Cocktails",
    },
  });

  const refillCategory = await db.category.upsert({
    where: { name: "Refills" },
    update: {},
    create: {
      name: "Refills",
    },
  });

  const margarita = await db.product.upsert({
    where: { productId: 1 },
    update: {},
    create: {
      productId: 1,
      name: "Margarita",
      description: "A delicious and refreshing cocktail",
      ingredients: "Tequila, lime juice, triple sec",
      image: "/bruce-case.png",
      slug: "margarita",
      price: 10.99,
      isBestSeller: true,
      categories: {
        connect: { id: cocktailCategory.id },
      },
    },
  });

  const mojito = await db.product.upsert({
    where: { productId: 2 },
    update: {},
    create: {
      productId: 2,
      name: "Mojito",
      description: "A refreshing minty cocktail",
      ingredients: "White rum, lime juice, mint leaves",
      image: "/bruce-case.png",
      slug: "mojito",
      price: 9.99,
      isBestSeller: true,
      categories: {
        connect: { id: cocktailCategory.id },
      },
    },
  });

  const pornstarMartini = await db.product.upsert({
    where: { productId: 3 },
    update: {},
    create: {
      productId: 3,
      name: "Pornstar Martini",
      description: "A fruity and sweet cocktail",
      ingredients: "Vanilla vodka, passion fruit, lime juice",
      image: "/bruce-case.png",
      slug: "pornstar-martini",
      price: 12.99,
      isBestSeller: true,
      categories: {
        connect: { id: cocktailCategory.id },
      },
    },
  });

  const tequilaSunrise = await db.product.upsert({
    where: { productId: 4 },
    update: {},
    create: {
      productId: 4,
      name: "Tequila Sunrise",
      description: "A bottle of tequila",
      ingredients: "Tequila, orange juice, grenadine",
      image: "/bruce-case.png",
      slug: "tequila-sunrise",
      price: 29.99,
      isBestSeller: true,
      categories: {
        connect: { id: cocktailCategory.id },
      },
    },
  });

  const margaritaRefill = await db.product.upsert({
    where: { productId: 5 },
    update: {},
    create: {
      productId: 5,
      name: "Margarita Refill",
      description: "A fizzy refill of margarita",
      ingredients: "Tequila, lime juice, triple sec",
      image: "/refill-case.png",
      slug: "margarita-refill",
      price: 29.99,
      isBestSeller: true,
      categories: {
        connect: { id: refillCategory.id },
      },
    },
  });

  const mojitoRefill = await db.product.upsert({
    where: { productId: 6 },
    update: {},
    create: {
      productId: 6,
      name: "Mojito Refill",
      description: "A fizzy refill of mojito",
      ingredients: "White rum, lime juice, mint leaves",
      image: "/refill-case.png",
      slug: "mojito-refill",
      price: 29.99,
      isBestSeller: true,
      categories: {
        connect: { id: refillCategory.id },
      },
    },
  });

  const pornstarMartiniRefill = await db.product.upsert({
    where: { productId: 7 },
    update: {},
    create: {
      productId: 7,
      name: "Pornstar Martini Refill",
      description: "A fizzy refill of pornstar martini",
      ingredients: "Vanilla vodka, passion fruit, lime juice",
      image: "/refill-case.png",
      slug: "pornstar-martini-refill",
      price: 29.99,
      isBestSeller: true,
      categories: {
        connect: { id: refillCategory.id },
      },
    },
  });

  const tequilaSunriseRefill = await db.product.upsert({
    where: { productId: 8 },
    update: {},
    create: {
      productId: 8,
      name: "Tequila Sunrise Refill",
      description: "A fizzy refill of tequila sunrise",
      ingredients: "Tequila, orange juice, grenadine",
      image: "/refill-case.png",
      slug: "tequila-sunrise-refill",
      price: 29.99,
      isBestSeller: true,
      categories: {
        connect: { id: refillCategory.id },
      },
    },
  });
}
