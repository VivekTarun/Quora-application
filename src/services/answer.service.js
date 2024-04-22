class AnswerService {
    constructor(answerRepository) {
        this.answerRepository = answerRepository;
    }

    async answerOnQuestion(answerData, answerId) {
        const answer = await this.answerRepository.answerOnQuestion(answerData, answerId);
        return answer;
    }

    async updateAnswer(id, updatedData) {
        const updatedAnswer = await this.answerRepository.updateAnswer(id, updatedData);
        return updatedAnswer;
    }
}

module.exports = AnswerService;