const express = require('express')
const createRoutes = express.Router();
const createController = require('./../controllers/CreateController');

createRoutes.post('/', (req, res) => {
    console.log("recevied post request: ", req.body);
    createController.createPost(req, res);
} )
//createController.createPost);   

module.exports = createRoutes;