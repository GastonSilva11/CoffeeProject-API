/**
 * Este archivo se puede usar como referencia para crear el controlador de
 * cualquier entidad del sistema.
 *
 * Por ejemplo, si se necesita crear un controlador para la entidad `Student`,
 * se sugiere hacer Copy & Paste de este archivo y nombrarlo como
 * `studentController.js`.
 *
 * No es necesario renombrar los métodos. A priori, la idea es que todos los
 * controladores tengan estos 7 métodos: index, show, create, store, edit,
 * update y destroy.
 *
 * Nota: en el caso de estar creando una API, los métodos `create` y `edit`
 * no serían necesarios ya que los mismos se usan en proyecto con server-side
 * rendering para mostrar los formularios de crear y editar, respectivamente.
 *
 * Por lo tanto, al crear una API, los únicos métodos que serían necesarios
 * son: index, show, store, update y destroy.
 */

const { Product, Category } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const categoryName = req.params.id;

  try {
    // Find the category with the given name
    const category = await Category.findOne({
      where: { name: categoryName },
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Find all products that belong to the category
    const productsOfCategory = await Product.findAll({
      include: {
        model: Category,
        where: { name: categoryName },
      },
    });

    return res.json(productsOfCategory);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
