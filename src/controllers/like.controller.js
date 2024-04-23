const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");
const {LikeRepository} = require("../repositories/");
const {LikeService} = require("../services/");

const likeService = new LikeService(new LikeRepository());

function pingLikeController(req, res) {
    return res.json({message : 'Like controller is up'});
}

async function likeItem(req, res, next) {
    try {
        const like = await likeService.likeItem(req.params, req.body);
        return res.status(StatusCodes.CREATED).json({
            success : true,
            message : `Successfully liked ${req.params.type}`,
            error : {},
            data : like
        })
    } catch (error) {
        next(error);
    }
}
module.exports = {
    pingLikeController,
    likeItem,
}