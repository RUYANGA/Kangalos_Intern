import { body } from "express-validator";
import { PrismaClient } from "@prisma/client";
import { min } from "date-fns";

const prisma=new PrismaClient()


export const signUp_Validation=[
    body("name")
    .notEmpty()
    .withMessage('Username must not be empty')
    .escape()
    .isString()
    .withMessage('Username must be string')
    .isLength({min:3})
    .withMessage('User must be at least 3 char '),
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
        })
    }),
    body("reg_no")
    .notEmpty()
    .withMessage('Reg number required')
    .custom((value,{req})=>{
        return prisma.user.findUnique({
            where:{
                reg_no:value
            }
        })
        .then((value)=>{
            if(value){
                return Promise.reject(
                    "Reg number existing"
                )
            }
        })
    }),
    body("password")
    .notEmpty()
    .withMessage('Password required !')
    .isLength({min:5})
    .withMessage('Password length must be at least 5 character'),
    body("gender")
    .notEmpty()
    .withMessage('Gender required !')
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

        })
    })
]


export const AddUniversityValidation = [
  // University fields
  body('nameUn')
    .notEmpty().withMessage('University name is required')
    .isString().withMessage('University name must be a string')
    .trim()
    .escape()
    .custom(async (value) => {
      const uni = await prisma.university.findUnique({ where: { name: value } });
      if (uni) {
        return Promise.reject('University with this name already exists');
      }
    }),

  body('locationUn')
    .notEmpty()
    .withMessage('University location is required')
    .isString()
    .withMessage('University location must be a string')
    .trim()
    .escape(),

  body('descriptionUn')
    .notEmpty()
    .withMessage('University description is required')
    .isString()
    .withMessage('University description must be a string')
    .trim()
    .escape(),

  // College fields
  body('nameCollege')
    .notEmpty()
    .withMessage('College name is required')
    .isString()
    .withMessage('College name must be a string')
    .trim()
    .escape()
    .custom(async (value) => {
      const college = await prisma.college.findUnique({ where: { name: value } });
      if (college) {
        return Promise.reject('College with this name already exists');
      }
    }),

  body('locationCollege')
    .notEmpty()
    .withMessage('College location is required')
    .isString()
    .withMessage('College location must be a string')
    .trim()
    .escape(),
  body('descriptionCollege')
    .notEmpty()
    .withMessage('College description is required')
    .isString()
    .withMessage('College description must be a string')
    .trim()
    .escape(),

  // Director fields
  body('nameDir')
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
    .withMessage('Director email must be valid')
    .normalizeEmail()
    .custom(async (value) => {
      const user = await prisma.user.findUnique({ where: { email: value } });
      if (user) {
        return Promise.reject(
            'User with this email already exists'
        );
      }
    }),

  body('phone')
    .optional()
    .isMobilePhone('any')
    .withMessage('Phone must be a valid phone number')
    .trim()
    .escape(),

  body('gender')
    .notEmpty()
    .withMessage('Gender is required')
    .isIn(['Male', 'Female'])
    .withMessage('Gender must be either Male or Female'),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters'),
];


export const AddCollegeValidation = [
  // College fields
  body('nameCollege')
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
    }),

  body('locationCollege')
    .notEmpty()
    .withMessage('College location is required')
    .isString()
    .withMessage('College location must be a string')
    .trim()
    .escape(),

  body('descriptionCollege')
    .notEmpty()
    .withMessage('College description is required')
    .isString()
    .withMessage('College description must be a string')
    .trim()
    .escape(),

  // Director fields
  body('nameDir')
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
];


export const AddSchoolValidation = [
  // 🔹 School name — now checks uniqueness
  body('name')
    .notEmpty().withMessage('School name is required')
    .trim()
    .escape()
    .custom(async (value) => {
      const existingSchool = await prisma.school.findUnique({
        where: { name: value },
      });
      if (existingSchool) {
        return Promise.reject('A school with this name already exists');
      }
    }),

  // 🔹 School location
  body('location')
    .notEmpty().withMessage('School location is required')
    .trim()
    .escape(),

  // 🔹 School description
  body('description')
    .notEmpty().withMessage('School description is required')
    .trim()
    .escape(),

  // 🔹 Dean details
  body('nameDean')
    .notEmpty().withMessage("Dean's name is required")
    .trim()
    .escape(),

  body('email')
    .notEmpty().withMessage("Dean's email is required")
    .isEmail().withMessage('Must be a valid email')
    .normalizeEmail()
    .custom(async (value) => {
      const user = await prisma.user.findUnique({ where: { email: value } });
      if (user) {
        return Promise.reject('Email is already in use');
      }
    }),

  body('gender')
    .notEmpty().withMessage('Gender is required')
    .isIn(['Male', 'Female']).withMessage('Gender must be Male or Female'),

  body("password")
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters'),

  body('phone')
    .optional()
    .isMobilePhone('any').withMessage('Phone must be a valid mobile number'),
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
    .withMessage('Email required')
    .toLowerCase()
    .escape()
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