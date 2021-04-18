// require("dotenv").config();
const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express(); // Se crea una instancia del servidor Express
    this.port = process.env.PORT;

    // Listaso de paths
    this.authPath = "/api/auth";

    // Middlewares
    this.middlewares();

    // Rutas
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio público
    this.app.use(express.static("public"));
  }

  // Método para generar las rutas
  routes() {
    this.app.use(this.authPath, require("../routes/auth"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}
module.exports = Server;
