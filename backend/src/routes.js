const express = require("express");

const UserList = require("./controllers/UserList");
const AuthenticationUser = require("./controllers/AuthenticationUser");
const AdminController = require("./controllers/AdminController");
const ProductController = require("./controllers/ProductController");

const routes = express.Router();

//Crud de usuários controlado pelo administrador
routes.get("/users", UserList.index);
routes.put("/users/:id", UserList.update);
routes.delete("/users/:id", UserList.delete);

//Crud de produtos controlado pelo usuário e administrador
routes.get("/products", ProductController.index);
routes.post("/products", ProductController.create);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

//Autenticação do usuário comum
routes.post("/users", AuthenticationUser.registerUser);
routes.post("/login", AuthenticationUser.loginUser);

//Autenticação do administrador
routes.post("/administrador/add_admin", AdminController.addAdmin);
routes.post("/administrador/login", AdminController.loginAdmin);

module.exports = routes;
