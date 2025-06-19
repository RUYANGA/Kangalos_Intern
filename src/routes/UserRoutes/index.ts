import { Router } from "express";
import {Register,resendOtp,verifyOtp,Login,forgetPassword,resetPassword} from '../../controllers/user'

import { signUp_Validation ,resendOtp_validation,verify_Otp,loginValidation ,} from "../../middlewares/RequestValidations/requestValidator";
import {validateRequest} from '../../middlewares/RequestValidations/validates'



const router=Router()

router.post('/user/register',signUp_Validation,validateRequest,Register);
router.post('/user/resendOtp',resendOtp_validation,validateRequest,resendOtp);
router.post('/user/verifyOtp',verify_Otp,validateRequest,verifyOtp);
router.post('/user/login',loginValidation,validateRequest,Login);
router.post('/user/forget-password',forgetPassword);
router.post('/user/rest-password',resetPassword)


export default router