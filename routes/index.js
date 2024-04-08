/**
 * No hay una única forma de organizar las rutas de un sitio web.
 * Una alternativa podría ser organizar las rutas por entidad:
 */

const userRoutes = require("./userRoutes");

const productRoutes = require("./productRoutes");

/**
 * Otra alternativa podría ser organizar las rutas según su nivel de
 * privacidad (ej: si son rutas públicas o privadas).
 *
 * En `publicRoutes` podrían estar las rutas relacionadas con páginas como
 * Home, Contacto y Sobre Nosotros. En `privateRoutes` podrían estar las rutas
 * relacionados al Panel de Control (Admin). Notar que si se está construyendo
 * una API esta alternativa no tendría sentido.
 */

const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");
const categoryRoutes = require("./categoryRoutes");
const adminRoutes = require("./adminRoutes");
const authRoutes = require("./authRoutes");

module.exports = (app) => {
  /**
   * Notar que si el sitio está en español, tiene sentido que las URLs que se
   * ven en la barra de direcciiones del navegador también lo estén. No así los
   * nombres de variables, funciones, etc, que siempre se recomienda que estén
   * en inglés.
   */

  app.use("/users", userRoutes);

  app.use("/products", productRoutes);
  app.use("/category", categoryRoutes);
  app.use("/admin", adminRoutes);
  app.use("/login", authRoutes);

  // TODO auth routes
  app.use("/", publicRoutes);
};
