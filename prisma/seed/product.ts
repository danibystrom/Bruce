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

  const products = [
    {
      productId: 1,
      name: "Margarita",
      description: "A delicious and refreshing cocktail",
      ingredients: "Tequila, lime juice, triple sec",
      image: "/bruce-case.png",
      slug: "margarita",
      price: 10.99,
      alcohol: 12.5,
      isBestSeller: true,
      categoryId: cocktailCategory.id,
    },
    {
      productId: 2,
      name: "Mojito",
      description: "A refreshing minty cocktail",
      ingredients: "White rum, lime juice, mint leaves",
      image: "/bruce-case.png",
      slug: "mojito",
      price: 9.99,
      alcohol: 12.5,
      isBestSeller: true,
      categoryId: cocktailCategory.id,
    },
    {
      productId: 3,
      name: "Pornstar Martini",
      description: "A fruity and sweet cocktail",
      ingredients: "Vanilla vodka, passion fruit, lime juice",
      image: "/bruce-case.png",
      slug: "pornstar-martini",
      price: 12.99,
      alcohol: 12.5,
      isBestSeller: true,
      categoryId: cocktailCategory.id,
    },
    {
      productId: 4,
      name: "Tequila Sunrise",
      description: "A bottle of tequila",
      ingredients: "Tequila, orange juice, grenadine",
      image: "/bruce-case.png",
      slug: "tequila-sunrise",
      price: 29.99,
      alcohol: 12.5,
      isBestSeller: true,
      categoryId: cocktailCategory.id,
    },
    // Refills
    {
      productId: 5,
      name: "Margarita Refill",
      description: "A fizzy refill of margarita",
      ingredients: "Tequila, lime juice, triple sec",
      image: "/refill-case.png",
      slug: "margarita-refill",
      price: 29.99,
      alcohol: 12.5,
      isBestSeller: true,
      categoryId: refillCategory.id,
    },
    {
      productId: 6,
      name: "Mojito Refill",
      description: "A fizzy refill of mojito",
      ingredients: "White rum, lime juice, mint leaves",
      image: "/refill-case.png",
      slug: "mojito-refill",
      price: 29.99,
      alcohol: 12.5,
      isBestSeller: true,
      categoryId: refillCategory.id,
    },
    {
      productId: 7,
      name: "Pornstar Martini Refill",
      description: "A fizzy refill of pornstar martini",
      ingredients: "Vanilla vodka, passion fruit, lime juice",
      image: "/refill-case.png",
      slug: "pornstar-martini-refill",
      price: 29.99,
      alcohol: 12.5,
      isBestSeller: true,
      categoryId: refillCategory.id,
    },
    {
      productId: 8,
      name: "Tequila Sunrise Refill",
      description: "A fizzy refill of tequila sunrise",
      ingredients: "Tequila, orange juice, grenadine",
      image: "/refill-case.png",
      slug: "tequila-sunrise-refill",
      price: 29.99,
      alcohol: 12.5,
      isBestSeller: true,
      categoryId: refillCategory.id,
    },
  ];

  // Iterera över produkterna och skapa/uppdatera dem i databasen
  for (const product of products) {
    await db.product.upsert({
      where: { productId: product.productId },
      update: {},
      create: {
        productId: product.productId,
        name: product.name,
        description: product.description,
        ingredients: product.ingredients,
        image: product.image,
        slug: product.slug,
        price: product.price,
        alcohol: product.alcohol,
        isBestSeller: product.isBestSeller,
        categories: { connect: { id: product.categoryId } },
      },
    });
  }
}
