const express = require('express');

const {userController} = require('../../controllers/index');

const userRouter = express.Router();

userRouter.get('/ping', userController.pingUserController);

module.exports = userRouter;