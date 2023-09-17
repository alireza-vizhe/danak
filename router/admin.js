const express = require("express");
const route = express.Router();

const adminController = require("../controller/adminController");

route.get("/posts", adminController.getPosts);
route.post("/delete-post", adminController.deletePost);
route.post("/update-post", adminController.updatePost);
route.get("/carousel-images", adminController.getCarouselImages);
route.post("/delete-carousel-image", adminController.deleteCarouselImages);

module.exports = route;