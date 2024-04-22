class QuestionService {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }

    async createQuestion(questionData) {
        const question = await this.questionRepository.createQuestion(questionData);
        return question;
    }

    async getQuestion(questionData) {
        const question = await this.questionRepository.getQuestion(questionData);
        return question;
    }
}

module.exports = QuestionService;