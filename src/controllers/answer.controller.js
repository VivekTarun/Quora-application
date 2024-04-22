const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");
const { AnswerRepository } = require("../repositories");
const AnswerService = require("../services/answer.service");

const answerService = new AnswerService(new AnswerRepository());
function pingAnswerController(req, res) {
    return res.json({message : "Answer controller is up"});
}

async function answerOnQuestion(req, res, next) {
    try {
        const answer = await answerService.answerOnQuestion(req.body, req.params.id);
        return res.status(StatusCodes.CREATED).json({
            success : true,
            message :  `successfully answered ${req.body.text}`,
            error : {},
            data : answer
        })
    } catch(error) {
        next(error);
    }
}

async function updateAnswer(req, res, next) {
    try {
        const updatedAnswer = await answerService.updateAnswer(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success : true,
            message : 'Successfully updated the problem',
            error : {},
            data : updatedAnswer
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingAnswerController,
    answerOnQuestion,
    updateAnswer
}