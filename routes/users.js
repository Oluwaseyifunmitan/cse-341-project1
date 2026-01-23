const express = require("express");
const routes = require("express").Router();

const usersController = require('../controllers/users');

routes.get('/', usersController.getAll);

routes.get('/:id', usersController.getSingle);

routes.post('/', usersController.createContact);

routes.put('/:id', usersController.updateContact);

routes.delete('/:id', usersController.deleteContact);


module.exports = routes;