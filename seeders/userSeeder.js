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

const bcrypt = require("bcryptjs");

const { User } = require("../models");
const { fakerES: faker } = require("@faker-js/faker");

module.exports = async () => {
  const encryptPassword = await bcrypt.hash("user", 10);
  const users = [
    {
      firstname: "Guest",
      lastname: "User",
      email: "user@user.com",
      password: encryptPassword,
    },
  ];

  for (let i = 0; i < 10; i++) {
    users.push({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: encryptPassword,
      address: faker.location.streetAddress(),
      phone: faker.phone.number(),
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] We ran the Seeder of Users.");
};
