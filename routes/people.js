var express = require('express');
var peopleRouter = express.Router();
const validateSort = require('../controllers/people')

peopleRouter.get('/getAll/:sortBy?', validateSort);

module.exports = peopleRouter;
