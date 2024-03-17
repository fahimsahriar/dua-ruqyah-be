const express = require("express");
const {
  getAllCategories,
  getAllSubcategories,
  getAllDuas,
} = require("../controllers/duas.js");
const duaRouter = express.Router();

// Define routes and use controller functions
duaRouter.get("/categories", getAllCategories);
duaRouter.get("/sub-categories", getAllSubcategories);
duaRouter.get("/duas", getAllDuas);
// Add more routes as needed

module.exports = duaRouter;
