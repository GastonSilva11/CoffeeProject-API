require("dotenv").config();
const cors = require("cors");

const methodOverride = require("method-override");
const express = require("express");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

routes(app);

/* COMMENT */

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
