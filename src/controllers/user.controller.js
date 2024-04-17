function pingUserController(req, res) {
    return res.json({message : "User controller is up"});
}

module.exports = {
    pingUserController
}