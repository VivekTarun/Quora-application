const NotImplemented = require("../errors/notImplemented.error");
const {StatusCodes} = require('http-status-codes');
const { QuestionRepository } = require("../repositories/index");
const {QuestionService} = require("../services/index")

const questionService = new QuestionService(new QuestionRepository);

function pingQuestionController(req, res) {
    return res.json({message : "Question controller is up"});
}

async function createQuestion(req, res, next) {
    try {
        const newQuestion = await questionService.createQuestion(req.body);
        return res.status(StatusCodes.CREATED).json({
            success : true,
            message : 'sucessfully created a new Question',
            error : {},
            data : newQuestion
        })
    } catch (error) {
        next(error);
    }
}

async function getQuestion(req, res, next) {
    try {
        const question = await questionService.getQuestion(req.query);
        return res.status(StatusCodes.OK).json({
            success : true,
            error : {},
            message : 'Successfully fetched Question',
            data : question
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingQuestionController,
    createQuestion,
    getQuestion
};