const express = require('express');

const {answerController, commentController} = require('../../controllers/index');


const answerRouter = express.Router();

answerRouter.get('/', answerController.pingAnswerController);

answerRouter.put('/:id', answerController.updateAnswer);

answerRouter.post('/:id/comments', commentController.commentOnAnswer);


module.exports = answerRouter;