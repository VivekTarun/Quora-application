const { StatusCodes } = require("http-status-codes");
const TopicRepository = require("../repositories/topic.repository");
const TopicService = require("../services/topic.service");

const topicService = new TopicService(new TopicRepository);

function pingTopicController(req, res) {
    return res.json({message : "Topic controller is up"});
}

async function createTopic(req, res, next) {
    try {
        const newTopic = await topicService.createTopic(req.body);
        return res.status(StatusCodes.CREATED).json({
            success : true,
            message : 'Successfully created a new User',
            error : {},
            data : newTopic
        })
    } catch(error) {
        next(error);
    }
}

async function getTopics(req, res, next) {
    try {
        const topic = await topicService.getTopics();
        return res.status(StatusCodes.OK).json({
            success : true,
            error : {},
            message : 'successfully fetched all topics',
            data : topic
        })
    }catch (error) {
        next(error);
    }
}

module.exports = {
    pingTopicController,
    createTopic,
    getTopics
}