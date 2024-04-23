const express = require('express');

const {likeController} = require('../../controllers/index')

const likeRouter = express.Router();

likeRouter.get('/ping', likeController.pingLikeController);

likeRouter.post('/:type/:id/likes',likeController.likeItem);

module.exports = likeRouter;