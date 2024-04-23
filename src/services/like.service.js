class LikeService {
    constructor(likeRepository) {
        this.likeRepository = likeRepository;
    }

    async likeItem(likeDetails, likeData) {
        const like = await this.likeRepository.likeItem(likeDetails,likeData);
        return like;
    }
}

module.exports = LikeService;