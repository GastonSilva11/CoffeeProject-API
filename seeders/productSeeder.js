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
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Coconut Cream",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Chocolate Amaretto",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Coconut Cream",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Cinnamon Bun",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 1,
    },
    {
      name: "Dark Adirondack",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "Italian Roast",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "House Blend",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "Art of Darkness",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "Half Caff",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 2,
    },
    {
      name: "Colombia Organic",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
    {
      name: "Mexico Organic",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
    {
      name: "Sumatra Mandheling",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
    {
      name: "Guatemala Santo Domingo",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
    {
      name: "Ethiopia Yirgacheffe",
      price: 250,
      stock: 5,
      image: "",
      description:
        "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
      createdAt: "",
      updatedAt: "",
      categoryId: 3,
    },
  );

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
