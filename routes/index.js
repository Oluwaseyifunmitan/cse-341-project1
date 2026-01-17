const routes = require("express").Router();
const { firstWord } = require("../controllers/index"); // <-- destructure here

routes.get("/", firstWord);
routes.use("/users", require('./users'))

module.exports = routes;
