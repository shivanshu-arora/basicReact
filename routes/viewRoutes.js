const express = require('express')
const viewRoutes = express.Router();
const viewController = require('./../controllers/ViewController');

viewRoutes.get('/', viewController.getAllPosts);   
viewRoutes.get('/upvote', viewController.upvote);   

module.exports = viewRoutes;