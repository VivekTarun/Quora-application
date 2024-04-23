const Like = require("../models/likeSchema.model");
const BadRequest = require('../errors/badRequest.error');
const NotFound = require('../errors/notFound.error');

class LikeRepository {
    async likeItem(likedetails, likeData) {
        try {
            const like = await Like.create({
                type: likedetails.type,
                itemId: likedetails.id,
                userId: likeData.userId
            })
            return like;
        } catch (error) {
            if (error.name === 'ValidationError') {
                // Handle validation errors
                const errorMessages = Object.values(error.errors).map(err => err.message);
                throw new BadRequest("Invalid data provided for creating a like.", errorMessages);
            } else if (error.name === 'CastError') {
                // Handle cast errors
                if (error.path === 'itemId') {
                    throw new NotFound("Item", likedetails.id);
                } else if (error.path === 'userId') {
                    throw new NotFound("User", likeData.userId);
                }
            } else {
                console.log(error);
                throw error;
            }
        }
    }
}

module.exports = LikeRepository;