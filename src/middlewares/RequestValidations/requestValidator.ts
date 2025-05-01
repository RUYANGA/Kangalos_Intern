import {body} from 'express-validator'



export const RegisterValidation=[
    body('name')
    .notEmpty()
    .withMessage('Name must not be empty!')
    .escape()
    .isLength({min:3})
    .withMessage('Name charcter must be at least 3 character !'),
    body('email')
    .notEmpty()
    .normalizeEmail()
    .withMessage('Email required !')
    .escape()
    .isLength({min:5})
    .withMessage('Password must be at least 5 digits'),
    body('reg_no')
    .notEmpty()
    .withMessage('Reg number required!')
    .escape()
    .isNumeric()
    .withMessage('Reg number must be a numbers')
    
]