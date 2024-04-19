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

async function getUser(req, res) {
    const user = await userService.getUser(req.params.id);
    return res.status(StatusCodes.OK).json({
        success : true,
        error: {},
        message : 'Successfully fetched a problem',
        data : user
    })
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