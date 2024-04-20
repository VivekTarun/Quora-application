const express = require('express');

const {questionController} = require('../../controllers/index');

const questionRouter = express.Router();

questionRouter.get('/ping', questionController.pingQuestionController);

questionRouter.post('/', questionController.addQuestion);

questionRouter.get('/search', questionController.getQuestion); // search using text and tags

module.exports = questionRouter;