const express = require('express');

const userRouter = require('./users.routes');
const questionRouter = require('./question.routes');
const topicRouter = require('./topic.routes');
const commentRouter = require('./comment.routes');
const answerRouter = require('./answer.routes');

const v1Router = express.Router();

v1Router.use('/users', userRouter);
v1Router.use('/questions', questionRouter);
v1Router.use('/topics', topicRouter);
v1Router.use('/comments', commentRouter);
v1Router.use('/answers', answerRouter);

module.exports = v1Router;

