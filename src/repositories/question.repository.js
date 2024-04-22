const NotFound = require('../errors/notfound.error');
const {Question} = require('../models/index');

class QuestionRepository {
    async createQuestion(questionData) {
        try {
            const question = await Question.create({
                title : questionData.title,
                body : questionData.body,
                topics : questionData.topics,
                user_id : questionData.user_id
            })
            return question;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getQuestion(questionData) {
        try {
            const query = {};
            if(questionData.text) {
                query.$text = {$search : questionData.text};
            }
            if(questionData.tag) {
                query.topics = questionData.tag;
            }
            const questions = await Question.find(query);

            if (!questions || questions.length === 0) {
                throw new NotFound("text or tag", `${questionData.text} ${questionData.tag}`);
            }

            return questions;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = QuestionRepository;