const express = require('express');

const {questionController} = require('../../controllers/index');

const questionRouter = express.Router();

questionRouter.get('/ping', questionController.pingQuestionController);

questionRouter.post('/', questionController.addQuestion);

questionRouter.get('/', questionController.getQuestion);

module.exports = questionRouter;