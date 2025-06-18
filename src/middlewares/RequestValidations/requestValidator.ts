import { z } from "zod";

export const AddUniversityFlatSchema = z.object({
  /* university */
  nameUn:        z.string().min(3),
  locationUn:    z.string().min(2),
  descriptionUn: z.string().min(5),

  /* college */
  nameCollege:        z.string().min(3),
  locationCollege:    z.string().min(2),
  descriptionCollege: z.string().min(5),

  /* director */
  nameDir:  z.string().min(2),
  email:    z.string().email(),
  gender:   z.enum(["Male", "Female"]),
  password: z.string().min(6),
  phone:    z.string().min(10).optional(), // optional
});

export type AddUniversityFlatBody = z.infer<typeof AddUniversityFlatSchema>;








// import {body} from 'express-validator'
// import { PrismaClient } from '@prisma/client'

// const prisma=new PrismaClient()

// export const RegisterValidation=[
//     body('name')
//     .notEmpty()
//     .withMessage('Name must not be empty!')
//     .escape()
//     .isLength({min:3})
//     .withMessage('Name charcter must be at least 3 character !'),
//     body('email')
//     .notEmpty()
//     .normalizeEmail()
//     .withMessage('Email required !')
//     .escape()
//     .custom((value,{req})=>{
//         return prisma.user.findUnique({
//             where:{email:value}
//         }).then(user=>{
//             if(user){
//                 return Promise.reject(
//                     'User with email already exist'
//                 )
//             }
//         })
//     })
//     .isLength({min:5})
//     .withMessage('Password must be at least 5 digits'),
//     body('reg_no')
//     .notEmpty()
//     .withMessage('Reg number required!')
//     .escape()
//     .isNumeric()
//     .withMessage('Reg number must be a numbers')
    
// ];


// export const resendOtpValidation=[
//     body('email')
//     .notEmpty()
//     .withMessage('Email required!')
//     .normalizeEmail()
//     .escape()
//     .custom((value,{req})=>{
//         return prisma.user.findUnique({
//             where:{email:value}
//         })
//         .then(user=>{
//             if(user?.status ==='ACTIVE'){
//                 return Promise.reject(
//                     'User with email already verified, you can login!'
//                 )
//             }else if(!user){
//                 return Promise.reject('User with email not found')
//             }
//         })
//     })
// ];

// export const verifyOtpValidation=[
//     body('email')
//     .notEmpty()
//     .withMessage('Email required!')
//     .normalizeEmail()
//     .escape()
//     .custom((value,{req})=>{
//         return prisma.user.findUnique({
//             where:{email:value}
//         })
//         .then(user=>{
//             if(!user){
//                 return Promise.reject(
//                     'User with email not found!'
//                 )
//             }else if(user.status ==='ACTIVE'){
//                 return Promise.reject(
//                     'Email already verified !'
//                 )
//             }
//         })
//     }),
//     body('otp')
//     .notEmpty()
//     .withMessage('OTP required!')
//     .escape()
// ];

// export const LoginValidation=[
//     body('email')
//     .notEmpty()
//     .withMessage('Email required!')
//     .escape()
//     .normalizeEmail()
//     .custom((value,{req})=>{
//         return prisma.user.findUnique({
//             where:{email:value}
//         })
//         .then(user=>{
//             if(!user){
//                 return Promise.reject(
//                     'Email or password incorrect!'
//                 )
//             }else if(user.status ==='INACTIVE'){
//                 return Promise.reject(
//                     'Email is not verified, please verify your email!'
//                 )
//             }
//         })
//     }),
//     body('password')
//     .notEmpty()
//     .withMessage('Password required')
//     .escape()

// ];

// export const fogetPasswordValdation=[
//     body('email')
//     .notEmpty()
//     .withMessage('Email required')
//     .custom((value,{req})=>{
//         return prisma.user.findUnique({
//             where:{email:value}
//         })
//         .then(user=>{
//             if(!user){
//                 return Promise.reject(
//                     'Email or password incorrect!'
//                 )
//             }
//         })
//     }),
// ];

// export const AddCollegeValidation=[
//     body('name')
//     .notEmpty()
//     .withMessage('University required!')
//     .escape()
//     .toUpperCase()
//     .custom((value,{req})=>{
//         return prisma.college.findUnique({
//             where:{name:value}
//         })
//         .then(college=>{
//             if(college){
//                 return Promise.reject(
//                     'College with this name existing'
//                 )
//             }
//         })
//     })
// ]