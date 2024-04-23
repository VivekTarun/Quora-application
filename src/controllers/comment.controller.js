const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");
const CommentRepository = require("../repositories/comment.repository");
const CommentService = require("../services/comment.service");

const commentService = new CommentService(new CommentRepository());

function pingCommentController(req, res) {
    return res.json({ message : "comment controller is up"});
}

async function commentOnAnswer(req, res, next) {
    try {
        const comment = await commentService.commentOnAnswer(req.params.id ,req.body);
        return res.status(StatusCodes.CREATED).json({
            success : true,
            message : 'Successfully commented on answer',
            error : {},
            data : comment
        })
    } catch(error) {
        next(error);
    }
}

async function commentOnComment(req, res, next) {
    try {
        const comment = await await commentService.commentOnComment(req.params.id, req.body);
        return res.status(StatusCodes.CREATED).json({
            success : true,
            message : 'successfully commented on comment',
            error : {},
            data : comment
        })
    } catch(error) {
        next(error);
    }
}

module.exports = {
    pingCommentController,
    commentOnAnswer,
    commentOnComment
}