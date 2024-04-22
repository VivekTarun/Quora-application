const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes')

class DuplicateUser extends BaseError {
    constructor(username, email) {
        super("Duplicate data entry", StatusCodes.CONFLICT, `${username} ${email} exists in the database`);
    }
}

module.exports = DuplicateUser;