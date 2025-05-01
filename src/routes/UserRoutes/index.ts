import { Router } from "express";
import {Register,resendOtp} from '../../controllers/user'
import {RegisterValidation,resendOtpValidation} from '../../middlewares/RequestValidations/requestValidator'
import { validateRequest } from "../../middlewares/Auth/errorValiations";


const router=Router()
router.post('/user/register',RegisterValidation,validateRequest,Register);
router.post('/user/resendOtp',resendOtpValidation,validateRequest,resendOtp)


export default router