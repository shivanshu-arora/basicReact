const express = require('express')
const createRoutes = express.Router();

createRoutes.get('/', function(req, res, next) {
    res.send("Shivangi");
})     

module.exports = createRoutes;