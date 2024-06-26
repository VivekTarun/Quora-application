const {User} = require('../models/index');
const NotFound = require('../errors/notfound.error');
const DuplicateUser = require('../errors/duplicateUser.error');


class UserRepository {
    async createUser(userData) {
        try {
            const user = await User.create({
                username : userData.username,
                email : userData.email,
                bio : userData.bio,
            })
            return user;
        } catch(error) {
            if(error.keyPattern.username == 1) {
                throw new DuplicateUser(userData.username, '');
            }
            if(error.keyPattern.email == 1) {
                throw new DuplicateUser('', userData.email)
            }
            console.log(error);
            throw error;
        }
    }

    async getUser(id) {
        try {
            const user = await User.findById(id);
            return user;
        } catch(error) {
            if (error.name === 'CastError') {
                throw new NotFound("User", id);
            }
            console.log(error);
            throw error;
        }
    }

    async updateUser(id, updatedData) {
        try {
            const updatedUser = await User.findByIdAndUpdate(id, updatedData, {new : true});
            return updatedUser;
        } catch (error) {
            if (error.name === 'CastError') {
                throw new NotFound("User", id);
            }
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserRepository;