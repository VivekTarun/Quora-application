const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class DuplicateKey extends BaseError {
    constructor(topic) {
        super("Duplicate data entry", StatusCodes.CONFLICT, `${topic} exists in the database`)
    }
}

module.exports = DuplicateKey;