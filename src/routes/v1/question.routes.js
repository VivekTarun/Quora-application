const express = require('express');

const {questionController, answerController} = require('../../controllers/index');


const questionRouter = express.Router();

questionRouter.get('/ping', questionController.pingQuestionController);

questionRouter.post('/', questionController.createQuestion);

questionRouter.get('/search', questionController.getQuestion); // search using text and tags

questionRouter.post('/:id/answers', answerController.answerOnQuestion);

module.exports = questionRouter;