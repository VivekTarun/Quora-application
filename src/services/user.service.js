class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(userData) {
        const user = await this.userRepository.createUser(userData);
        return user;
    }

    async getUser(userId) {
        const user = await this.userRepository.getUser(userId);
        return user;
    }

    async deleteUser(userId) {
        const user = await this.userRepository.deleteUser(userId);
        return user;
    }

    async updateUser(userId, updatedData) {
        const user = await this.userRepository.updateUser(userId, updatedData);
        return user;
    }
}

module.exports = UserService;