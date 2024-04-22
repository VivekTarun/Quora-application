class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }

    async commentOnAnswer(answerId, commentData) {
        const comment = await this.commentRepository.commentOnAnswer(answerId, commentData);
        return comment;
    }

    async commentOnComment(answerId, commentData) {
        const comment = await this.commentRepository.commentOnComment(answerId, commentData);
        return comment;
    }
}

module.exports = CommentService;