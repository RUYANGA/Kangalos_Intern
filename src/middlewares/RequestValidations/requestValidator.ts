import { body } from "express-validator";
import { PrismaClient } from "@prisma/client";
import { max, min } from "date-fns";

const prisma=new PrismaClient()


export const signUp_Validation=[
    body("firstName")
    .notEmpty()
    .withMessage('Username must not be empty')
    .escape()
    .isString()
    .withMessage('Username must be string')
    .isLength({min:3})
    .withMessage('User must be at least 3 char '),
    body("lastName")
    .notEmpty()
    .withMessage('Username must not be empty')
    .escape()
    .isString()
    .withMessage('Username must be string')
    .isLength({min:3})
    .withMessage('User must be at least 3 char '),
    body("phone")
    .notEmpty()
    .withMessage("Phone number required")
    .isMobilePhone('any') // accepts any locale format
    .withMessage('Invalid phone number'),
    body('email')
    .notEmpty()
    .toLowerCase()
    .normalizeEmail()
    .custom((value,{req})=>{
        return prisma.user.findUnique({
            where:{email:value}
        })
        .then(user=>{
            if(user){
                return Promise.reject(
                    'User with email existing'
                )
            }
            return true
        })
    }),
    body("password")
    .notEmpty()
    .withMessage('Password required !')
    .isLength({min:5})
    .withMessage('Password length must be at least 5 character'),
    body("gender")
    .notEmpty()
    .withMessage('Gender required !'),
    body("dateOfBirth")
    .notEmpty()
    .withMessage('Date of birth required')
    .isDate()
    .withMessage('Date of birth is not date')
    .escape()
    
];

export const resendOtp_validation=[
    body('email')
    .notEmpty()
    .normalizeEmail()
    .escape()
    .withMessage('Please enter email')
    .custom((value,{req})=>{
        return prisma.user.findUnique({
            where:{email:value}
        })
        .then(user=>{
            if(!user){
                return Promise.reject(
                    'User with email not found'
                )
            }else if(user.status==='ACTIVE'){
                return Promise.reject(
                    'Email already verified'
                )
            }
            return true

        })
    })
]


export const AddUniversityValidation = [
  // University fields
  body('name')
    .notEmpty()
    .withMessage('University name is required')
    .isString()
    .withMessage('University name must be a string')
    .escape()
    .custom(async (value) => {
      const uni = await prisma.university.findUnique({ where: { name: value } });
      if (uni) {
        return Promise.reject('University with this name already exists');
      }
      return true
    }),

  body('location')
    .notEmpty()
    .withMessage('University location is required')
    .isString()
    .withMessage('University location must be a string')
    .escape(),

  body('description')
    .notEmpty()
    .withMessage('University description is required')
    .isString()
    .withMessage('University description must be a string')
    .escape()
];


export const AddCollegeValidation = [
  // College fields
  body('name')
    .notEmpty()
    .withMessage('College name is required')
    .isString()
    .withMessage('College name must be a string')
    .trim()
    .escape()
    .custom(async (value) => {
      const college = await prisma.college.findUnique({ where: { name: value } });
      if (college) {
        return Promise.reject(
            'College with this name already exists'
        );
      }
      return true
    }),

  body('location')
    .notEmpty()
    .withMessage('College location is required')
    .isString()
    .withMessage('College location must be a string')
    .trim()
    .escape(),

  body('description')
    .notEmpty()
    .withMessage('College description is required')
    .isString()
    .withMessage('College description must be a string')
    .trim()
    .escape(),

  // Director fields
  body('firstName')
    .notEmpty()
    .withMessage('Director name is required')
    .isString()
    .withMessage('Director name must be a string')
    .trim()
    .escape(),

  body('email')
    .notEmpty()
    .withMessage('Director email is required')
    .isEmail()
    .withMessage('Valid email is required')
    .normalizeEmail()
    .custom(async (value) => {
      const user = await prisma.user.findUnique({ where: { email: value } });
      if (user) {
        return Promise.reject('Email is already in use');
      }
      return true
    }),

  body('gender')
    .notEmpty().withMessage('Gender is required')
    .isIn(['Male', 'Female'])
    .withMessage('Gender must be either Male or Female'),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters'),

  body('phone')
    .optional()
    .isMobilePhone('any')
    .withMessage('Phone must be a valid mobile number'),
    body("dateOfBirth")
    .notEmpty()
    .withMessage('Date of birth required')
    .isDate()
    .withMessage('Date of birth is not date')
    .escape(),
    body("jobTitle")
    .notEmpty()
    .withMessage('Job title required')


];


export const AddSchoolValidation = [
  // 🔹 School name — required + unique
  body('name')
    .notEmpty().withMessage('School name is required')
    .trim()
    .escape()
    .custom(async (value) => {
      const existingSchool = await prisma.school.findUnique({ where: { name: value } });
      if (existingSchool) throw new Error('A school with this name already exists');
      return true;
    }),

  // 🔹 School description — required
  body('description')
    .notEmpty().withMessage('School description is required')
    .trim()
    .escape(),

  // 🔹 Dean’s first name
  body('firstName')
    .notEmpty().withMessage("Dean's first name is required")
    .trim()
    .escape(),

  // 🔹 Dean’s last name
  body('lastName')
    .notEmpty().withMessage("Dean's last name is required")
    .trim()
    .escape(),

  // 🔹 Email — required, valid, unique
  body('email')
    .notEmpty().withMessage("Dean's email is required")
    .isEmail().withMessage('Invalid email format')
    .normalizeEmail()
    .custom(async (value) => {
      const user = await prisma.user.findUnique({ where: { email: value } });
      if (user) throw new Error('Email is already in use');
      return true;
    }),

  // 🔹 Gender — Male or Female
  body('gender')
    .notEmpty().withMessage('Gender is required')
    .isIn(['Male', 'Female']).withMessage('Gender must be "Male" or "Female"'),

  // 🔹 Password — min 5 chars
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),

  // 🔹 Phone — optional, but must be valid if provided
  body('phone')
    .optional({ checkFalsy: true })
    .isMobilePhone('any').withMessage('Invalid phone number format'),

  // 🔹 Date of birth — ISO string, must be a valid date
  body('dateOfBirth')
    .notEmpty().withMessage('Date of birth is required')
    .isISO8601().withMessage('Date must be in ISO8601 format (YYYY-MM-DD)')
    .toDate(),

  // 🔹 Job title — required
  body('jobTitle')
    .notEmpty().withMessage("Dean's job title is required")
    .trim()
    .escape()
];

export const AddDepartmentValidation = [
  // Department fields
  body('name')
    .notEmpty()
    .withMessage('Department name is required')
    .trim()
    .escape(),

  body('description')
    .notEmpty()
    .withMessage('Department description is required')
    .trim()
    .escape(),

  // HOD fields
  body('hodName')
    .notEmpty()
    .withMessage("HOD name is required")
    .trim()
    .escape(),

  body('email')
    .notEmpty()
    .withMessage("HOD email is required")
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail()
    .custom(async (value) => {
      const existingUser = await prisma.user.findUnique({ where: { email: value } });
      if (existingUser) {
        return Promise.reject('Email is already in use');
      }
    }),

  body('gender')
    .notEmpty()
    .withMessage('Gender is required')
    .isIn(['Male', 'Female'])
    .withMessage('Gender must be Male or Female'),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters'),

  body('phone')
    .optional()
    .isMobilePhone('any')
    .withMessage('Phone must be a valid mobile number'),
];



export const verify_Otp=[
    body('email')
    .notEmpty()
    .withMessage('Provide email')
    .toLowerCase()
    .isString()
    .escape()
    .custom((value,{req})=>{
        return prisma.user.findUnique({
            where:{email:value}
        })
        .then(user=>{
            if(!user){
                return Promise.reject(
                    'User with email not found !'
                )
            }else if(user.status==='ACTIVE'){
                return Promise.reject(
                    'User with email already verified!'
                )
            }

        })
    }),
    body('otp')
    .notEmpty()
    .withMessage('Privide otp code')
    .escape()

]

export const loginValidation=[
    body('email')
    .notEmpty()
    .toLowerCase()
    .normalizeEmail()
    .custom((value,{req})=>{
        return prisma.user.findUnique({
            where:{email:value}
        })
        .then(user=>{
            if(!user){
                return Promise.reject(
                    'Email or password incorrect !'
                )
            }
            if(user.status==='INACTIVE'){
                return Promise.reject(
                    'Email not verified please verify your email'
                )
            }
        })
    }),
    body('password')
    .notEmpty()
    .withMessage('Password required !')
    .escape()

]