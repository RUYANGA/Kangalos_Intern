import { Router } from "express";
import {Register,resendOtp,verifyOtp,Login,forgetPassword,resetPassword} from '../../controllers/user'

import {SignUpZ} from '../../middlewares/zod/userRegister'
import {LoginZ} from '../../middlewares/zod/userLogin'
import {zodValidate} from '../../middlewares/Auth/zodValidaate'
import {VerifyOtpZ} from '../../middlewares/zod/verifyOtp'
import {ResendOtpZ} from '../../middlewares/zod/resendOtp'



const router=Router()

router.post('/user/register',zodValidate(SignUpZ),Register);
router.post('/user/resendOtp',zodValidate(VerifyOtpZ),resendOtp);
router.post('/user/verifyOtp',zodValidate(ResendOtpZ),verifyOtp);
router.post('/user/login',zodValidate(LoginZ),Login);
router.post('/user/forget-password',forgetPassword);
router.post('/user/rest-password',resetPassword)


export default router