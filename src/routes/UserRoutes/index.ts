import { Router } from "express";
import {Register,resendOtp,verifyOtp,Login,forgetPassword,resetPassword} from '../../controllers/user'
import {RegisterValidation,resendOtpValidation,verifyOtpValidation,LoginValidation,fogetPasswordValdation} from '../../middlewares/RequestValidations/requestValidator'
import { validateRequest } from "../../middlewares/Auth/errorValiations";
import {AuthorizeRoles}from '../../middlewares/Auth/TokenVerify'


const router=Router()

router.post('/user/register',RegisterValidation,validateRequest,Register);
router.post('/user/resendOtp',resendOtpValidation,validateRequest,resendOtp);
router.post('/user/verifyOtp',verifyOtpValidation,validateRequest,verifyOtp);
router.post('/user/login',LoginValidation,validateRequest,Login);
router.post('/user/forget-password',fogetPasswordValdation,validateRequest,forgetPassword);
router.post('/user/rest-password',resetPassword)


export default router