class TopicService {
    constructor(topicRepository) {
        this.topicRepository = topicRepository;
    }

    async createTopic(topicDetails) {
        const topic = await this.topicRepository.createTopic(topicDetails);
        return topic;
    }

    async getTopics() {
        const topics = await this.topicRepository.getTopics();
        return topics;
    }
}

module.exports = TopicService;