const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        status: {
          type: DataTypes.STRING,
        },
        totalPrice: {
          type: DataTypes.BIGINT.UNSIGNED,
        },
        method: {
          type: DataTypes.STRING,
        },
        products: {
          type: DataTypes.JSON,
        },
      },
      {
        sequelize,
        modelName: "order",
      },
    );
    return Order;
  }
}

module.exports = Order;
