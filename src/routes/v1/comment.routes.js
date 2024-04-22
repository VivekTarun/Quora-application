const express = require('express');

const {commentController} = require('../../controllers/index');

const commentRouter = express.Router();

commentRouter.get('/ping', commentController.pingCommentController);

commentRouter.post('/:id/comments', commentController.commentOnComment);

module.exports = commentRouter;