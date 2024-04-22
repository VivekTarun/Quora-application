function pingAnswerController(req, res) {
    return res.json({message : "Answer controller is up"});
}

module.exports = {
    pingAnswerController,
    
}