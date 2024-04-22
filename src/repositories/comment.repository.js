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
            console.log(error);
            throw error;
        }
    }
}

module.exports = CommentRepository;