const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const User = require("./User");
const Admin = require("./Admin");
const Product = require("./Product");
const Order = require("./Order");
const Category = require("./Category");

User.initModel(sequelize);
Admin.initModel(sequelize);
Product.initModel(sequelize);
Order.initModel(sequelize);
Category.initModel(sequelize);

User.hasMany(Order);
Order.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */

module.exports = {
  sequelize,
  User,
  Admin,
  Product,
  Category,
  Order,
};
