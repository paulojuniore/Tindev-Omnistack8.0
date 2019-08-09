const express = require('express');

const routes = express.Router();

const developerController = require('./controllers/DeveloperController')

routes.post('/devs', developerController.store)

module.exports = routes;