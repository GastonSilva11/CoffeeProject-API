const { User, Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const orders = await Order.findAll({ include: { model: User } });
  return res.json(orders);
}

// Display the specified resource.
async function show(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  console.log(req.body);

  const { user, itemsInCart, method, totalPrice } = req.body;
  const userId = user.userId;

  const products = itemsInCart.map((item) => ({
    productName: item.name,
    price: item.price,
    quantity: item.quantity,
  }));

  try {
    // Create the order in the database
    const newOrder = await Order.create({
      userId,
      products: products,
      method,
      status: "pending",
      totalPrice,
    });

    // Respond with the newly created user
    return res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating order:", error);

    return res.status(200).json({ message: "Order created successfully" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const { id } = req.params;

  try {
    // Find the order by ID
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Delete the order
    await order.destroy();

    // Respond with success message
    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
