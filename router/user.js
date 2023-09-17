const express = require("express");
const route = express.Router();

const userController = require("../controller/userController");

route.get("/users", userController.getUsers);
route.post("/register-user", userController.newUser);

module.exports = route;