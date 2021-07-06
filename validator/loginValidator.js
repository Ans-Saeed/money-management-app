const validator = require('validator')

const validator = user => {
    const error = {}
    if (!user.email) {
        error.mail = 'Please provide the email'
    } else if (!validator.isEmail(user.email)) {
        error.email = 'Please provide the valid email'
    }
    if (!user.password) {
        error.password = 'Please provide the email'
    }
    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate