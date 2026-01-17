const routes = require("express").Router();
const lesson1Controller = require("../controllers/index");

routes.get("/", lesson1Controller.firstWord);

module.exports = routes;
