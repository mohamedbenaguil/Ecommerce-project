const { body, validationResult } = require("express-validator");

exports.regiterValidation=[
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Minimum length of password is 8 characters').isLength({min:8})
]
exports.loginValidation=[
    body('email', 'Invalid email').isEmail(),
    body("password", 'Minimum length of password is 8 characters').isLength({min:8})
]
exports.validation = (req, res, next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    next()
}