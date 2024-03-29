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

module.exports = async () => {
  const products = [];
  products.push(
    {
      name: "Pistachio",
      price: 250,
      stock: 5,
      image: "/src/assets/img/Flavored-Pistachio.png",
      description:
        "Indulge in a nutty symphony with our Pistachio blend. Creamy, nutty undertones intertwine with rich coffee, creating a delightful fusion of flavors in every sip.",
      createdAt: "",
      updatedAt: "",
      color: "#74243d",
      categoryId: 1,
    },
    {
      name: "Coconut Cream",
      price: 250,
      stock: 5,
      image: "/src/assets/img/Flavored-CoconutCream.png",
      description:
        "Escape to the tropics with our Coconut Cream blend. Luxuriously creamy coconut flavors meld with smooth coffee, offering a taste of paradise in every sip.",
      createdAt: "",
      updatedAt: "",
      color: "#74243d",
      categoryId: 1,
    },
    {
      name: "Chocolate Amaretto",
      price: 250,
      stock: 5,
      image: "/src/assets/img/Flavored-ChocolateAmaretto.png",
      description:
        "Dive into decadence with our Chocolate Amaretto blend. Rich chocolate and almond-infused notes dance harmoniously with bold coffee, creating an indulgent experience reminiscent of Italian elegance.",
      createdAt: "",
      updatedAt: "",
      color: "#700804",
      categoryId: 1,
    },
    {
      name: "Half Moon",
      price: 250,
      stock: 5,
      image: "/src/assets/img/Flavored-HalfMoon.png",
      description:
        "Experience the celestial balance of our Half Moon blend. Robust dark roast meets smooth light roast, creating a captivating harmony perfect for any time of day.",
      createdAt: "",
      updatedAt: "",
      color: "#2e2a27",
      categoryId: 1,
    },
    {
      name: "Cinnamon Bun",
      price: 250,
      stock: 5,
      image: "/src/assets/img/Flafored-CinnamonBun.png",
      description:
        "Indulge in the warm, comforting embrace of our Cinnamon Bun blend. Rich cinnamon swirls delicately with creamy coffee, evoking the nostalgic delight of freshly baked buns.",
      createdAt: "",
      updatedAt: "",
      color: "#3ec2cf",
      categoryId: 1,
    },
    {
      name: "Dark Adirondack",
      price: 250,
      stock: 5,
      image: "/src/assets/img/Blends-DarkAdirondack.png",
      description:
        "Venture into the depths of flavor with our Dark Adirondack blend. Robust and invigorating, it captures the rugged essence of the Adirondack wilderness in every bold sip.",
      createdAt: "",
      updatedAt: "",
      color: "#0c2639",
      categoryId: 2,
    },
    {
      name: "Italian Roast",
      price: 250,
      stock: 5,
      image: "/src/assets/img/Blends-ItalianRoast.png",
      description:
        "Immerse yourself in the bold intensity of Italy with our signature blend. Robust and full-bodied, it embodies the essence of Italian coffee culture in every rich and satisfying sip.",
      createdAt: "",
      updatedAt: "",
      color: "#0c2639",
      categoryId: 2,
    },
    {
      name: "House Blend",
      price: 250,
      stock: 5,
      image: "/src/assets/img/Blends-HouseBlend.png",
      description:
        "Our hallmark brew, meticulously curated for every coffee enthusiast. With its harmonious flavor profile and comforting aroma, it's the perfect companion for every occasion, embodying the essence of home in every sip.",
      createdAt: "",
      updatedAt: "",
      color: "#0c2639",
      categoryId: 2,
    },
    {
      name: "Art of Darkness",
      price: 250,
      stock: 5,
      image: "/src/assets/img/Blends-ArtOfDarkness.png",
      description:
        "A bold and mysterious brew, offering a rich, velvety experience. Dark chocolate undertones entwine with smoky caramel hints, inviting you into the enigmatic depths of the night",
      createdAt: "",
      updatedAt: "",
      color: "#2e2a27",
      categoryId: 2,
    },
    {
      name: "Half Caff",
      price: 250,
      stock: 5,
      image: "/src/assets/img/Blends-HalfCaff.png",
      description:
        "Experience the perfect balance with our Half Caff blend. Delightfully smooth, it offers a milder caffeine experience without compromising on flavor, ensuring a satisfying cup every time.",
      createdAt: "",
      updatedAt: "",
      color: "#0c2639",
      categoryId: 2,
    },
    {
      name: "Colombia Organic",
      price: 250,
      stock: 5,
      image: "/src/assets/img/SingleOrigin-Colombia.png",
      description:
        "From Colombia's fertile lands, our Organic blend offers a pure taste of nature's bounty. Smooth and vibrant with notes of cocoa and citrus, it's a testament to sustainability and quality.",
      createdAt: "",
      updatedAt: "",
      color: "#700804",
      categoryId: 3,
    },
    {
      name: "Mexico Organic",
      price: 250,
      stock: 5,
      image: "/src/assets/img/SingleOrigin-Mexico.png",
      description:
        "Discover the essence of Mexico's highlands in every sip. Sustainably grown and delicately crafted, this blend offers a nuanced flavor profile with hints of chocolate, toasted nuts, and a gentle sweetness.",
      createdAt: "",
      updatedAt: "",
      color: "#700804",
      categoryId: 3,
    },
    {
      name: "Sumatra Mandheling",
      price: 250,
      stock: 5,
      image: "/src/assets/img/SingleOrigin-Sumatra.png",
      description:
        "Embark on a journey to the lush landscapes of Sumatra with our Mandheling blend. Rich and full-bodied, it boasts earthy notes with hints of cocoa and spice, capturing the essence of Indonesia's finest coffee.",
      createdAt: "",
      updatedAt: "",
      color: "#700804",
      categoryId: 3,
    },
    {
      name: "Guatemala Santo Domingo",
      price: 250,
      stock: 5,
      image: "/src/assets/img/SingleOrigin-Guatemala.png",
      description:
        "Experience the richness of Guatemala's coffee heritage with our Santo Domingo blend. Bold and complex, it offers a symphony of flavors with hints of dark chocolate, caramel, and a touch of fruity sweetness.",
      createdAt: "",
      updatedAt: "",
      color: "#700804",
      categoryId: 3,
    },
    {
      name: "Ethiopia Yirgacheffe",
      price: 250,
      stock: 5,
      image: "/src/assets/img/SingleOrigin-EthiopiaOrganic.png",
      description:
        "Delve into the exotic flavors of Ethiopia with our Yirgacheffe blend. Renowned for its floral aroma and bright acidity, it offers a unique sensory journey with delicate notes of jasmine, citrus, and honey.",
      createdAt: "",
      updatedAt: "",
      color: "#700804",
      categoryId: 3,
    },
  );

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
