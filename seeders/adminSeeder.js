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

const { Admin } = require("../models");
const { fakerES: faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const encryptPassword = await bcrypt.hash("123", 10);

  const admins = [
    {
      firstname: "Admin",
      lastname: "Admin",
      email: "test@test.com",
      password: encryptPassword,
    },
  ];

  for (let i = 0; i < 5; i++) {
    admins.push({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: encryptPassword,
    });
  }

  await Admin.bulkCreate(admins);
  console.log("[Database] We ran the Seeder of Admins.");
};
