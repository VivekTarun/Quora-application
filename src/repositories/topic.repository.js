const {Topic} = require('../models/index');
const DuplicateKey = require('../errors/duplicateKey.error')

class TopicRepository {
    async createTopic(topicDetails) {
        try {
            const topic = await Topic.create({
                name : topicDetails.name
            })
            return topic;
        } catch(error) {
            if(error.keyPattern.name == 1) {
                throw new DuplicateKey(topicDetails.name);
            }
            console.log(error);
            throw error;
        }
    }

    async getTopics() {
        try {
            const topic = await Topic.find({});
            return topic;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = TopicRepository;