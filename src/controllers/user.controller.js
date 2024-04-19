const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const {UserRepository} = require('../repositories/index');
const { UserService } = require('../services/index');

const userService = new UserService(new UserRepository())

function pingUserController(req, res) {
    return res.json({message : "User controller is up"});
}

async function addUser(req, res, next) {
    try {
        const newUser = await userService.createUser(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'successfully created a new User',
            error : {},
            data :newUser
        })
    } catch(error) {
        next(error);
    }
}

function getUser(req, res) {
    throw new NotImplemented('get problem')
}

function updateUser(req, res) {
    throw new NotImplemented('update problem')
}

module.exports = {
    pingUserController,
    addUser,
    getUser,
    updateUser
}