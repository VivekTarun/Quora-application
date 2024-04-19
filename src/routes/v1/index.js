const express = require('express');

const userRouter = require('./users.routes');
const questionRouter = require('./question.routes')

const v1Router = express.Router();

v1Router.use('/users', userRouter);
v1Router.use('/questions', questionRouter);

module.exports = v1Router;

