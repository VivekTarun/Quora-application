const BadRequest = require('../errors/badRequest.error')
const { Comment } = require("../models");

class CommentRepository {
    async commentOnAnswer(answerId, commentData) {
        try {
            const comment = await Comment.create({
                user_id : commentData.user_id,
                text : commentData.text,
                parent_id : answerId
            })
            return comment;
        } catch(error) {
            if (error.name === 'ValidationError') {

                const parentError = error.errors.parent_id;
                const userError = error.errors.user_id;
    
                if (parentError && parentError.name === 'CastError') {
                    throw new BadRequest(`parent_id: ${parentError.message}`);
                }
                if (userError && userError.name === 'CastError') {
                    throw new BadRequest(`Invalid user_id: ${userError.message}`);
                }
            }
    
            console.log(error);
            throw error;
        }
    }

    async commentOnComment(commentId, commentData) {
        try {
            const comment = await Comment.create({
                user_id : commentData.user_id,
                text : commentData.text,
                parent_id : commentId
            })
            return comment;
        } catch(error) {
            if (error.name === 'ValidationError') {

                const parentError = error.errors.parent_id;
                const userError = error.errors.user_id;
    
                if (parentError && parentError.name === 'CastError') {
                    throw new BadRequest(`parent_id: ${parentError.message}`);
                }
                if (userError && userError.name === 'CastError') {
                    throw new BadRequest(`Invalid user_id: ${userError.message}`);
                }
            }
    
            console.log(error);
            throw error;
        }
    }
}

module.exports = CommentRepository;