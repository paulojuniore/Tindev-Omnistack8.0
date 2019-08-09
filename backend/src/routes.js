const express = require('express');

const routes = express.Router();

const DeveloperController = require('./controllers/DeveloperController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

routes.post('/devs', DeveloperController.store)
routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikeController.store)

module.exports = routes;