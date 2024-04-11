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

const { Order } = require("../models");
const { fakerES: faker } = require("@faker-js/faker");

module.exports = async () => {
  const orders = [];

  for (let i = 0; i < 10; i++) {
    const quantity = faker.number.int({ min: 1, max: 10 });
    orders.push({
      status: "Pending",
      method: "Credit Card",
      totalPrice: 250 * quantity,
      products: [
        {
          productName: "Coconut Cream",
          price: 250,
          quantity: quantity,
        },
      ],
      userId: faker.number.int({ min: 1, max: 10 }),
    });
  }

  await Order.bulkCreate(orders);
  console.log("[Database] We ran the Seeder of Orders.");
};
