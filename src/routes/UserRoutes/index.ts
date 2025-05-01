import { Router } from "express";
import {Register,resendOtp,verifyOtp} from '../../controllers/user'
import {RegisterValidation,resendOtpValidation} from '../../middlewares/RequestValidations/requestValidator'
import { validateRequest } from "../../middlewares/Auth/errorValiations";


const router=Router()
router.post('/user/register',RegisterValidation,validateRequest,Register);
router.post('/user/resendOtp',resendOtpValidation,validateRequest,resendOtp);
router.post('/user/verifyOtp',verifyOtp)


export default router