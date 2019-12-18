const{validationResult} = require("express-validator");

const checkValidationResult = (req, res, next) => {
    const result = validationResult(req);
    if(!result.isEmpty())
        return res.status(400).send({message: result.array()[0].msg})
    next();
}

module.exports = checkValidationResult;