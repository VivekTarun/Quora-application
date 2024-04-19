const NotImplemented = require("../errors/notImplemented.error");

function pingQuestionController(req, res) {
    return res.json({message : "Question controller is up"});
}

function addQuestion(req, res) {
    throw new NotImplemented('add question');
}

function getQuestion(req, res) {
    throw new NotImplemented('get question');
}

module.exports = {
    pingQuestionController,
    addQuestion,
    getQuestion
}