var express = require('express');
var logger = require('morgan');

var peopleRouter = require('./routes/people');
var planetsRouter = require('./routes/planets')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/people', peopleRouter);
app.use('/planets', planetsRouter);

module.exports = app;
