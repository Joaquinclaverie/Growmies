var express = require('express');
var planetsRouter = express.Router();
const replaceData = require('../controllers/planets')

planetsRouter.get('/getAll', replaceData);

module.exports = planetsRouter;
