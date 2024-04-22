const NotFound = require("../errors/notfound.error");
const Answer = require("../models/answerSchema.model");

class AnswerRepository {
    async answerOnQuestion(answerData, answerId) {
        try {
            const answer = await Answer.create({
                question_id : answerId,
                text : answerData.text,
                user_id : answerData.user_id
            })
            return answer;
        } catch (error) {
            if (error.name === 'ValidationError') {
                throw new NotFound("QuestionId", answerId);
            }
            console.log(error);
            throw error;
        }
    }

    async updateAnswer(id, updatedData) {
        try {
            const updatedAnswer = await Answer.findByIdAndUpdate(id, updatedData, {new : true});
            return updatedAnswer;
        } catch(error) {
            if (error.name === 'CastError') {
                throw new NotFound("answer", id);
            }
            console.log(error);
            throw error;
        }
    }

}

module.exports = AnswerRepository;