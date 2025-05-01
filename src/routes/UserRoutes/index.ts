import { Router } from "express";
import {Register,resendOtp} from '../../controllers/user'
import {RegisterValidation} from '../../middlewares/RequestValidations/requestValidator'
import { validateRequest } from "../../middlewares/Auth/errorValiations";


const router=Router()
router.post('/user/register',RegisterValidation,validateRequest,Register);
router.post('/user/resendOtp',resendOtp)


export default router