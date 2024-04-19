const {User} = require('../models/index');
const NotFound = require('../errors/notfound.error');


class userRepository {
    async createUser(userData) {
        try {
            const user = await User.create({
                username : userData.username,
                email : userData.email,
                bio : userData.bio,
            })
            return user;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getUser(id) {
        try {
            const user = await User.findById(id);
            if(!user) {
                throw new NotFound("User", id);
            }
            return user
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = userRepository;