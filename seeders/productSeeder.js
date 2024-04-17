/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 * En este ejemplo se están insertando 500 artículos con textos ficticios.
 *
 *
 */

const { Product } = require("../models");
const { fakerES: faker } = require("@faker-js/faker");

module.exports = async () => {
  const products = [];
  products.push(
    {
      name: "Pistachio",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Flavored-Pistachio.png",
      description:
        "Indulge in a nutty symphony with our Pistachio blend. Creamy, nutty undertones intertwine with rich coffee, creating a delightful fusion of flavors in every sip.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Coconut Cream",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Flavored-CoconutCream.png",
      description:
        "Escape to the tropics with our Coconut Cream blend. Luxuriously creamy coconut flavors meld with smooth coffee, offering a taste of paradise in every sip.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Chocolate Amaretto",
      price: 190,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Flavored-ChocolateAmaretto.png",
      description:
        "Dive into decadence with our Chocolate Amaretto blend. Rich chocolate and almond-infused notes dance harmoniously with bold coffee, creating an indulgent experience reminiscent of Italian elegance.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Half Moon",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Flavored-HalfMoon.png",
      description:
        "Experience the celestial balance of our Half Moon blend. Robust dark roast meets smooth light roast, creating a captivating harmony perfect for any time of day.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Cinnamon Bun",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Flavored-CinnamonBun.png",
      description:
        "Indulge in the warm, comforting embrace of our Cinnamon Bun blend. Rich cinnamon swirls delicately with creamy coffee, evoking the nostalgic delight of freshly baked buns.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Hazelnut",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Flavored-Hazelnut.png",
      description:
        "Experience Utica Coffee's Hazelnut blend: a smooth, nutty delight. Rich hazelnut essence swirls in each sip for a truly indulgent coffee experience.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Jamaican Me Crazy",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Flavored-JamaicanMeCrazy.png",
      description:
        "Escape to the Caribbean with JamaicanMeCrazy coffee. Rich, smooth blend infused with hints of caramel, vanilla, and rum, delivering a tropical paradise in every sip.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Irish Cream",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Flavored-IrishCream.png",
      description:
        "Irish Cream Indulgence: Experience the velvety smoothness of our Irish Cream blend. Rich coffee harmonizes with creamy, indulgent flavors, evoking the luxurious essence of a classic Irish libation in every sip.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Dark Adirondack",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Blends-DarkAdirondack.png",
      description:
        "Venture into the depths of flavor with our Dark Adirondack blend. Robust and invigorating, it captures the rugged essence of the Adirondack wilderness in every bold sip.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "Italian Roast",
      price: 190,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Blends-ItalianRoast.png",
      description:
        "Immerse yourself in the bold intensity of Italy with our signature blend. Robust and full-bodied, it embodies the essence of Italian coffee culture in every rich and satisfying sip.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "House Blend",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Blends-HouseBlend.png",
      description:
        "Our hallmark brew, meticulously curated for every coffee enthusiast. With its harmonious flavor profile and comforting aroma, it's the perfect companion for every occasion, embodying the essence of home in every sip.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "Art of Darkness",
      price: 190,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Blends-ArtOfDarkness.png",
      description:
        "A bold and mysterious brew, offering a rich, velvety experience. Dark chocolate undertones entwine with smoky caramel hints, inviting you into the enigmatic depths of the night",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "Half Caff",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Blends-HalfCaff.png",
      description:
        "Experience the perfect balance with our Half Caff blend. Delightfully smooth, it offers a milder caffeine experience without compromising on flavor, ensuring a satisfying cup every time.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "Espresso",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Blends-Espresso.png",
      description:
        "Embrace the bold intensity of our espresso blend. Crafted to perfection, it offers a rich and robust flavor profile with a lingering crema, delivering the quintessential Italian espresso experience with every shot.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "Breakfast",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Blends-Breakfast.png",
      description:
        "Start your day on a bright note with our Breakfast Blend. Light-bodied and smooth, it offers a gentle wake-up call with subtle hints of citrus and a clean finish, perfect for your morning routine.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "Utica Firehouse",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/Blends-UticaFirehouse.png",
      description:
        "Experience the perfect balance with our Half Caff blend. Delightfully smooth, it offers a milder caffeine experience without compromising on flavor, ensuring a satisfying cup every time.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "Colombia Organic",
      price: 190,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/SingleOrigin-Colombia.png",
      description:
        "From Colombia's fertile lands, our Organic blend offers a pure taste of nature's bounty. Smooth and vibrant with notes of cocoa and citrus, it's a testament to sustainability and quality.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
    {
      name: "Mexico Organic",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/SingleOrigin-Mexico.png",
      description:
        "Discover the essence of Mexico's highlands in every sip. Sustainably grown and delicately crafted, this blend offers a nuanced flavor profile with hints of chocolate, toasted nuts, and a gentle sweetness.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
    {
      name: "Sumatra Mandheling",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/SingleOrigin-Sumatra.png",
      description:
        "Embark on a journey to the lush landscapes of Sumatra with our Mandheling blend. Rich and full-bodied, it boasts earthy notes with hints of cocoa and spice, capturing the essence of Indonesia's finest coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
    {
      name: "Guatemala Santo Domingo",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/SingleOrigin-Guatemala.png",
      description:
        "Experience the richness of Guatemala's coffee heritage with our Santo Domingo blend. Bold and complex, it offers a symphony of flavors with hints of dark chocolate, caramel, and a touch of fruity sweetness.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
    {
      name: "Ethiopia Yirgacheffe",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/SingleOrigin-EthiopiaOrganic.png",
      description:
        "Delve into the exotic flavors of Ethiopia with our Yirgacheffe blend. Renowned for its floral aroma and bright acidity, it offers a unique sensory journey with delicate notes of jasmine, citrus, and honey.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
    {
      name: "Colombia Supremo",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/SingleOrigin-ColombiaSupremo.png",
      description:
        "Revel in the supreme taste of Colombia with our distinguished blend. Grown in the country's fertile soils, it offers a rich and balanced flavor profile, showcasing notes of cocoa, caramel, and a hint of citrus.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
    {
      name: "Brazil",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/SingleOrigin-Brazil.png",
      description:
        "Delve into the exotic flavors of Ethiopia with our Yirgacheffe blend. Renowned for its floral aroma and bright acidity, it offers a unique sensory journey with delicate notes of jasmine, citrus, and honey.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
    {
      name: "Costa Rica",
      price: 250,
      stock: faker.number.int({ min: 1, max: 15 }),
      image: "/product_images/SingleOrigin-CostaRica.png",
      description:
        "Embark on a journey to the lush coffee plantations of Costa Rica with our Reserve blend. Delicately cultivated in the country's rich volcanic soils, it boasts a bright acidity, with notes of citrus, honey, and caramel.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
  );

  await Product.bulkCreate(products);
  console.log("[Database] We ran the Seeder of Products.");
};
